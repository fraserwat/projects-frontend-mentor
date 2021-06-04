// event listener for left / right arrow keys navigating between testimonials
document.onkeydown = arrowKeyNavigation;
// event listener for clicking buttons
document.querySelectorAll('.slider-button img').forEach( button => {
    button.addEventListener('click', changeActiveTestimonial)
})

let activeTestimonial = 1;

function changeActiveTestimonial(e) {
    nthActiveElement(e.target.id)
    updateActiveStatus()
}

function nthActiveElement(buttonId) {
    const maxId = document.querySelectorAll('.slider-container').length
    // the buttons act as +/- 1 buttons, but loop back round to the other side 
    if (buttonId === 'prev') {
        activeTestimonial = (activeTestimonial > 1) ? activeTestimonial - 1 : maxId;
    } else 
    if (buttonId === 'next') {
        activeTestimonial = (activeTestimonial < maxId) ? activeTestimonial + 1 : 1
    } 
}

function updateActiveStatus() {
    // reset active status
    document.querySelectorAll('.active').forEach( elem => {
        elem.classList.remove('active')
    })
    // append active status to the new "active" testimonial
    document.querySelectorAll('.slider-container')[activeTestimonial - 1].classList.add('active')
    document.querySelectorAll('.image-container img')[activeTestimonial - 1].classList.add('active')
}

// function for navigating between testimonials with arrow keys
function arrowKeyNavigation (key) {
    switch (key.code) {
        case "ArrowLeft":
            nthActiveElement('prev')
            break
        case "ArrowRight":
            nthActiveElement('next')
            break
    }
    updateActiveStatus()
}