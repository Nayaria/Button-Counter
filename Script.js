document.querySelector("#Creater, #Joiner").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

function Create() {
    var newTitle = document.getElementById("CodeInput").value;

    // Check if the input field is empty
    if (!newTitle.trim()) {
        alert("Please enter a room ID before proceeding.");
        return;
    }

    // Store the title in localStorage
    localStorage.setItem('tempTitle', newTitle);

    // Navigate to Host.html
    window.location.href = 'Host.html';
}

function Join() {
    var newTitle = document.getElementById("CodeInput").value;

    // Check if the input field is empty
    if (!newTitle.trim()) {
        alert("Please enter a room ID before proceeding.");
        return;
    }

    // Store the title in localStorage
    localStorage.setItem('tempTitle', newTitle);

    // Navigate to Guest.html
    window.location.href = 'Guest.html';
}

// Retrieve the title from localStorage and set it as the document title
var storedTitle = localStorage.getItem('tempTitle');
if (storedTitle) {
    document.title = storedTitle;
    // Clear the stored title in localStorage
    localStorage.removeItem('tempTitle');
}
