$(document).ready(function() {
    
    $("#autocompleteId").val('');  
    // Function for clearing out the location field when a new country is selected
    let autoComplete = document.querySelector("#autocomplete");
    let country = document.querySelector('#country');
    country.addEventListener('change', () => {
        autoComplete.value = '';
    });
    
    // Function for clearing markers when another country is selected
    
    $('select[id="country"]').on('click', function(e) {
        clearMarkers();
        markers= [];
    });
});