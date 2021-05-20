function sliderChange(val) {
    document.getElementById('pageview-var').innerHTML = (val < 1000) ? `${val}k` : `1M`;
    document.getElementById('month-year-var').innerHTML = calculatePrice(val);
}

function calculatePrice(val) {
    if (val < 50) {
        return 8
    } else 
    if (val < 100) {
        return 12
    } else 
    if (val < 500) {
        return 16
    } else 
    if (val < 1000) {
        return 24
    }
    return 36
}
