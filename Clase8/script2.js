var coords = {
  lat : 29.099358,
  lng : -110.956896
}

const iniciaMapa = () =>{
  var map = new google.maps.Map(
      $('#map'),
      {
        center:coords,
        zoom:3
      }
    );
  }

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const idioma = urlParams.get('idioma');

var script = document.createElement('script');

$('#idioma').val(idioma);

script.src=`https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24&callback=iniciaMapa&language=${idioma}" async defer`
document.head.appendChild(script);