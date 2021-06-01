var props= {};
window.onload =function(){
  var id = window.location.toString().split('#')[1]
  console.log(id);

  db.collection('proyectoFinal').doc(`${id}`).get().then( beverage =>{
    selectedData = beverage.data()

    $('#imgProducto').attr('src',`./img/${selectedData.Image}`)
    $('#tituloNombreProducto, #tituloNombreProducto2').text(`${selectedData.Nombre}`)
    $('#txtPrecio').text(`$${selectedData.Precio} Pesos Mexicanos`)

    props = {
      center: {
        lat : Number(selectedData.Coords.latitude),
        lng : Number(selectedData.Coords.longitude)
      },
      zoom: 14
    };
    iniciaMapa();
  
  });

};

var iniciaMapa = () =>{  
  if(props={}){
    return
  }
  else{
  const map = new google.maps.Map($('#map'), props);

      
      let propiedadesMarcador = {
        position: props,
        map,
        title:'Lugar de origen de la bebida'
      }

      const marker = new google.maps.Marker(propiedadesMarcador);

      map.setCenter(props);

      const infowindow = new google.maps.InfoWindow({
        content: info
      })

      marker.addListener('click', () =>{
        infowindow.open(map, marker);
      })

      infowindow.open(map, marker);
    }
}
