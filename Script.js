document.querySelector("#Creater, #Joiner").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

function Create() {
    var newTitle = document.getElementById("CodeInput").value;

    if (!newTitle.trim()) {
        alert("Please enter a title before proceeding.");
        return;
    }

    document.title = newTitle;
}