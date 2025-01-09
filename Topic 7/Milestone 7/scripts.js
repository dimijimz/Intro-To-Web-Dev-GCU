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

darkModeToggle.addEventListener("click", function () {
    // Toggle a 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Update button text dynamically
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode";
    } else {
        darkModeToggle.textContent = "Dark Mode";
    }
});

