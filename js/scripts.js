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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();  // Prevent form submission
    }
});

// Initialize EmailJS with your user ID
(function() {
    emailjs.init("ygH5gdM95WKmv30xC");  // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;  // Exit the function if fields are empty
    }

    // Prepare email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_z7zke8g", "template_5bhalif", templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            console.log('FAILED...', error);
        });
});

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