function renderProductos(addedDoc){

  var registro = new Regist(addedDoc.id, addedDoc.data().nombre, addedDoc.data().codigo);

  $("#tablaProducts").find('tbody')
    .append($('<tr>').attr('id', addedDoc.id)
        .append($('<td>').text(`${addedDoc.data().nombre}`).addClass('nombre')
        ).append($('<td>').text(`${addedDoc.data().codigo}`).addClass('codigo')
        ).append($('<td>').attr('id',addedDoc.id).append($('<button>').text('Delete this').addClass('btn btn-danger m-3').attr('id','btnBorrar'))
        ).append($('<td>').attr('id',addedDoc.id).append($('<button>').text('Modify this').addClass('btn btn-success m-3').attr({'id':'btnEdit' , 'data-toggle':'modal' , 'data-target':'#ventanaeditar'})))
    );

    $('#btnBorrar').on('click', (e) => {
      let id =  e.target.parentElement.getAttribute('id');
      registro.deleteById(id);
    });

    $('#btnEdit').on('click',(e)=>{
      let id =  e.target.parentElement.getAttribute('id');
      registro.editById(id)
    })
}