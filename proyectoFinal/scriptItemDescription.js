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
  var coordenadas = `${CoordsLat} , ${CoordsLng}`;
  $('#imagenmapa').attr('src',`https://maps.googleapis.com/maps/api/staticmap?center= ${coordenadas}&zoom=14&key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24`);
}

