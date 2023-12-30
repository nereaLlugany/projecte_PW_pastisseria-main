// Funció per pujar una imatge i afegir-la a una galeria d'imatges
function penjarImatge(evt) {
    evt.preventDefault(); 
    console.log("Event default behavior prevented");
    // Obtenir el primer arxiu seleccionat a través de l'element amb ID 'imatge'
    let fileInput = document.getElementById('imatge').files[0];

    // Comprovar si s'ha seleccionat un arxiu
    if (fileInput) {
        // Inicialitzar un FileReader per llegir el contingut de l'arxiu
        let reader = new FileReader();

        // Funció que s'executa quan la lectura de l'arxiu és completa
        reader.onload = function (event) {
            // Crear un element img per a la nova imatge i assignar-li la font de la imatge llegida
            let newImage = document.createElement('img');
            newImage.src = event.target.result;

            // Obtindre totes les imatges de la galeria d'imatges
            let galleryImages = document.querySelectorAll('.imatges_galeria img');

            // Array per emmagatzemar les fonts de les imatges actuals
            let imageSources = [];

            // Recórrer les imatges existents i afegir les seves fonts a l'array imageSources
            galleryImages.forEach(image => {
                imageSources.push(image.src);
            });

            // Afegir la nova font de la imatge a l'array imageSources
            imageSources.push(event.target.result);

            // Seleccionar l'element amb la classe '.imatges_galeria'
            let gallery = document.querySelector('.imatges_galeria');

            // Buidar el contingut actual de la galeria
            gallery.innerHTML = '';

            // Afegir les imatges a la galeria
            imageSources.forEach(src => {
                let imgElement = document.createElement('img');
                imgElement.src = src;
                gallery.appendChild(imgElement);
            });
        };

        // Llegir l'arxiu com a URL de dades
        reader.readAsDataURL(fileInput);
    } else {
        alert("No s'ha seleccionat ninguna imatge");
    }
}

window.onload = function() {
    let toggleButton = document.querySelector('.toggle-button');
    let sidebar = document.querySelector('.sidebar');
    let closeButton = document.querySelector('.close-button');

    // Gestor d'esdeveniments per al botó de toggle del navegador lateral
    toggleButton.addEventListener('click', function(event) {
        let currentState = sidebar.style.transform;

        if (currentState === 'translateX(-300px)' || currentState === '') {
            sidebar.style.transform = 'translateX(-48px)';
            setTimeout(function() {
                closeButton.style.display = 'inline-block';
            }, 200);
        } else {
            sidebar.style.transform = 'translateX(-300px)';
            closeButton.style.display = 'none';
        }
    });

    // Gestor d'esdeveniments per al botó de tancament del navegador lateral
    closeButton.addEventListener('click', function(event) {
        event.preventDefault;
        sidebar.style.transform = 'translateX(-300px)';
        closeButton.style.display = 'none';
    });

    // Assigna la funció 'penjarImatge()' a l'esdeveniment de clic al botó amb l'id 'penjar'
    document.getElementById('penjar').addEventListener('click', penjarImatge);
}
