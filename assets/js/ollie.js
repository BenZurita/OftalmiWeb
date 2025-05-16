/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})
document.addEventListener('DOMContentLoaded', function() {
    const words = [
        "tecnología",
        "innovación",
        "<span style='text-transform: uppercase;'>D</span>OSIS de vida"
    ];
    const changingWord = document.querySelector('.changing-word');
    let currentIndex = 0;

    function changeWord() {
        changingWord.style.opacity = 0;
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            changingWord.innerHTML = words[currentIndex];
            changingWord.style.opacity = 1;
        }, 500);
    }

    // Iniciar el cambio cada 3 segundos
    setInterval(changeWord, 3000);
    
    // Forzar mayúscula solo en la D de DOSIS
    changingWord.innerHTML = words[0]; // Inicia con "tecnología"
});