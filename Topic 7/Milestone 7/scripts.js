// Function to make "key" bold and larger when hovered
function enlargeKey(element) {
    element.style.fontWeight = "bold";
    element.style.fontSize = "1.5em";
}

// Function to reset "key" to normal when hover ends
function resetKey(element) {
    element.style.fontWeight = "normal";
    element.style.fontSize = "1em";
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Check localStorage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode'); // Apply dark mode
    darkModeToggle.textContent = "Light Mode"; // Update button text
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Update button text dynamically
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode";
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = "Dark Mode";
        localStorage.setItem('darkMode', 'disabled');
    }
});