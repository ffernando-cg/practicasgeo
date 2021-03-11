var paises = document.getElementById('paises');
fetch('data.json').then(
  (response) =>{
    response.json().then((datos) =>{
      datos.forEach(registro => {
        console.log(registro);
        let nombre = document.createElement('p');
        nombre.textContent = `Pais: ${registro.country}, casos: ${registro.cases}`;
        paises.appendChild(nombre);
      });
    })
  });