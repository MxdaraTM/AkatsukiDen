// Get the form element
const contactForm = document.getElementById('contact-form');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Retrieve the values from the input fields
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Perform any desired operations with the form data
  // For example, you can send the data to a server using AJAX or fetch

  // Clear the input fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Display a success message or perform any other desired actions
  alert('Form submitted successfully!');
});
