// Armenia Tax Calculator - JavaScript
// Exchange rates from Central Bank of Armenia (Official API)

// Global variables
let currentLanguage = 'en';

// API configuration for Central Bank of Armenia
const CBA_API_URL = "https://cb.am/latest.json.php";
const FALLBACK_API_URL = "https://v6.exchangerate-api.com/v6/10e9710054c30d5afc642905/latest/USD";

// Function to fetch exchange rates from Central Bank of Armenia
async function getExchangeRates() {
    try {
        // First try the official Central Bank of Armenia API
        const response = await fetch(CBA_API_URL);
        
        if (response.ok) {
            const data = await response.json();
            
            // Extract USD and EUR rates from the JSON response
            const usdRate = parseFloat(data.USD);
            const eurRate = parseFloat(data.EUR);
            
            if (usdRate && eurRate && !isNaN(usdRate) && !isNaN(eurRate)) {
                return {
                    usdToAmd: usdRate, // CBA API returns direct rates
                    eurToAmd: eurRate, // CBA API returns direct rates
                    source: 'Central Bank of Armenia (Official)'
                };
            }
        }
        
        // Fallback to the original API if CBA fails
        console.log("CBA API failed, using fallback API");
        const fallbackResponse = await fetch(FALLBACK_API_URL);
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackData.result === "success") {
            return {
                usdToAmd: fallbackData.conversion_rates.AMD,
                eurToAmd: fallbackData.conversion_rates.AMD / fallbackData.conversion_rates.EUR,
                source: 'Fallback API'
            };
        } else {
            throw new Error("Both APIs failed");
        }
        
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        
        // Return fallback rates if all APIs fail
        return {
            usdToAmd: 400, // Fallback rate if API fails
            eurToAmd: 450, // Fallback rate if API fails
            source: 'Fallback rates'
        };
    }
}

// Function to update exchange rate display
async function updateExchangeRates() {
    try {
        const rates = await getExchangeRates();
        
        // Update the rate displays with comma formatting
        document.getElementById('usdRate').textContent = formatNumberWithCommas(rates.usdToAmd);
        document.getElementById('eurRate').textContent = formatNumberWithCommas(rates.eurToAmd);
        
        // Add source indicator
        const sourceIndicator = document.createElement('small');
        sourceIndicator.className = 'text-muted d-block mt-1';
        sourceIndicator.textContent = `Source: ${rates.source}`;
        
        // Clear previous source indicators
        document.querySelectorAll('.source-indicator').forEach(el => el.remove());
        
        // Add new source indicator
        document.getElementById('usdRate').parentNode.appendChild(sourceIndicator.cloneNode(true));
        document.getElementById('eurRate').parentNode.appendChild(sourceIndicator.cloneNode(true));
        
        return rates;
    } catch (error) {
        console.error("Error updating exchange rates:", error);
        return null;
    }
}

