document.querySelector("#CodeInput").addEventListener("keypress", function (evt) {
    console.log (evt)
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