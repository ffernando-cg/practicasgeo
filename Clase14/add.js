$('#formaadd').on('submit', (e) => {
  e.preventDefault();

  var registro = new Regist(null, formularioAdd.nombre.value, formularioAdd.codigo.value);
  registro.addNew()
  formularioAdd.nombre.value = '';
  formularioAdd.codigo.value = '';
  $('#ventananuevo').modal('hide');
});