// Language translations for Armenia Tax Calculator
const LANGUAGES = {
    en: {
        // Header
        title: "Product Import Cost Calculator",
        subtitle: "by Khachig Gabriel",
        description: "Calculate import taxes and costs for Armenia",
        
        // Calculator
        calculatorTitle: "Import Tax Calculator",
        amountLabel: "Amount in USD",
        amountPlaceholder: "Enter USD amount",
        calculateButton: "Calculate",
        
        // Exchange Rates
        usdRateLabel: "USD to AMD Rate",
        eurRateLabel: "EUR to AMD Rate",
        
        // Results
        usdToAmdRate: "USD to AMD Rate",
        euroToAmdRate: "Euro to AMD Rate",
        taxStatus: "Tax Status",
        taxable: "Taxable",
        taxFree: "Tax-Free",
        aboveThreshold: "Above 200 EUR threshold",
        belowThreshold: "Below 200 EUR threshold",
        addedTax: "Added Tax (AMD)",
        finalPrice: "Final Price (AMD)",
        
        // Info Cards
        taxThresholdTitle: "Tax Threshold",
        taxThresholdText: "Imports below 200 EUR are tax-free. Above this threshold, a 15% tax applies to the excess amount.",
        exchangeRatesTitle: "Exchange Rates",
        exchangeRatesText: "Rates are updated every working day between 15:45-16:00 Yerevan time.",
        
        // Footer
        copyright: "© 2025 Armenia Tax Calculator by Khachig Gabriel. All rights reserved.",
        exchangeRatesSource: "Exchange rates provided by Central Bank of Armenia (Official API)",
        
        // Messages
        enterValidAmount: "Please enter a valid amount in USD.",
        calculating: "Calculating...",
        errorMessage: "Error calculating taxes. Please try again or check your internet connection.",
        source: "Source:"
    },
    
    hy: {
        // Header
        title: "Ապրանքի ներմուծման արժեքի հաշվիչ",
        subtitle: "Խաչիկ Գաբրիելի կողմից",
        description: "Հաշվարկեք ներմուծման հարկերը և ծախսերը Հայաստանի համար",
        
        // Calculator
        calculatorTitle: "Ներմուծման Հարկերի Հաշվիչ",
        amountLabel: "Գումարը ԱՄՆ դոլարով",
        amountPlaceholder: "Մուտքագրեք ԱՄՆ դոլարի գումարը",
        calculateButton: "Հաշվարկել",
        
        // Exchange Rates
        usdRateLabel: "ԱՄՆ դոլարից դրամ փոխարժեք",
        eurRateLabel: "Եվրոյից դրամ փոխարժեք",
        
        // Results
        usdToAmdRate: "ԱՄՆ դոլարից դրամ փոխարժեք",
        euroToAmdRate: "Եվրոյից դրամ փոխարժեք",
        taxStatus: "Հարկի Կարգավիճակ",
        taxable: "Հարկվող",
        taxFree: "Հարկազուրկ",
        aboveThreshold: "200 եվրոյի շեմից բարձր",
        belowThreshold: "200 եվրոյի շեմից ցածր",
        addedTax: "Ավելացված Հարկ (դրամ)",
        finalPrice: "Վերջնական Գին (դրամ)",
        
        // Info Cards
        taxThresholdTitle: "Հարկի Շեմ",
        taxThresholdText: "200 եվրոյից ցածր ներմուծումները հարկազուրկ են: Այս շեմից բարձր գումարների վրա գործում է 15% հարկ:",
        exchangeRatesTitle: "Փոխարժեքներ",
        exchangeRatesText: "Փոխարժեքները թարմացվում են ամեն աշխատանքային օր 15:45-16:00 Երեւանի ժամանակով:",
        
        // Footer
        copyright: "© 2025 Հայաստանի Հարկերի Հաշվիչ Խաչիկ Գաբրիելի կողմից: Բոլոր իրավունքները պաշտպանված են:",
        exchangeRatesSource: "Փոխարժեքները տրամադրվում են Հայաստանի Կենտրոնական Բանկի կողմից (Պաշտոնական API)",
        
        // Messages
        enterValidAmount: "Խնդրում ենք մուտքագրել վավեր գումար ԱՄՆ դոլարով:",
        calculating: "Հաշվարկվում է...",
        errorMessage: "Հարկերի հաշվարկման սխալ: Խնդրում ենք փորձել կրկին կամ ստուգել ինտերնետ կապը:",
        source: "Աղբյուր:"
    },
    
    ru: {
        // Header
        title: "Калькулятор Стоимости Импорта Товаров",
        subtitle: "от Хачик Габриэль",
        description: "Рассчитайте налоги и расходы на импорт для Армении",
        
        // Calculator
        calculatorTitle: "Калькулятор Импортных Налогов",
        amountLabel: "Сумма в долларах США",
        amountPlaceholder: "Введите сумму в долларах США",
        calculateButton: "Рассчитать",
        
        // Exchange Rates
        usdRateLabel: "Курс доллара США к драму",
        eurRateLabel: "Курс евро к драму",
        
        // Results
        usdToAmdRate: "Курс доллара США к драму",
        euroToAmdRate: "Курс евро к драму",
        taxStatus: "Статус Налога",
        taxable: "Облагается налогом",
        taxFree: "Без налога",
        aboveThreshold: "Выше порога в 200 евро",
        belowThreshold: "Ниже порога в 200 евро",
        addedTax: "Добавленный налог (драм)",
        finalPrice: "Итоговая цена (драм)",
        
        // Info Cards
        taxThresholdTitle: "Налоговый Порог",
        taxThresholdText: "Импорт ниже 200 евро не облагается налогом. Выше этого порога применяется 15% налог на превышающую сумму.",
        exchangeRatesTitle: "Обменные Курсы",
        exchangeRatesText: "Курсы обновляются каждый рабочий день с 15:45 до 16:00 по ереванскому времени.",
        
        // Footer
        copyright: "© 2025 Калькулятор налогов Армении от Хачик Габриэль. Все права защищены.",
        exchangeRatesSource: "Обменные курсы предоставляются Центральным Банком Армении (Официальное API)",
        
        // Messages
        enterValidAmount: "Пожалуйста, введите действительную сумму в долларах США.",
        calculating: "Вычисляется...",
        errorMessage: "Ошибка при расчете налогов. Пожалуйста, попробуйте снова или проверьте подключение к интернету.",
        source: "Источник:"
    }
};

// Language selector component
const LANGUAGE_SELECTOR = `
<div class="language-selector mb-3">
    <div class="btn-group" role="group" aria-label="Language Selection">
        <input type="radio" class="btn-check" name="language" id="lang-en" value="en" checked>
        <label class="btn btn-outline-primary" for="lang-en">🇺🇸 English</label>
        
        <input type="radio" class="btn-check" name="language" id="lang-hy" value="hy">
        <label class="btn btn-outline-primary" for="lang-hy">🇦🇲 Հայերեն</label>
        
        <input type="radio" class="btn-check" name="language" id="lang-ru" value="ru">
        <label class="btn btn-outline-primary" for="lang-ru">🇷🇺 Русский</label>
    </div>
</div>
`;
