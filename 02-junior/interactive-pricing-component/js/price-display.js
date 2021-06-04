function sliderChange(val) {
    document.getElementById('pageview-var').innerHTML = (val < 1000) ? `${val}k` : `1M`;
    document.getElementById('amount-var').innerHTML = calculatePrice(val);
}

function calculatePrice(val) {
    let cost; 
    if ((val ) < 50) {
        cost = 8
    } else 
    if (val < 100) {
        cost = 12
    } else 
    if (val < 500) {
        cost = 16
    } else 
    if (val < 1000) {
        cost = 24
    } else {
        cost = 36
    }
    return (pricingPlan === 'monthly') ? cost.toFixed(2) : (cost * 12 * 0.75).toFixed(2)
}