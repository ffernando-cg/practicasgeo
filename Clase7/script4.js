var coords = {
  lat:0,
  lng:0
};

var propiedades = {
  center: coords,
  zoom:2
}


var iniciaMapa = () => {
  fetch('paises.json')
        .then(function(response) {

            response.json().then(function(datos) {
    
                const map = new google.maps.Map(document.getElementById('map'), propiedades);


                datos.forEach( marcador => {
                    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
                    .then(function(respuesta) {
                      console.log(marcador);
                        respuesta.json().then(function(datospaises) {

                            datospaises.forEach( registro => {
                              
                              if( registro.country == marcador.CountryName){
                              var informacion = `<strong>PAIS: </strong> ${registro.country}, casos: ${registro.cases} <br/> <img src="${registro.countryInfo.flag}"/>`;

                              var infowindow = new google.maps.InfoWindow({
                                content: informacion
                              });
                              
                                let marker = new google.maps.Marker({
                                  map: map,
                                  position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                                  title: `${marcador.CountryName} : ${registro.cases}`
                                });
                
                                marker.addListener('click', function(){
                                  infowindow.open(map,marker);
                                })
                
                                }
                                
                              }
                            );

                        });

                    });
                    


                });


            });
    
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
  };