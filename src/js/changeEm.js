// Get the modal
var modal = document.getElementById("emailModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Display the modal after 5 seconds
setTimeout(function() {
    modal.style.display = "block";
}, 5000);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
