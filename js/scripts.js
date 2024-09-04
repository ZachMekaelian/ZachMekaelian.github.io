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
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        canvas: document.getElementById('confetti-canvas')
    });
}
