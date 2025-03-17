const API_URL = "https://v6.exchangerate-api.com/v6/10e9710054c30d5afc642905/latest/USD";

// Function to fetch the current USD and EUR to AMD exchange rates
async function getExchangeRates() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.result === "success") {
            return {
                usdToAmd: data.conversion_rates.AMD, // USD to AMD rate
                eurToAmd: data.conversion_rates.AMD / data.conversion_rates.EUR // EUR to AMD rate
            };
        } else {
            throw new Error("Invalid API response");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        return {
            usdToAmd: 400, // Fallback rate if API fails
            eurToAmd: 450 // Fallback rate if API fails
        };
    }
}

// Function to perform all calculations based on live exchange rates
async function calculate() {
    const usdInput = document.getElementById("usdAmount").value;
    const outputDiv = document.getElementById("output");

    if (!usdInput || isNaN(usdInput)) {
        alert("Please enter a valid amount in USD.");
        return;
    }

    const usdAmount = parseFloat(usdInput);
    outputDiv.innerHTML = "<p>Loading...</p>"; // Show loading message

    const { usdToAmd, eurToAmd } = await getExchangeRates();

    // Calculate the tax threshold dynamically: 200 EUR in AMD
    const taxThresholdAmd = 200 * eurToAmd;

    // USD to AMD calculations
    const convertedUsdToAmd = usdAmount * usdToAmd;
    const taxAmount = convertedUsdToAmd > taxThresholdAmd ? (convertedUsdToAmd - taxThresholdAmd) * 0.15 : 0;
    const finalAmount = convertedUsdToAmd + taxAmount;

    // Display results in the desired format
    outputDiv.innerHTML = `
        <p><strong>USD to AMD:</strong> ${usdToAmd.toFixed(2)}</p>
        <p><strong>Euro to AMD:</strong> ${eurToAmd.toFixed(2)}</p>
        <p><strong>Added Tax (AMD):</strong> ${taxAmount.toFixed(2)}</p>
        <p><strong>Final Price (AMD):</strong> ${finalAmount.toFixed(2)}</p>
    `;
}
