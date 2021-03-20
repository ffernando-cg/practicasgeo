var coords = {
  lat : 29.099358,
  lng : -110.956896
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const idioma = urlParams.get('idioma');

var script = document.createElement('script');

document.getElementById('idioma').value = idioma

script.src=`https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24&callback=iniciaMapa&language=${idioma}`
document.head.appendChild(script);

var iniciaMapa = () =>{
  var map = new google.maps.Map(
      document.getElementById('map'),
      {
        center:coords,
        zoom:3
      }
    );
  }