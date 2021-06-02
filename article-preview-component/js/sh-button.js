
shareButton = () => {
    let popup = document.getElementById('share-popup')
    console.log(popup.classList.contains('hide'))
    if (popup.classList.contains('hide')) {
        popup.classList.remove('hide') } 
    else {
        popup.classList.add('hide')
    }
}
