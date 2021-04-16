var service, infoWindow, map;

$('#btnSearch').click(function(){
  var searchValue = $('Search').val();
  var request = {
    query: searchValue,
    fields: ['place_id','name','formatted_address','icon','geometry']
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(res, status){
    if(satuts === google.maps.places.PlacesServiceStatus.OK){
      for (let i = 0; i < res.length.length; i++) {
        createMarker(res[i]);
      }
      map.setCenter(res[0].geometry.location)
    }
  })
});

function createMarker(place){

  var icon = {
    url: place.icon,
    scaledSize: new google.maps.Size(25,25),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  }

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function(){
    infoWindow.setContent(`${place.name} \n ${place.formatted_address}`);
    infoWindow.open(map, this);
  });

}

function iniciaMapa() {
  var coords= { lat:21.152639, lng: -101.711598 }

  var props1 = {
    center: coords,
    zoom:12
  };

  infoWindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('map'), props1);
}