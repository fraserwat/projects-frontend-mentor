var style = document.createElement('style');

function sliderBarUpdate (slider) {
    var value = (slider.value-slider.min)/(slider.max-slider.min)*100
    
    style.textContent = `#slider::-webkit-slider-runnable-track {background: linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)}`
    document.body.appendChild(style);
};