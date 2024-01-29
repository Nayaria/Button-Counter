document.querySelector("#Creater, #Joiner").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

function titlechange() {
    var newTitle = document.getElementById("Creater").value;
    document.title = newTitle;
}