const datosDeLaCuenta = $('.datosDeLaCuenta');
const listaLoggedOut = $('.logged-out');
const listaLoggedIn = $('.logged-in');

const configurarMenu = (user) => {
    if(user){
      db.collection('usuarios').doc(user.uid).get().then( doc => {
        $('.datosDeLaCuenta')
        .append($('<p>').text(`Nombre: ${doc.data().nombre}`))
        .append($('<p>').text(`Correo: ${user.email}`))
        .append($('<p>').text(`Teléfono: ${doc.data().telefono}`))
        .append($('<p>').text(`Direccion: ${doc.data().direccion}`))
        .append($('<p>').text(`Coordenadas: ${doc.data().coordenadas.latitude} , ${doc.data().coordenadas.longitude}`));
      })
      $('.logged-in').show();
      $('.logged-out').hide();
    }else{
      $('.logged-in').hide();
      $('.logged-out').show();
    }
}

const obtieneAmigos = (data) => {
    var props = {
        center: {
            lat:21.152639,
            lng:-101.711598
        },
        zoom:14
    }

    var map = new google.maps.Map($('#map'),props)

    data.forEach(element => {
        inform = new google.maps.InfoWindow;

        var pos ={
            lat: element.data().coordenadas.latitude,
            lng: element.data().coordenadas.longitude
        }

        inform.setPosition(pos)
        inform.setContent(element.data().nombre);
        inform.open(map)
    });

}

const entrarGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then( function(res){
    var token = result.credential.accessToken;

    var user = res.user;

    $('.datosDeLaCuenta').empty();
    $('.datosDeLaCuenta')
    .append($('<p>').text(`Nombre: ${doc.data().nombre}`))
    .append($('<p>').text(`Correo: ${user.email}`))
    .append($('<img>').attr('src',`${user.photoURL}`));
  }).catch( function (err){
    console.log(err);
  });

  
}
