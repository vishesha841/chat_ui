// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode');
darkModeToggle.addEventListener('change', function() {
    document.body.setAttribute('data-theme', this.checked ? 'dark' : 'light');
});

// Form Validation and Submission
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const outputDisplay = document.getElementById('output-display');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    console.log("Submit button clicked!"); // Debugging

    // Reset error message
    nameError.style.display = 'none';
    outputDisplay.textContent = ''; // Clear previous messages

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        nameError.textContent = 'Please enter your name.';
    } else {
        // Show success message
        outputDisplay.textContent = `Pleasure to meet you, ${nameInput.value}!`;
        console.log("Form validation passed."); // Debugging
    }
});
