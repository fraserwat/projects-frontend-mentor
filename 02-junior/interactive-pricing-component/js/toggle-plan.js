let pricingPlan = 'monthly';

function changePlan(annualPlan) {
    var currentPageviews = document.getElementById('pageview-var').innerHTML.match(/\d+/)[0]
    // update
    pricingPlan = (annualPlan) ? 'annual' : 'monthly'
    document.getElementById('amount-var').innerHTML = calculatePrice(currentPageviews);
}