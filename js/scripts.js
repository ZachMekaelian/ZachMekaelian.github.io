window.onload = function() {
    // Play celebration music if you have any (check for the element id)
    let music = document.getElementById('celebration-music');
    if (music) {
        music.play();
    }

    // Trigger confetti after the name appears
    setTimeout(() => {
        startConfetti();
    }, 3000); // Start confetti after 3 seconds
};

function startConfetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confetti = window.confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Show the explore button after the confetti animation ends
    setTimeout(() => {
        document.getElementById('explore-button-container').classList.add('show');
    }, 2500); // Show the button 2.5 seconds after starting confetti
}

document.getElementById('explore-button').addEventListener('click', () => {
    window.location.href = 'homepage.html'; // Redirect to the homepage
});