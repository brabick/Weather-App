mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhYmljayIsImEiOiJjanU5aHZweXIwNmJuNDRxcWpnMWphZGRtIn0.lcDz2CoUjLPZF12GPQT6Gw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-78.96196465145502, 34.05093386644228])
    .addTo(map);

function onDragEnd() {

    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

    var api = "http://api.openweathermap.org/data/2.5/weather?";
    var lon = "lon=";
    var lat = "lat=";
    var lonValue = lngLat.lng;
    var latValue = lngLat.lat;
    var apiKey = "&appid=d719c01cf81b957caff18cdb3a02ffe2";
    var units = "&units=metric";
    var fullUrl = api + lat + latValue + "&" + lon + lonValue + apiKey + units;
    $.get(fullUrl, function (data, status) {
        console.log(data.main.temp);
        weatherData.innerHTML = "The temperature in " + data.name + " is " + data.main.temp + "C";
    })


}


marker.on('dragend', onDragEnd);


