// Monitor window size
let widthOutput = window.innerWidth,
    desktopBreakpoint = 800,
    loadDesktopImages = (widthOutput > desktopBreakpoint) ? true : false;
window.onresize = updateWindowSize;

// Used to only reload images when screen width moves past breakpoint
function updateWindowSize() {
    widthOutput = window.innerWidth;

    if ((loadDesktopImages === false && widthOutput > desktopBreakpoint) || (loadDesktopImages === true && widthOutput <= desktopBreakpoint)) {
        loadDesktopImages = (widthOutput > desktopBreakpoint) ? true : false;
        loadImages(loadDesktopImages)
    }
  }

// Iterates through elements and loads images according to element id and screen width
function loadImages(loadDesktopImages) {
    var creationArray = [...document.querySelectorAll('.creations__preview')]
    creationArray.forEach(obj => {
        let imgURL = `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,0)), url(/images/${(loadDesktopImages) ? 'desktop' : 'mobile'}/image-${obj.id}.jpg)`
        obj.style.backgroundImage = imgURL;
    })
}

// First time load
loadImages(loadDesktopImages) 