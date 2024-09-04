// Wait for the page to load
window.onload = function() {
    // Play celebration music
    let music = document.getElementById('celebration-music');
    music.play();

    // Trigger confetti after the name appears
    setTimeout(() => {
        startConfetti();
    }, 3000); // Start confetti after the name appears
};

// Function to start confetti (using canvas-confetti library)
function startConfetti() {
    var confettiSettings = { target: 'confetti-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

// Include canvas for confetti
let confettiCanvas = document.createElement('canvas');
confettiCanvas.id = 'confetti-canvas';
document.body.appendChild(confettiCanvas);