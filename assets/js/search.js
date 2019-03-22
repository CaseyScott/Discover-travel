
$(document).ready(function() {
    
    // Function for clearing out the location field when a new country is selected
    var autoComplete = document.querySelector("#autocomplete");
    var country = document.querySelector('#country');
    country.addEventListener('change', () => {
        autoComplete.value = '';
    });

    // Function for disabling radio buttons when the location field is empty
    
    $('input[type="text"]').on('input propertychange paste', function(e) {

        if ($('#autocomplete').val().length > 0) {

            $('input[type="radio"]').prop('disabled', false);

        }
        else {
            $('input[type="radio"]').prop('disabled', true);
        }
    });
    
    // Function for clearing markers when another country is selected
    
    $('select[id="country"]').on('click', function(e) {
        clearMarkers();
        markers= [];
    });
});