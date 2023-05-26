// Add your JavaScript code here
// You can use this file to handle form submissions, perform validation, and add interactivity to your website

// Example code for form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Retrieve form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Perform form validation (e.g., check if fields are not empty, validate email format)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data to a backend server using AJAX or fetch API
    // You can use the 'fetch' function to send a POST request to your backend server
    // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL where you want to send the form data
    fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(function(response) {
        if (response.ok) {
            // Form submission successful
            alert('Thank you for contacting us! We will get back to you soon.');
            document.getElementById('contact-form').reset(); // Reset form fields
        } else {
            // Form submission failed
            alert('Sorry, an error occurred. Please try again later.');
        }
    })
    .catch(function(error) {
        console.log('Error:', error);
    });
});
