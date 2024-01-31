// when document is fully loaded....
(() => {
    var storedTitle = localStorage.getItem('tempTitle');
    if (storedTitle) {
        document.title = storedTitle;
        // Get the h1 element by its id
        var roomNameElement = document.getElementById("RoomName");
        // Change the text content of the h1 element
        roomNameElement.textContent = storedTitle;
    }
})();