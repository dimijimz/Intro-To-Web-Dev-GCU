$(document).ready(function () {
    console.log("Running the load function.");
    $("#copyright").load("fragments/_copyright.html", function (response, status, xhr) {
        if (status === "error") {
            console.error("Error loading the copyright file:", xhr.status, xhr.statusText);
        } else {
            console.log("Loaded copyright content successfully.");
        }
    });
}); 