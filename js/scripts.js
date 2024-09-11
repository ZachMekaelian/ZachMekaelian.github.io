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

/*************************************** Explore Button **********************************************************************/

    // Show the explore button after the confetti animation ends
    setTimeout(() => {
        document.getElementById('explore-button-container').classList.add('show');
    }, 2500); // Show the button 2.5 seconds after starting confetti
}

document.getElementById('explore-button').addEventListener('click', () => {
    window.location.href = 'homepage.html'; // Redirect to the homepage
});

/*************************************** Explore Button **********************************************************************/


/*// Example function to fetch incidents from ServiceNow
async function fetchIncidents() {
    const response = await fetch('https://your-instance.service-now.com/api/now/table/incident', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer your_access_token',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    return data.result;
}

// Call the function and handle the data
fetchIncidents().then(incidents => {
    // Do something with the incidents data
});*/