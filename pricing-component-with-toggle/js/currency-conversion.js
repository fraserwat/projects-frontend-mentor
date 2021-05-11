function pricingObjectConstructor() {
    let pricingObj = {
        'USD': usdPrices()
    };
    const currencies = ['GBP', 'CNY']

    for (i=0; i<currencies.length; i++) {
        const newCurrency = currencies[i]
        getConversionRate(newCurrency).then(currencyData => {
            pricingObj[newCurrency] = {
                'monthly': pricingObj.USD.monthly.map(price => parseFloat((price * currencyData).toFixed(2))),
                'annual': pricingObj.USD.annual.map(price => parseFloat((price * currencyData).toFixed(2)))
            }
        })
    }
    return pricingObj;
}

function usdPrices() {
    const monthlyPrices = [...document.querySelectorAll('.plan__price--monthly')].map(obj => obj.innerText.match(/(\d)*\.(\d){2}/g)[0])
    const annualPrices = [...document.querySelectorAll('.plan__price--annual')].map(obj => obj.innerText.match(/(\d)*\.(\d){2}/g)[0])
    return {
        'monthly': monthlyPrices.map(price => parseFloat(price)),
        'annual': annualPrices.map(price => parseFloat(price))
    }
}

const getConversionRate = async (toCurrency) => {
    const fromCurrency = 'USD';

    const request = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    const data = await request.json()
    const rate = await data["rates"][toCurrency];

    return rate;
}

const productPricing = pricingObjectConstructor();