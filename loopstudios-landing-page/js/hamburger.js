
function menuClick(){
    let navBar = document.querySelector('.menu');
    if (navBar.classList.contains('active')) {
        navBar.classList.remove('active')
    } else {
        navBar.classList.add('active')
    }
}