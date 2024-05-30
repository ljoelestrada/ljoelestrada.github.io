function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(22.166442, -100.980482),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}