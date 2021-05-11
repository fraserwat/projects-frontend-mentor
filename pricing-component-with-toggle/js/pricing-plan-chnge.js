document.querySelector('input[type="checkbox"]').addEventListener('click', togglePricingPlan)

function togglePricingPlan(input) {
    const priceElements = [...document.querySelectorAll('.plan__price--monthly, .plan__price--annual')]
    if (input.target.checked) {
        priceElements.forEach(el => el.classList.add('annual-plan'))
    } else {
        priceElements.forEach(el => el.classList.remove('annual-plan'))
    }
}