class Regist{
  constructor(id,nombre,codigo){
    this.id = id;
    this.nombre = nombre;
    this.codigo = codigo;
  }

  deleteById(id){
    db.collection('productosPractica').doc(id).delete();
  }

  addNew(){
    db.collection('productosPractica').add({
      nombre: this.nombre,
      codigo: this.codigo
    })
  }

  editById(id){
    formularioEdit.nombreeditar.value = this.nombre;
    formularioEdit.codigoeditar.value = this.codigo;
    formularioEdit.ideditar.value = this.id;
  };

    refresh(){
      db.collection('productosPractica').doc(this.id).update({
        nombre: this.nombre,
        codigo: this.codigo
    });
  }
}