// --------------------------------------------------
// Custom JavaScript for Dimitri's Website
// --------------------------------------------------

// Function to make the "key" text bold and larger when hovered
function enlargeKey(element) {
    element.style.fontWeight = "bold"; // Increase font weight to bold
    element.style.fontSize = "1.5em"; // Increase font size for emphasis
}

// Function to reset the "key" text to its normal state when hover ends
function resetKey(element) {
    element.style.fontWeight = "normal"; // Reset font weight to normal
    element.style.fontSize = "1em"; // Reset font size to default
}

// --------------------------------------------------
// Dark Mode Toggle Functionality
// --------------------------------------------------

// Select the dark mode toggle button from the DOM
const darkModeToggle = document.getElementById("darkModeToggle");

// Check localStorage for the user's dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode'); // Apply dark mode styling to the body
    darkModeToggle.textContent = "Light Mode"; // Update the button text to "Light Mode"
}

// Add an event listener to toggle dark mode when the button is clicked
darkModeToggle.addEventListener("click", function () {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle("dark-mode");

    // Update button text and save the user's preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode"; // Set button text to "Light Mode"
        localStorage.setItem('darkMode', 'enabled'); // Save dark mode as enabled
    } else {
        darkModeToggle.textContent = "Dark Mode"; // Set button text to "Dark Mode"
        localStorage.setItem('darkMode', 'disabled'); // Save dark mode as disabled
    }
});