const mapbox = require("mapbox-gl")

function newLocation (img, coor){
    const markerAHR = document.create(div);
    markerAHR.style.width = "32px"
    markerAHR.style.height = "39px"
    markerAHR.style.backgroundImage = `url${img}`
    new mapboxgl.Marker(markerAHR).setLngLat(coor).addTo(map);
}

const iconURLS = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel:'http://i.imgur.com/D9574Cu.png',
    restaurant:'http://i.imgur.com/cqR6pUI.png'
}

module.exports = {newLocation, iconURLS};
