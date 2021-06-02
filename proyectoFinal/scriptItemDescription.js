var coords = {
  lat:0,
  lng:0
};

var info = `<h1>Lugar de origen de la bebida</h1><p>De este lugar en particular es de donde esta bebida, hasta tu casa, en caso de que quieras comprarla</p><br/><p>Tiempo estimado de entrega: ${Math.floor(Math.random() * (50 - 7)) + 7} días</p>`


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



    let propiedadesMarcador = {
      position: coords,
      map,
      title:'Lugar de origen de la bebida'
    }

    const marker = new google.maps.Marker(propiedadesMarcador);

    map.setCenter(coords);

    const infowindow = new google.maps.InfoWindow({
      content: info
    })

    marker.addListener('click', () =>{
      infowindow.open(map, marker);
    })

    infowindow.open(map, marker);
};

