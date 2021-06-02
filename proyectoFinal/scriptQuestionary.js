(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

 


    let backtoindex = select('.back-to-index')
    backtoindex.classList.add('active')
    $('.back-to-index').click(function(){
      window.location.href='index.html'
    })



    $('#btnStart').click(function(){
      $('.hero-container').empty()

      fetch('questionary.json')
      .then( function(response) {
        response.json().then( function(data){
          
        $('.hero-container').attr("id","DivQuestion")
        .append("<h1>Primero, ¿Cómo te gusta tu bebida?</h1>");
        $('#DivQuestion').append(`<button class='btn-Questionary' onclick='SecondQuestion(${JSON.stringify(data[0])})'>Bebida fuerte</button>`)
        $('#DivQuestion').append(`<button class='btn-Questionary' onclick='SecondQuestion(${JSON.stringify(data[1])})'>Bebida media</button>`)
        $('#DivQuestion').append(`<button class='btn-Questionary' onclick='SecondQuestion(${JSON.stringify(data[2])})'>Bebida suave</button>`)
          setTimeout(() => {
            $('.btn-Questionary').css('margin-bottom','20px')
          }, 500);
      })
        
    })

    })

    

     /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  });
    

})()


function SecondQuestion(selectedVal){
    $('.hero-container').empty()
    $('#DivQuestion')
        .append("<h1>Ahora, ¿Cómo te gustaría tomarlo?</h1>");

          for (const element in selectedVal) {
            $('#DivQuestion').append(`<button class='btn-Questionary' onclick='ThirdQuestion(${JSON.stringify(selectedVal[element])})'>${element.toString(selectedVal).toUpperCase()}</button>`) 
          }
        

          setTimeout(() => {
            $('.btn-Questionary').css('margin-bottom','20px')
          }, 500);
}


function ThirdQuestion(selectedVal){

    $('.hero-container').empty()
    $('#DivQuestion')
        .append("<h1>Ultima pregunta, ¿Qué prefieres?</h1>");

    
        for (const element in selectedVal) {
          $('#DivQuestion').append(`<button class='btn-Questionary' onclick='FinalResult(${JSON.stringify(selectedVal[element])})'>${element.toString().toUpperCase()}</button>`)  
        }

          setTimeout(() => {
            $('.btn-Questionary').css('margin-bottom','20px')
          }, 500);
}

function FinalResult(value){
  console.log(value)

  switch(value){
    case 'Ciroc':
      window.location.href='itemDescription.html#QkYEu4AaroBy0HZH7NDe'
      break;
    case 'Bacardí':
      window.location.href='itemDescription.html#gVd0js0BnxnV8nKsLOVU'
      break;
    case 'Maestro Dobel Diamante':
      window.location.href='itemDescription.html#vWy7tPjUEWcta3j2hva1'
      break;
    case 'Bacanora Sonorense':
      window.location.href='itemDescription.html#J98AN4eE4fc8hijE3CaE'
      break;
    case 'Fireball Cinnamon':
      window.location.href='itemDescription.html#6Qgn1R4eiuSUWRbRUbOn'
      break;
    case 'Tequila 1800 Añejo':
      window.location.href='itemDescription.html#ltp1G5G3Bm3avimREMt5'
      break;
    case 'Buchanans DeLuxe':
      window.location.href='itemDescription.html#Q71wmgW9p7NnHOeyIZfh'
      break;
    case 'Gran Malo (por LuisitoComunica)':
      window.location.href='itemDescription.html#QkHpvt01qRSFDFz2mgwU'
      break;
    case 'Ivanna (por Anna Sarelly)':
      window.location.href='itemDescription.html#NE58agljPZQcwExEz15D'
      break;
    case 'Dos Hombres (por Aaron Paul y Bryan Cranston)':
      window.location.href='itemDescription.html#Lto2BklRoWw0V0XwqL56'
      break;
    case 'Castreña Hidro Miel':
      window.location.href='itemDescription.html#SG9xliGOg1RlbpZVZXHd'
      break;
    case 'Jose Cuervo Tradicional':
      window.location.href='itemDescription.html#Rxw1caw1uJhpqtX79FDA'
      break;
    case 'Sayuri':
      window.location.href='itemDescription.html#0o2GG6wyvIlPw7s4x1hD'
      break;
    case 'Baileys':
      window.location.href='itemDescription.html#lLpvyGwCaDQBB98YCLhc'
      break;
    case 'Jagermeister':
      window.location.href='itemDescription.html#FMxtFTgzZO1krL2LZFVG'
      break;
    case 'Moochild American Stout':
      window.location.href='itemDescription.html#1BnalxGbO9PRC3hHq8Yp'
      break;
    case 'Casillero del diablo':
      window.location.href='itemDescription.html#xsns0f2focPDvLZ4NWqr'
      break;
    case 'Puerto de indias de fresa':
      window.location.href='itemDescription.html#fnNGXphNas6xd8Kd6YRj'
      break;
    case 'La Pieve':
      window.location.href='itemDescription.html#IH7TAt3RA7pt6PLje6CK'
      break;
    case 'Crown Royal':
      window.location.href='itemDescription.html#rmJn28m8jHF8ZHw4FIWk'
      break;
  }
}