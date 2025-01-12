// --------------------------------------------------
// Custom JavaScript logic across the Website
// --------------------------------------------------

// Function to enlarge the "key" text when hovered over
function enlargeKey(element) {
    // Makes the font bold and increases the font size
    element.style.fontWeight = "bold";
    element.style.fontSize = "1.5em";
}

// Function to reset the "key" text to normal when hover ends
function resetKey(element) {
    // Resets the font weight and size to the default
    element.style.fontWeight = "normal";
    element.style.fontSize = "1em";
}

// --------------------------------------------------
// Dark Mode Toggle Logic
// --------------------------------------------------

// Select the dark mode toggle button from the DOM
const darkModeToggle = document.getElementById("darkModeToggle");

// Add an event listener to handle dark mode toggling
darkModeToggle.addEventListener("click", function () {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Update the button text dynamically based on the current mode
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode";
        localStorage.setItem("darkMode", "enabled"); // Save preference in localStorage
    } else {
        darkModeToggle.textContent = "Dark Mode";
        localStorage.setItem("darkMode", "disabled"); // Save preference in localStorage
    }
});

// Check the user's preference for dark mode on page load
document.addEventListener("DOMContentLoaded", () => {
    // If dark mode was previously enabled, apply it
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode"; // Set button text to "Light Mode"
    }
});

// --------------------------------------------------
// jQuery Logic for Week 1 Content Toggle
// --------------------------------------------------

// Wait for the DOM to fully load
$(document).ready(function () {
    // Add click event listener to the Week 1 toggle button
    $("#toggleTopic1").click(function () {
        // Toggle the visibility of the Week 1 section
        $("#topic1").toggle();
    });
});