// Function to perform all calculations based on live exchange rates
async function calculate() {
    const usdInput = document.getElementById("usdAmount").value;
    const outputDiv = document.getElementById("output");

    if (!usdInput || isNaN(usdInput)) {
        alert(LANGUAGES[currentLanguage].enterValidAmount);
        return;
    }

    const usdAmount = parseFloat(usdInput);
    
    // Show loading message
    outputDiv.innerHTML = `<div class="loading">${LANGUAGES[currentLanguage].calculating}</div>`;
    outputDiv.className = 'mt-4 fade-in';

    try {
        // Get current exchange rates
        const rates = await getExchangeRates();
        
        if (!rates) {
            throw new Error("Failed to fetch exchange rates");
        }

        // Calculate the tax threshold dynamically: 200 EUR in AMD
        const taxThresholdAmd = 200 * rates.eurToAmd;

        // USD to AMD calculations
        const convertedUsdToAmd = usdAmount * rates.usdToAmd;
        const taxAmount = convertedUsdToAmd > taxThresholdAmd ? 
            (convertedUsdToAmd - taxThresholdAmd) * 0.15 : 0;
        const finalAmount = convertedUsdToAmd + taxAmount;

        // Determine tax status
        const isTaxable = convertedUsdToAmd > taxThresholdAmd;
        const taxStatus = isTaxable ? 'Taxable' : 'Tax-Free';

        // Get current language translations
        const lang = LANGUAGES[currentLanguage];
        
        // Display results in the desired format with enhanced styling and current language
        outputDiv.innerHTML = `
            <div class="fade-in">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="card bg-primary text-white border-0">
                            <div class="card-body text-center">
                                <h6 class="text-white mb-2" style="text-decoration: underline;">${lang.usdToAmdRate}</h6>
                                <div class="h3 mb-0">${formatNumberWithCommas(rates.usdToAmd)}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card bg-success text-white border-0">
                            <div class="card-body text-center">
                                <h6 class="text-white mb-2" style="text-decoration: underline;">${lang.euroToAmdRate}</h6>
                                <div class="h3 mb-0">${formatNumberWithCommas(rates.eurToAmd)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12 mb-3">
                        <div class="card ${isTaxable ? 'bg-warning' : 'bg-info'} border-0">
                            <div class="card-body text-center">
                                <h6 class="text-dark mb-2" style="text-decoration: underline;">${lang.taxStatus}</h6>
                                <div class="h4 mb-0" style="color: ${isTaxable ? 'red' : 'green'};">${isTaxable ? lang.taxable : lang.taxFree}</div>
                                <small class="text-dark">
                                    ${isTaxable ? lang.aboveThreshold : lang.belowThreshold}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="card bg-light border-0">
                            <div class="card-body text-center">
                                <h6 class="text-muted mb-2">${lang.addedTax}</h6>
                                <div class="h4 text-danger mb-0">${formatNumberWithCommas(taxAmount)}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card bg-light border-0">
                            <div class="card-body text-center">
                                <h6 class="text-muted mb-2">${lang.finalPrice}</h6>
                                <div class="h4 text-success mb-0">${formatNumberWithCommas(finalAmount)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-3">
                    <small class="text-muted">
                        <i class="fas fa-info-circle me-1"></i>
                        ${lang.source} ${rates.source}
                    </small>
                </div>
            </div>
        `;

    } catch (error) {
        console.error("Calculation error:", error);
        outputDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <i class="fas fa-exclamation-triangle me-2"></i>
                ${LANGUAGES[currentLanguage].errorMessage}
            </div>
        `;
    }
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}

// Function to format numbers with commas for clarity
function formatNumberWithCommas(number) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

// Function to format numbers with Armenian currency
function formatAMD(amount) {
    return new Intl.NumberFormat('hy-AM', {
        style: 'currency',
        currency: 'AMD',
        minimumFractionDigits: 2
    }).format(amount);
}

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
}

// Function to update all text on the page based on current language
function updatePageLanguage() {
    const lang = LANGUAGES[currentLanguage];
    
    // Update meta description and title based on language
    const metaDescription = document.querySelector('meta[name="description"]');
    const pageTitle = document.querySelector('title');
    const htmlElement = document.documentElement;
    
    if (currentLanguage === 'hy') {
        metaDescription.setAttribute('content', 'Հաշվեք ապրանքների ներմուծման արժեքն ու հարկերը Հայաստանում։ Մուտքագրեք ԱՄՆ դոլար և ստացեք վերջնական գինը հայկական դրամով։');
        pageTitle.textContent = 'Ապրանքի ներմուծման արժեքի հաշվիչ Հայաստում';
        htmlElement.setAttribute('lang', 'hy');
    } else if (currentLanguage === 'ru') {
        metaDescription.setAttribute('content', 'Рассчитайте налоги и расходы на импорт для Армении. Введите доллары США и получите итоговую цену в армянских драмах.');
        pageTitle.textContent = 'Калькулятор стоимости импорта товаров в Армении';
        htmlElement.setAttribute('lang', 'ru');
    } else {
        metaDescription.setAttribute('content', 'Calculate the total cost and taxes for importing products to Armenia. Enter USD and get the final price in AMD with tax details');
        pageTitle.textContent = 'Armenia Tax Calculator by Khachig Gabriel';
        htmlElement.setAttribute('lang', 'en');
    }
    
    // Update header
    document.querySelector('h1.display-4').textContent = lang.title;
    document.querySelector('p.lead').textContent = lang.subtitle;
    document.querySelector('p.small.opacity-75').textContent = lang.description;
    
    // Update calculator title
    document.querySelector('.card-header h2').textContent = lang.calculatorTitle;
    
    // Update input labels
    document.querySelector('label[for="usdAmount"]').innerHTML = `
        <i class="fas fa-coins me-2 text-warning"></i>
        ${lang.amountLabel}
    `;
    document.getElementById('usdAmount').placeholder = lang.amountPlaceholder;
    
    // Update calculate button
    document.querySelector('button[onclick="calculate()"]').innerHTML = `
        <i class="fas fa-calculator me-2"></i>
        ${lang.calculateButton}
    `;
    
    // Update exchange rate labels
    document.querySelectorAll('.card-body h6')[0].textContent = lang.usdRateLabel;
    document.querySelectorAll('.card-body h6')[1].textContent = lang.eurRateLabel;
    
    // Update info cards
    document.querySelectorAll('.card-title')[0].textContent = lang.taxThresholdTitle;
    document.querySelectorAll('.card-title')[1].textContent = lang.exchangeRatesTitle;
    document.querySelectorAll('.card-text')[0].textContent = lang.taxThresholdText;
    document.querySelectorAll('.card-text')[1].textContent = lang.exchangeRatesText;
    
    // Update footer
    document.querySelector('footer p').textContent = lang.copyright;
    document.querySelector('footer p.small').textContent = lang.exchangeRatesSource;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Update exchange rates on page load
    updateExchangeRates();
    
    // Add event listener for Enter key
    document.getElementById('usdAmount').addEventListener('keypress', handleKeyPress);
    
    // Add language switching event listeners
    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                switchLanguage(this.value);
            }
        });
    });
    
    // Add some interactive features
    const calculateBtn = document.querySelector('button[onclick="calculate()"]');
    calculateBtn.addEventListener('click', function() {
        const lang = LANGUAGES[currentLanguage];
        this.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${lang.calculating}`;
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = `<i class="fas fa-calculator me-2"></i>${lang.calculateButton}`;
            this.disabled = false;
        }, 2000);
    });
    
    // Auto-update exchange rates every hour
    setInterval(updateExchangeRates, 3600000); // 1 hour in milliseconds
});

// Export functions for potential external use
window.ArmeniaTaxCalculator = {
    calculate,
    getExchangeRates,
    updateExchangeRates,
    formatAMD
};
