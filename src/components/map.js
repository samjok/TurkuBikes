import React, { useEffect } from 'react';
import L from 'leaflet';

function Map() {
  useEffect(() => {
    // create map
    L.map('map', {
      center: [60.4453, 22.2676],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

  return <div id="map"></div>
}

export default Map;