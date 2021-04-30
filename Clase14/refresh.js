formularioEdit.addEventListener('submit',(e)=> {
  e.preventDefault();

  console.log(formularioEdit);
  let id =formularioEdit.ideditar.value;
  let nombre =formularioEdit.nombreeditar.value;
  let codigo =formularioEdit.codigoeditar.value;

  var registro = new Regist(id,nombre,codigo);

  registro.refresh();
  $('#tablaProducts').find('.nombre').text(nombre)
  $('#tablaProducts').find('.codigo').text(codigo)
  
  $('#ventanaeditar').modal('hide');
  refreshAllAgain();
});