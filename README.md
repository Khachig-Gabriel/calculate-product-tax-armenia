# Armenia Tax Calculator by Khachig Gabriel

A professional web application for calculating import taxes and costs for products imported to Armenia. The calculator uses real-time exchange rates from the Central Bank of Armenia to provide accurate calculations.

## 🌟 Features

- **Real-time Exchange Rates**: Fetches current USD and EUR to AMD rates from Central Bank of Armenia
- **Automatic Tax Calculation**: Calculates 15% tax on amounts above 200 EUR threshold
- **Professional UI**: Beautiful, responsive design using Bootstrap 5
- **Fallback API**: Includes backup exchange rate API for reliability
- **Live Updates**: Exchange rates update automatically every hour
- **Mobile Responsive**: Works perfectly on all devices
- **Multi-language Support**: Available in English, Armenian (Հայերեն), and Russian (Русский)
- **Number Formatting**: Clear comma-separated numbers for better readability (e.g., 452,000.00)

## 🚀 Live Demo

Open `index.html` in your web browser to use the calculator.

## 📊 How It Works

1. **Input**: Enter the USD amount you want to import
2. **Calculation**: The system automatically:
   - Fetches current exchange rates from Central Bank of Armenia
   - Converts USD to AMD
   - Checks if the amount exceeds the 200 EUR tax threshold
   - Applies 15% tax on amounts above the threshold
3. **Results**: Displays all calculations in a clear, professional format

## 🔌 API Integration

### Primary API: Central Bank of Armenia (Official)
- **Endpoint**: `https://cb.am/latest.json.php`
- **Source**: [Official CBA API](https://cb.am/latest.json.php)
- **Update Frequency**: Every working day between 15:45-16:00 Yerevan time
- **Coverage**: Official exchange rates from Հայաստանի Հանրապետության Կենտրոնական Բանկ
- **Format**: Simple JSON response with direct currency rates

### Fallback API: ExchangeRate-API
- **Endpoint**: `https://v6.exchangerate-api.com/v6/[API_KEY]/latest/USD`
- **Usage**: Automatically used if AMCB API fails
- **Reliability**: Ensures the calculator always works

## 🏗️ Technical Details

### Frontend
- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **Bootstrap 5**: Professional UI framework
- **Font Awesome**: Beautiful icons throughout the interface

### Backend Logic
- **JavaScript ES6+**: Modern async/await syntax
- **Error Handling**: Comprehensive error handling with fallbacks
- **Rate Caching**: Automatic rate updates every hour
- **Input Validation**: Robust input validation and user feedback

## 📱 Responsive Design

The calculator is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Design Features

- **Gradient Backgrounds**: Professional color schemes
- **Card-based Layout**: Clean, organized information display
- **Hover Effects**: Interactive elements with smooth animations
- **Loading States**: Visual feedback during calculations
- **Color-coded Results**: Easy-to-understand tax status indicators

## 📋 Tax Rules

- **Tax Threshold**: 200 EUR (converted to AMD at current rates)
- **Tax Rate**: 15% on amounts above the threshold
- **Tax-Free**: Imports below 200 EUR are completely tax-free
- **Currency**: All calculations are performed in Armenian Dram (AMD)

## 🚀 Getting Started

1. **Download**: Save all files to a folder
2. **Open**: Double-click `index.html` or open in your web browser
3. **Use**: Enter USD amount and click "Calculate"
4. **View Results**: See detailed breakdown of costs and taxes

## 📁 File Structure

```
armenia-tax-calculator/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styling
├── script.js           # JavaScript logic and API integration
├── languages.js        # Language translations (EN, HY, RU)
├── test.html           # Test page for language switching
└── README.md           # This documentation file
```

## 🔧 Customization

### Adding New Languages
To add a new language, edit the `languages.js` file and add a new language object:

```javascript
const LANGUAGES = {
    // ... existing languages ...
    fr: {
        title: "Calculateur de Taxes d'Importation",
        // ... add all required translations
    }
};
```

### Changing Exchange Rate Sources
Edit the `script.js` file to modify API endpoints:

```javascript
const AMCB_API_URL = "your-new-api-endpoint";
const FALLBACK_API_URL = "your-fallback-api-endpoint";
```

### Modifying Tax Rules
Update the tax calculation logic in the `calculate()` function:

```javascript
const taxThresholdAmd = 200 * rates.eurToAmd; // Change 200 to your threshold
const taxAmount = convertedUsdToAmd > taxThresholdAmd ? 
    (convertedUsdToAmd - taxThresholdAmd) * 0.15 : 0; // Change 0.15 to your tax rate
```

## 🌐 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Internet Explorer 11+ (with polyfills)

## 🌍 Language Support

The calculator supports three languages:

- **🇺🇸 English**: Default language with professional terminology
- **🇦🇲 Հայերեն (Armenian)**: Native language support for Armenian users
- **🇷🇺 Русский (Russian)**: Russian language support for Russian-speaking users

### Language Switching
- Click the language selector buttons at the top of the calculator
- All text, labels, and messages update instantly
- Numbers are formatted with commas for clarity (e.g., 452,000.00)
- Exchange rates display in the selected language

## 📞 Support

For questions or support, please contact Khachig Gabriel.

## 📄 License

© 2025 Armenia Tax Calculator by Khachig Gabriel. All rights reserved.

## 🔗 External Resources

- [Central Bank of Armenia](https://www.cba.am)
- [Fluentax Exchange Rates API](https://www.fluentax.com/products/exchange-rates-api/banks/AMCB)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/)

---

**Note**: This calculator provides estimates based on current exchange rates. For official tax calculations, please consult with Armenian customs authorities or tax professionals.
