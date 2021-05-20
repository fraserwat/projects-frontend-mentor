document.getElementById("slider").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100,
        style = document.createElement('style');
    
    style.textContent = `#slider::-webkit-slider-runnable-track {background: linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, #fff ${value}%, hsl(224, 65%, 95%) 100%)}`
    document.body.appendChild(style);
};