var firebaseConfig = {
  apiKey: "AIzaSyD3XC1WdMGfn12u3ReXTMk3T4FpqMjmOvM",
  authDomain: "sistemasgeo-6c2cc.firebaseapp.com",
  projectId: "sistemasgeo-6c2cc",
  storageBucket: "sistemasgeo-6c2cc.appspot.com",
  messagingSenderId: "756718335316",
  appId: "1:756718335316:web:4e20af2a8884923ee884c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const formulario = document.querySelector('#forms');

function renderProductos(addedDoc){
  $("#tablaProducts").find('tbody')
    .append($('<tr>').attr('id', addedDoc.id)
        .append($('<td>').text(`${addedDoc.id}`)
        ).append($('<td>').text(`${addedDoc.data().nombre}`)
        ).append($('<td>').text(`${addedDoc.data().codigo}`)
        ).append($('<td>').attr('id',addedDoc.id).append($('<button>').text('Delete this').addClass('btn btn-danger m-3').attr('id','btnBorrar')))
    );

    $('#btnBorrar').on('click', (e) => {
      let id =  e.target.parentElement.getAttribute('id');
      db.collection('productosPractica').doc(id).delete();
    })
}

$('#forms').on('submit', (e) => {
  e.preventDefault();

  db.collection('productosPractica').add({
    nombre: formulario.nombre.value,
    codigo: formulario.codigo.value
  });

  formulario.nombre.value = '';
  formulario.codigo.value = '';
});

db.collection('productosPractica').onSnapshot( snap => {
  let changes = snap.docChanges();

  changes.forEach(change => {
    if(change.type == 'added'){
      renderProductos(change.doc)
    }
    else if(change.type = 'removed'){
      $(`table#tablaProducts tr#${change.doc.id}`).remove();
    }
  });


  console.log(changes);
} )