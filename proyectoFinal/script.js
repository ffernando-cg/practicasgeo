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
const auth = firebase.auth();

const db = firebase.firestore();



/**
* Template Name: Knight - v4.2.0
* Template URL: https://bootstrapmade.com/knight-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
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

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)



  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    
    }
  });


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  $('#QuestionaryButton').click(function(){
    window.location.href = "questionary.html";
  });


})()



auth.onAuthStateChanged( user =>{
    db.collection('proyectoFinal').onSnapshot( snap => {
      getAllBeverages(snap.docs, user);

      if(user){
        changeStateOfUser(user)
      }
      else{
        changeStateOfUser(null)
      }
    });
})





 
const getAllBeverages = (data, user) => {
  $('#catalogoSecc1').empty();
  $('#catalogoSecc2').empty();
  var counterChangeSeccion =0;
  if(data.length){
    data.forEach(element => {
        const bebida = element.data();
          let queryPaster =
          `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 colbox-1">
          <div class="box-area" style="background-image: url(./img/${bebida.Image});">
          <div class="icon">
            <div class="bottom">
              <div class="product-item">
                <h4 class="text-stroke-white">Precio: ${bebida.Precio}</h4>
              </div>
              <div class="product-item logged-in">
                <a href="itemDescription.html#${element.id}" ><i class="bi bi-zoom-in"></i></a>
              </div>
            </div>
          </div> 
          </div>
          <h4 class="product-item-title">${bebida.Nombre}</h4>
        </div>`
        if(counterChangeSeccion<=3){
          $('#catalogoSecc1').append(queryPaster)
        }
        else{
          $('#catalogoSecc2').append(queryPaster)
        }

      counterChangeSeccion++;
    });
  }

}


const changeStateOfUser = (user) => {
  if(user){
    $('.logged-in').show();
    $('.isItLoggedOn').text('Cerrar Sesión')
    $('.isItLoggedOn').removeAttr( "data-bs-toggle" )
    $('.isItLoggedOn').removeAttr( "data-bs-target" )
    $('.isItLoggedOn').attr('onclick','logout()');
    
  }
  else{
    $('.logged-in').hide();
    $('.isItLoggedOn').attr('data-bs-toggle',"modal");
    $('.isItLoggedOn').attr('data-bs-target',"#LoginModal");
    $('.isItLoggedOn').removeAttr('onclick','logout()');
    $('.isItLoggedOn').text('Iniciar Sesión')
  }
}

$('#btnLogin').click(function(e){
  e.preventDefault();
  let Correo = $('#Correo').val();
  let Password = $('#Password').val();
  auth.signInWithEmailAndPassword(Correo, Password).then(cred => {
    console.log('entro');

    $('#LoginModal').modal('hide');
    $('#formaIngresar').trigger("reset");
    $('.error').text(' ');

  }).catch(err => {
    console.log(err);
    $('.error').text(mensajeError(err.code));
  });
});

$('#btnRegsitro').click(function(e){
  e.preventDefault();
  let RCorreo = $('#RegCorreo').val();
  let RPassword = $('#RegPassword').val();
  let RDate = $('#RegFecha').val();

  var YearsOld = moment().diff(RDate,'years');
  if(YearsOld < 18){
    $('.error').text('No es mayor de edad, no le podemos permitir la venta de alcohol')
  }else{
    auth.createUserWithEmailAndPassword(RCorreo, RPassword).then(() => {
      $('#RegisterModal').modal('hide');
      $('#formaRegistro').trigger("reset");
      $('.error').text(' ');
    }).catch(err => {
      $('.error').text(mensajeError(err.code));
    });
  
  }
  
});


const logout = () => {
  auth.signOut().then(() => {
    alert('El usuario ha salido del sistema');
  })
}