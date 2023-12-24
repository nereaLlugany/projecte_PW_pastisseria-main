// Funció que afageix una imatge a la galeria
function penjarImatge() {
    // Obté la ruta de l'arxiu d'imatge des de l'element amb l'id 'imatge'
    let filePath = document.getElementById('imatge').value;

    // Crea un nou element d'imatge i assigna la ruta del fitxer obtinguda
    let newImage = document.createElement('img');
    newImage.src = filePath;

    // Obté tots els elements 'img' dins de l'element amb la classe '.imatges_galeria'
    let galleryImages = document.querySelectorAll('.imatges_galeria img');

    // Crea una llista de les rutes de les imatges ja presents a la galeria
    let imageSources = [];
    galleryImages.forEach(image => {
        imageSources.push(image.src);
    });

    // Afegeix la nova ruta al final de la llista de rutes d'imatges
    imageSources.push(filePath);

    // Obté l'element que conté la galeria d'imatges
    let gallery = document.querySelector('.imatges_galeria');

    // Esborra tot el contingut actual de la galeria
    gallery.innerHTML = '';

    // Afegeix tots els elements 'img' amb les rutes actualitzades a la galeria
    imageSources.forEach(src => {
        let imgElement = document.createElement('img');
        imgElement.src = src;
        gallery.appendChild(imgElement);
    });
}

window.onload = function() {
    let toggleButton = document.querySelector('.toggle-button');
    let sidebar = document.querySelector('.sidebar');
    let closeButton = document.querySelector('.close-button');

    // Gestor d'esdeveniments per al botó de toggle del navegador lateral
    toggleButton.addEventListener('click', function() {
        // Comprova l'estat actual del navegador lateral i depenent del resultat el mostre o no
        //També mostre o no el botó de tancament
        if (sidebar.style.transform === 'translateX(-300px)') {
            sidebar.style.transform = 'translateX(-50px)';
            setTimeout(function() {
                closeButton.style.display = 'inline-block';
            }, 200);
        } else {
            sidebar.style.transform = 'translateX(-300px)';
            closeButton.style.display = 'none';
        }
    });

    // Gestor d'esdeveniments per al botó de tancament del navegador lateral
    closeButton.addEventListener('click', function() {
        sidebar.style.transform = 'translateX(-300px)';
        closeButton.style.display = 'none';
    });

    // Assigna la funció 'penjarImatge()' a l'esdeveniment de clic al botó amb l'id 'penjar'
    document.getElementById('penjar').addEventListener('click', penjarImatge);
}
