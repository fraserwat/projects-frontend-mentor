function addErrorClass (inputClass) {
    inputClass.classList.add('activated');
}
function removeErrorClass (inputClass) {
    inputClass.classList.remove('activated');
}

function validateInputs() {
    const emailCheck = emailRegex.test(
        document.getElementById('email-input').value.toUpperCase()
    );
    inputs.forEach(input => {
        switch (input.firstElementChild.type) {
            case 'password':
                (input.firstElementChild.value.length < 8) ? addErrorClass(input) : removeErrorClass(input);
                break;
            case 'email':
                (!(emailCheck)) ? addErrorClass(input) : removeErrorClass(input);
                break;
            default:
                (input.firstElementChild.value.length < 1) ? addErrorClass(input) : removeErrorClass(input);
        }
    })
    return (document.querySelectorAll('.activated').length > 0) ? false : true;
}

const inputs = document.querySelectorAll('.error-check');
const emailRegex = new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$");

let validateForm = (event) => validateInputs() ? true : event.preventDefault();