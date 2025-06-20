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

// Touch or click events for touchscreen users
spinningImage.addEventListener('touchstart', function(e) {
    this.style.transform = 'rotate(360deg)';
    this.classList.remove('reverse');
});
spinningImage.addEventListener('touchmove', function(e) {
    this.style.transform = 'rotate(360deg)';
    this.classList.remove('reverse');
});
spinningImage.addEventListener('click', function(e) {
    this.style.transform = 'rotate(360deg)';
    this.classList.remove('reverse');
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
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1500);
}

// Sparkle on click or touch
document.addEventListener('click', function(e) {
    createSparkle(e.clientX, e.clientY);
});
document.addEventListener('touchstart', function(e) {
    for (let i = 0; i < e.touches.length; i++) {
        createSparkle(e.touches[i].clientX, e.touches[i].clientY);
    }
});

// Sparkle on mouse move or touch move (with throttling)
let lastSparkleTime = 0;
function throttleSparkle(x, y) {
    const now = Date.now();
    if (now - lastSparkleTime > 40) { // 25 sparkles/sec max
        createSparkle(x, y);
        lastSparkleTime = now;
    }
}
document.addEventListener('mousemove', function(e) {
    throttleSparkle(e.clientX, e.clientY);
});
document.addEventListener('touchmove', function(e) {
    for (let i = 0; i < e.touches.length; i++) {
        throttleSparkle(e.touches[i].clientX, e.touches[i].clientY);
    }
});