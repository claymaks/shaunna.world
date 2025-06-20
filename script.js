// Get the spinning image element
const spinningImage = document.getElementById('spinningImage');

// Mouse enter event - spin clockwise
spinningImage.addEventListener('mouseenter', function() {
    this.style.transform = 'rotate(360deg)';
    this.classList.remove('reverse');
});

// Mouse leave event - spin counter-clockwise
spinningImage.addEventListener('mouseleave', function() {
    this.style.transform = 'rotate(-360deg)';
    this.classList.add('reverse');
});

// Reset rotation after animation completes
spinningImage.addEventListener('transitionend', function() {
    if (this.classList.contains('reverse')) {
        this.style.transform = 'rotate(0deg)';
        this.classList.remove('reverse');
    } else {
        this.style.transform = 'rotate(0deg)';
    }
});

// Add some fun interactive elements
document.addEventListener('click', function(e) {
    // Create a temporary sparkle effect at click position
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    document.body.appendChild(sparkle);
    
    // Remove the sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1500);
});