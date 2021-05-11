const flagBtns = [...document.querySelectorAll('.pricing-toolbar li img')]
const monthlyPriceLabels = [...document.querySelectorAll('.plan__price--monthly')]
const annualPriceLabels = [...document.querySelectorAll('.plan__price--annual')]

flagBtns.forEach(button => {
    button.addEventListener('click', changeCurrency)
})

function changeCurrency(buttonClick) {
    // Object for what we're going to replace the currency symbol with
    const currencySymbols = {
        'USD': '&dollar;',
        'GBP': '&#163;',
        'CNY': '&#20803;'
    }
    // Loop through all our price plan elements defined outside of function
    for (i=0; i<monthlyPriceLabels.length; i++) {
        // Get the new pricing plan from the productPricing array calculated in currency-conversion.js
        newPriceMonthly = productPricing[buttonClick.target.id].monthly[i]
        newPriceAnnual = productPricing[buttonClick.target.id].annual[i]

        // Apply these new prices to the HTML
        monthlyPriceLabels[i].innerHTML = monthlyPriceLabels[i].innerHTML.replace(/(\d)*\.(\d){2}/g, newPriceMonthly)
        annualPriceLabels[i].innerHTML = annualPriceLabels[i].innerHTML.replace(/(\d)*\.(\d){2}/g, newPriceAnnual)

        // Replace the current currency symbol with the one relevant to our new price plan 
        const newSymbol = currencySymbols[buttonClick.target.id]
        monthlyPriceLabels[i].innerHTML = monthlyPriceLabels[i].innerHTML.replace(/<span>.*<\/span>/g, `<span>${newSymbol}</span>`)
        annualPriceLabels[i].innerHTML = annualPriceLabels[i].innerHTML.replace(/<span>.*<\/span>/g, `<span>${newSymbol}</span>`)
    }
}