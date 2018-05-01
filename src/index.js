// console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
// const location = require("./index")

mapboxgl.accessToken = 'pk.eyJ1IjoiZGNoZW44NDkyIiwiYSI6ImNqZ280N21wODBieHAyeHBtcmFwdWxudHoifQ.xDc7aHG37IMPnUN5IIYFtQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

console.log(newLocation)
newLocation(iconsURLS.hotel, [-74.009, 40.705])

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

