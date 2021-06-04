function validateInput() {
    const emailRegex = document.querySelector('input').value.match(/(^[a-z0-9_\.-]{3,})@{1}([a-z0-9]{3,})(\.{1}[a-z]{2,}){1,2}/i)
    if (emailRegex) {
        removeValidationError()
        return {'email': emailRegex.input}
    }
    else {
        activateValidationError()
        return false     
    }
}
function activateValidationError () {
    const errorElements = ['.error-icon', '.error-message', 'form'];
    errorElements.forEach( elem => document.querySelector(elem).classList.add('active'))
}

function removeValidationError () {
    const errorElements = ['.error-icon', '.error-message', 'form'];
    errorElements.forEach( elem => document.querySelector(elem).classList.remove('active'))
}

let validateEmail = (event) => validateInput() ? true : event.preventDefault()

// add novalidate so we can have our own custom validation
document.querySelector('form').setAttribute('novalidate', true)