$(function(){
  refreshAllAgain();
})

function refreshAllAgain(){
  db.collection('productosPractica').onSnapshot( snap => {
    let changes = snap.docChanges();

    changes.forEach(change => {
      if(change.type == 'added'){
        renderProductos(change.doc)
      }
      else if(change.type = 'removed'){
        $(`table#tablaProducts tr#${change.doc.id}`).remove();
      }
    })
    console.log(changes);
  });
}