
auth.onAuthStateChanged( user =>{
  if(user){
    db.collection('platillos').onSnapshot( snap => {
      obtienePlatillos(snap.docs);
    });
    configurarMenu(user);
  }
  else{
    obtienePlatillos([]);
    configurarMenu();
  }
})

const formaIngresar = $('#formaIngresar')
const salir = $('#salir');

$('#formaIngresar').on('submit', (e) => {
  e.preventDefault();

  let Correo = $('#Correo').val();
  let Password = $('#Password').val();

  auth.signInWithEmailAndPassword(Correo, Password).then(cred => {
    console.log('entro');

    $('#ingresarModal').modal('hide');
    $('#formaIngresar').trigger("reset");
    $('.error').text(' ');

  }).catch(err => {
    console.log(err);
    $('.error').text(mensajeError(err.code));
  });
})

$('#salir').on('click', (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    alert('El usuario ha salido del sistema');
  })
})


function mensajeError(codigo) {
  switch (codigo) {
    case 'auth/wrong-password':
      return ('Su contraseña es incorrecta');
    case 'auth/user-not-found':
      return ('Usuario no encontrado');
    case 'auth/weak-password':
      return ('Contraseña debil');
    default:
      return ('Ocurrio un error al ingresar con este usuario');
  }
}


//const formaRegistro = $('#formaRegistro');

$('#formaRegistro').on('submit', (e) => {
  e.preventDefault();

  let RCorreo = $('#RegCorreo').val();
  let RPassword = $('#RegPassword').val();

  auth.createUserWithEmailAndPassword(RCorreo, RPassword).then(cred => {
    return db.collection('usuarios').doc(cred.user.uid).set({
      nombre: $('#RegNombre').val(),
      telefono: $('#RegTelefono').val(),
      direccion: $('#RegDireccion').val()
    });
  }).then(() => {
    $('#RegistroModal').modal('hide');
    $('#formaRegistro').trigger("reset");
    $('.error').text(' ');
  }).catch(err => {
    $('.error').text(mensajeError(err.code));
  });


})