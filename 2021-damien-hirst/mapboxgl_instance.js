// console.log('mapboxgl_instance.js triggered...');

// TODO: Hide accessToken
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXN2YW5idWVsIiwiYSI6ImNranR5NjZ6ZzQzM3YzMHFvNWUyMzhsNHQifQ.FQsG7QWSzTDUmYskQEAuLQ';

const centerLocation = [9.845783, 46.493951];

const geojson = {
  type: 'exhibition-locations',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.836229555003456,46.48338716026936]
    },
    properties: {
      title: 'Forum Paracelsus,<br>St. Moritz Bad',
      address: 'Plazza Paracelsus 2,<br>7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/e6ZckP1XyYYJsd1j6',
      moreInfoUrl: '/forum',
      markerColor: '#7a2f8a',
      moveAside: false,
      exhibitionType: 'Exhibition'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.837382652620704,46.49037730561599]
    },
    properties: {
      title: 'Two Figures with a Drum',
      address: 'Via Ludains 3, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/3SoqqpMZM3zGY2cm8',
      moreInfoUrl: '/two-figures',
      markerColor: '#f36f23',
      moveAside: false,
      exhibitionType: 'Outdoor installation'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.843045172309075,46.495743903473056]
    },
    properties: {
      title: 'The Monk',
      address: 'Lake St Moritz, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/2Lu9nDnGgXTbeDEN9',
      moreInfoUrl: '/monk',
      markerColor: '#5aa447',
      moveAside: false,
      exhibitionType: 'Outdoor installation'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.848247537562429,46.497075969819974]
    },
    properties: {
      title: 'Temple',
      address: 'Via Dimlej 6, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/3SoqqpMZM3zGY2cm8',
      moreInfoUrl: '/temple',
      markerColor: '#f6ee4e',
      moveAside: false,
      exhibitionType: 'Outdoor installation'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.839961459203437,46.49840041968736]
    },
    properties: {
      title: 'Protestant Church, St. Moritz Dorf',
      address: 'Via Veglia 12, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/TQvKjJiNUzM64WN79',
      moreInfoUrl: '/church',
      markerColor: '#006bff',
      moveAside: true
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.839864288026092,46.49846347218508]
    },
    properties: {
      title: 'Proteus',
      address: 'Via Veglia 12, 7500 St. Moritz',
      locationUrl: 'https://goo.gl/maps/TQvKjJiNUzM64WN79',
      moreInfoUrl: '/uwr2m4-forum',
      markerColor: '#e5232c',
      moveAside: true,
      exhibitionType: 'Exhibition'
    }
  }]
};

window.onload = () => {
  // console.log('window loaded (from mapboxgl_instance)...');
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jonasvanbuel/ckju13q210vxj19ofdvq8so5l', // stylesheet location
      center: centerLocation, // starting position [lng, lat]
      zoom: 13
  });

  map.fitBounds([
    [9.836229555003456,46.48338716026936],
    [9.839961459203437,46.49840041968736]
  ],
  {
    padding: {top: 60, right: 100, bottom: 60, left: 60},
    offset: [-20, 0]
  })

  // add markers to map
  geojson.features.forEach(function(marker) {

    // Marker element
    // const markerEl = document.createElement('div');
    // markerEl.className = 'marker';

    // Circle element
    const dotMarkerEl = document.createElement('div');
    dotMarkerEl.className = marker.properties.moveAside === true ? "dot-marker move-aside" : "dot-marker";
    dotMarkerEl.style = `background-color:${marker.properties.markerColor}`;

    // Popup element
    const popupContent = `
      <h3 style="color:inherit;margin-bottom:12px;margin-top:0">${marker.properties.title}</h3>
      <a href="${marker.properties.moreInfoUrl}" style="margin-bottom:12px">${marker.properties.exhibitionType}</a>
    `;

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(dotMarkerEl)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup() // add popups
                            .setHTML(popupContent))
      .addTo(map)
  });

  // Move church dots aside
  const moveAside = document.querySelectorAll('.move-aside');
  moveAside[1].style.margin = "-10px";
  moveAside[0].style.margin = "10px";
}

