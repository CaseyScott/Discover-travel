// Function for resizing the menu on toggle when viewed in mobile
// Added necessary margins for places when the menu is toggled

$(document).ready(function() {
    $("#button").click(function() {
        $("#places").toggleClass("placesMargins", 0.1);
    });
});