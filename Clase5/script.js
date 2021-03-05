var map;

var coordenadas = {
  lat: 0,
  lng: 0
}

var propiedades = {
  center: coordenadas,
  zoom: 20
};

var iniciaMapa = () => {
  map = new google.maps.Map(document.getElementById('map'), propiedades);
  var icon = {
    url: 'https://media0.giphy.com/media/XBKaDapAVVwjT44Hcz/giphy.gif',
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  }

  var marker = new google.maps.Marker({
    position: coordenadas,
    icon: icon,
    map: map
  })

  if(navigator.geolocation){
    setInterval( function() { moveToPosition(marker); console.log('Se ha movido de posicion') }, 5000);
  }

  var moveToPosition = ( marker ) => {

      navigator.geolocation.getCurrentPosition( posicion => {
        var pos = {
          lat: posicion.coords.latitude,
          lng: posicion.coords.longitude,
        }

        marker.setPosition(pos);
        map.panTo(pos);
        map.setCenter(pos);
      });
  }

}