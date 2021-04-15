function iniciaMapa() {
  var coords= { lat:21.152639, lng: -101.711598 }

  var props1 = {
    center: coords,
    zoom:12
  };
  var map1 = new google.maps.Map(document.getElementById('map1'), props1);

  var props2 = {
    center: coords,
    zoom:12,
    disableDefaultUI: true
  };
  var map2 = new google.maps.Map(document.getElementById('map2'), props2);

  var props3 = {
    center: coords,
    zoom:12,
    zoomControl: false,
    scaleControl: true,
  };
  var map3 = new google.maps.Map(document.getElementById('map3'), props3);

  var props4 = {
    center: coords,
    zoom:12,
    mapTypeControl:true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: [ 'roadmap', 'satellite', 'terrain']
    }
  };
  var map4 = new google.maps.Map(document.getElementById('map4'), props4);

  var props5 = {
    center: coords,
    zoom:12,
    mapTypeControl:true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl:true,
    zoomControlOptions : {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl:true,
  };
  var map5 = new google.maps.Map(document.getElementById('map5'), props5);


  var limits = {
    north: 21.390039,
    south: 20.858414,
    west: -102.149631,
    east: -101.092990
  }
  var props6 = {
    center: coords,
    zoom:18,
    restriction: {
      latLngBounds: limits,
      strictBounds: true
    }
  };
  var map6 = new google.maps.Map(document.getElementById('map6'), props6);

/*
*
* CODE FOR THE CUSTOM MAP STYLING
*
*/

var styledMapType = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

var customProps = {
  center: {
    lat: 21.152639,
    lng: -101.711598,
  },
  zoom: 14,
  disableDefaultUI: true,
  streetViewControl: true,
  streetViewControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT
  }
};


var mapCustom = new google.maps.Map(document.getElementById('mapCustom'), customProps);

mapCustom.mapTypes.set('style_map', styledMapType);
mapCustom.setMapTypeId('style_map');

}