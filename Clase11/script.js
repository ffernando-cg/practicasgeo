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
      style: google.maps.mapTypeControlStyle.DROPDOWN_MENU,
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
    zoom:12,
    restriction: {
      latLngBounds: limits,
      strictBounds: false
    }
  };
  var map6 = new google.maps.Map(document.getElementById('map6'), props6);
}