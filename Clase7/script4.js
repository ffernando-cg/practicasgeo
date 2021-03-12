var coords = {
  lat:0,
  lng:0
};

var propiedades = {
  center: coords,
  zoom:2
}


var iniciaMapa = () => {
  fetch('./paises.json')
  .then(
  function(datos){
      const map = new google.maps.Map(document.getElementById('map'),propiedades);

      datos.forEach( marcador => {

        fetch('https://corona.lmao.ninja/v2/countries')
        .then((res)=>{
          res.json().then( (datospaises) => {
            

            datospaises.forEach( registro => {

              var informacion = `<strong>PAIS: </strong> ${registro.country}, casos: ${registro.cases} <br/> <img src="${registro.countryInfo.flag}"/>`;
              var infowindow = new google.maps.InfoWindow({
                content: informacion

              })

              if( registro.country == marcador.CountryName){

                let marker = new google.maps.Marker({
                  map: map,
                  position: new google.maps.LatLng(marcador.countryInfo.lat, marcador.countryInfo.long),
                  title: `${marcador.CountryName} : ${registro.cases}`
                });

                marker.addListener('click', function(){
                  infowindow.open(map,marker);
                })

              }

            })

          })
        })
      });
  })
  .catch(
    (e)=> console.log(`Ocurrio un error: ${e}`)
  )
};