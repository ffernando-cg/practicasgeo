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
        .append($('<p>').text(`Direccion: ${doc.data().direccion}`));
      })
      $('.logged-in').show();
      $('.logged-out').hide();
    }else{
      $('.logged-in').hide();
      $('.logged-out').show();
    }
}

const obtienePlatillos = (data) => {

  if(data.length){
    data.forEach(element => {
        const platillo = element.data();
        $('#listaDePlatillos')
        .append($('<div>').addClass('card col-12 col-md-4 clickableItem').attr('onClick',`window.location.href = "https://www.paypal.me/grupohernandezalba/${platillo.precio}";`)
          .append($('<img>').addClass('card-img-top').attr('src',`${platillo.imagen}`))
          .append($('<div>').addClass('card-body')
              .append($('<h5>').addClass('card-title').text(`${platillo.nombre}`))
              .append($('<p>').addClass('card-text text-success').text(`Precio: ${platillo.precio}`))
          )
        )
    });
  }
  else{
    $('#listaDePlatillos').empty()
    $('#listaDePlatillos').append($('<h2>').text('Ingrese con sus credenciales para ver lo que ofrecemos').addClass('text-center'))
  }
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