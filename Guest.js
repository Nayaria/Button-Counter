
// when document is fully loaded....
(() => {
    var storedTitle = localStorage.getItem('tempTitle');
    if (storedTitle) {
        document.title = storedTitle;
        // Clear the stored title in localStorage
       localStorage.removeItem('tempTitle');
    }
}
)()