var map = L.map('map').setView([01,35], 8); // MAP co-ordinates customization

// Adding a tile layer to the map. Need an API key to get the map to work
L.tileLayer('http://{s}.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

// MARKERS, CIRCLES & POLYGONS

var marker = L.marker([02, 35]).addTo(map);

// POPUPS

marker.bindPopup("<a href=../popup.html>Map</a>").openPopup();


// FUNCTIONS

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
