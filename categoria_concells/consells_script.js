window.onload = function(){
    let toggleButton = document.querySelector('.toggle-button');
    let sidebar = document.querySelector('.sidebar');
    let closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', function() {
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

    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

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