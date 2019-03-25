function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {
            lat: -41.119785, 
            lng: 173.013014
        },
          
    });
    
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        {lat: -36.86667, lng: 174.76667},
        {lat: -41.51603, lng: 173.9528},
        {lat: -43.53333, lng: 172.63333},
        {lat: -45.87416, lng: 170.50361},
        {lat: -42.46667, lng: 171.2},
        {lat: -37.78333, lng: 175.28333},
        {lat: -46.4, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ];
      
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

        // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
                
      
}