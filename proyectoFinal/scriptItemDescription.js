var CoordsLat, CoordsLng;


window.onload =function(){
  var id = window.location.toString().split('#')[1]
  console.log(id);

  db.collection('proyectoFinal').doc(`${id}`).get().then( beverage =>{
    selectedData = beverage.data()

    $('#imgProducto').attr('src',`./img/${selectedData.Image}`)
    $('#tituloNombreProducto, #tituloNombreProducto2').text(`${selectedData.Nombre}`)
    $('#txtPrecio').text(`$${selectedData.Precio} Pesos Mexicanos`)


    CoordsLat = selectedData.Coords.latitude;
    CoordsLng = selectedData.Coords.longitude;

    iniciaMapa();
  
  });

};

const iniciaMapa = () =>{  
  var coords= { CoordsLat, CoordsLng }

  var props1 = {
    center: coords,
    zoom:12
  };
  var map = new google.maps.Map(document.getElementById('map'), props1);
}

