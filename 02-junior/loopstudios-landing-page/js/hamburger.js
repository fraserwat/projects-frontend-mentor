const bodyStyle = document.body.style;

function menuClick(){
    let navBar = document.querySelector('.menu');
    if (navBar.classList.contains('active')) {
        navBar.classList.remove('active')
        resumeScroll();
    } else {
        navBar.classList.add('active')
        preventScroll()
    }
}

function preventScroll() {
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    document.body.style.position = 'fixed';
}

function resumeScroll() {
    document.body.style = bodyStyle;
}