addEventListener("keypress", function (evt) {
    //console.log (evt)
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

function Create() {
    var newTitle = document.getElementById("CodeInput").value;
    if (!newTitle.trim()) {
        alert("Please enter a room ID before proceeding.");
        return;
    }
    localStorage.setItem('tempTitle', newTitle);
    window.location.href = 'Host.html';
}

function Join() {
    var newTitle = document.getElementById("CodeInput").value;
    if (!newTitle.trim()) {
        alert("Please enter a room ID before proceeding.");
        return;
    }
    localStorage.setItem('tempTitle', newTitle);
    window.location.href = 'Guest.html';
}

document.getElementById("navbar_icon").addEventListener("click", function() {
    var checkbox = document.getElementById("menu_checkbox");
    checkbox.checked = !checkbox.checked;
});

function checkMaxLength(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
}

document.getElementById("CodeInput").addEventListener("input", function() {
  checkMaxLength(this, 20);
});