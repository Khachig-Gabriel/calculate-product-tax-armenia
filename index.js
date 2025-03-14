// Function to convert USD to AMD
function convert(usd) {
    return usd * 400;
}

// Function to calculate the tax based on the converted value
function tax(usd) {
    const dram = convert(usd); // Convert USD to AMD
    if (dram > 82500) {
        return (dram - 82500) * 0.15; // Calculate tax if the converted value exceeds 82,500 AMD
    } else {
        return 0;
    }
}

// Function to calculate the total fees including tax
function allFees(usd) {
    const dram = convert(usd); // Convert USD to AMD
    if (dram > 82500) {
        const inflated = (dram - 82500) * 0.15; // Calculate additional tax if applicable
        return dram + inflated; // Return the final cost including the tax
    } else {
        return dram; // Return the converted value without tax if not applicable
    }
}

// Function to display results in the HTML
function print(usd) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p><strong>USD:</strong> ${usd}</p>
        <p><strong>Added Tax (AMD):</strong> ${tax(usd)}</p>
        <p><strong>Final price (AMD):</strong> ${allFees(usd)}</p>
    `;
}

// Function to get user input and calculate the result
function calculate() {
    const usdInput = document.getElementById('usdAmount').value;
    
    // Check if the input is valid (a number and not empty)
    if (usdInput && !isNaN(usdInput)) {
        const usdAmount = parseFloat(usdInput); // Convert to float
        print(usdAmount); // Call the print function to display the result
    } else {
        alert("Please enter a valid amount in USD."); // Alert if input is not valid
    }
}
