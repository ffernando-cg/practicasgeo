var paises = document.getElementById('paises');
fetch('https://corona.lmao.ninja/v2/countries').then(
  (response) =>{
    response.json().then((datos) =>{
      let contador = 1;
      datos.forEach(registro => {
        let renglon = document.createElement('div');
        renglon.className = 'row border bg-light rounded-divs text-center';
        paises.appendChild(renglon)


        let columna = document.createElement('div');
        columna.className = 'col-12';
          renglon.appendChild(columna);

        let tituloRenglon = document.createElement('h5');
        tituloRenglon.textContent = `Numero : ${contador}`;
        columna.appendChild(tituloRenglon);

        let nombre = document.createElement('p');
        nombre.textContent = `Pais: ${registro.country}, Casos: ${registro.cases}`;
        columna.appendChild(nombre);
        contador++;
      });
    })
  });