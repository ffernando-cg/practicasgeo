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

    }
  })
});

function iniciaMapa() {
  var coords= { lat:21.152639, lng: -101.711598 }

  var props1 = {
    center: coords,
    zoom:12
  };

  infoWindow = new google.maps.infoWindow();

  map = new google.maps.Map(document.getElementById('map'), props1);
}