window.onload = function(){
    let toggleButton = document.querySelector('.toggle-button');
    let sidebar = document.querySelector('.sidebar');
    let closeButton = document.querySelector('.close-button');

    // Gestiona els esdeveniments per al botó de toggle del navegador lateral
    toggleButton.addEventListener('click', function() {
        // Comprova l'estat actual del navegador lateral i depenent del resultat el mostre o no
        //També mostre o no el botó de tancament
        if (sidebar.style.transform === 'translateX(-300px)') {
            sidebar.style.transform = 'translateX(-5px)';
            setTimeout(function() {
                closeButton.style.display = 'inline-block';
            }, 200);
          } else {
            sidebar.style.transform = 'translateX(-300px)';
            closeButton.style.display = 'none';
          }
    });

    let carousel = document.querySelector('.carousel');
    let slides = document.querySelectorAll('.carousel-slide');
    let prevBtn = document.querySelector('.arrow.prev');
    let nextBtn = document.querySelector('.arrow.next');
    
    // Variable que manté l'índex actual del slide
    let slideIndex = 0;

    // Funció per mostrar un slide específic
    function showSlide(index) {
        // Oculta tots els slides
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // Controla els límits del slide actual en funció de l'índex rebut
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

        // Mostra el slide amb l'índex actual
        slides[slideIndex].style.display = 'block';
    }

    showSlide(slideIndex);

    prevBtn.addEventListener('click', () => {
        showSlide(--slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(++slideIndex);
    });

}