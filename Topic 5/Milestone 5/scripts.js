// Function to toggle background color on button click
function changeBackgroundColor() {
    if (document.body.style.backgroundColor === "purple") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "purple";
    }
}

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
