var coords = {
  lat:0,
  lng:0
};




window.onload =function(){
  var id = window.location.toString().split('#')[1]
  console.log(id);

  db.collection('proyectoFinal').doc(`${id}`).get().then( beverage =>{
    selectedData = beverage.data()

    $('#imgProducto').attr('src',`./img/${selectedData.Image}`)
    $('#tituloNombreProducto, #tituloNombreProducto2').text(`${selectedData.Nombre}`)
    $('#txtPrecio').text(`$${selectedData.Precio} Pesos Mexicanos`)


    coords.lat = selectedData.Coords.latitude;
    coords.lng = selectedData.Coords.longitude;

    iniciaMapa();
  
  });

};

var iniciaMapa = () => {

  var propiedades = {
    center: coords,
    zoom:2
  }
  const map = new google.maps.Map(document.getElementById('map'),propiedades);

  let marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
    title: marcador.name
  })

};

