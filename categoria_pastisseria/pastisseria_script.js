// Funció que gestiona el clic al botó "See More"
function seeMoreClicked(event) {
    // Obté la secció pare de l'element clicat
    let section = event.target.parentElement;
    // Cerca tots els continguts de cada container relacionat
    let contents = section.querySelectorAll('.pastisseria, .galetes, .pans, .festes');

    // Itera a través dels continguts per verifica si l'altura del contingut és 310px i modifica l'estil
    for (let i = 0; i < contents.length; i++) {
        let content = contents[i];
        let contentHeight = content.offsetHeight + 'px'; //Per determinar l'altura abans per no tenir problemes

        if (contentHeight === '310px') {
            content.style.height = 'auto';
            event.target.textContent = 'Show Less'; // Canvia el text del botó
        } else {
            content.style.height = '310px';
            event.target.textContent = 'See More'; // Canvia el text del botó
        }
    }
}

// Funció que gestiona la cerca de receptes
function search(event) {
    event.preventDefault();
    // Obté el valor de la recepte cercada i el converteix a minúscules
    let searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    let searchedContainer = document.querySelector('.searched-recipies');

    // Obté tots els títols de receptes
    let recipeTitles = document.querySelectorAll('h4');
    let matchedRecipes = [];

    // Itera a través dels títols de receptes per a la cerca i mira quins coincideixen amb la recepte cercada
    for (let i = 0; i < recipeTitles.length; i++) {
        if (recipeTitles[i].textContent.trim().toLowerCase().includes(searchInput)) {
            let recipeContent = recipeTitles[i].parentElement;
            matchedRecipes.push(recipeContent);
        }
    }

    // Obté les seccions de categories de receptes
    let recipeSections = document.querySelectorAll('#pastisseria_categoria, #galetes_categoria, #pans_categoria, #festes_categoria');

    // Gestiona els resultats de la cerca per mostrar els elements que coincideixen amb la cerca
    if (searchInput === '') {
        alert("No heu entrat cap recepte", "");
        searchedContainer.innerHTML = '';
        for (let i = 0; i < recipeSections.length; i++) {
            recipeSections[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < recipeSections.length; i++) {
            recipeSections[i].style.display = 'none';
        }
        for (let i = 0; i < matchedRecipes.length; i++) {
            searchedContainer.appendChild(matchedRecipes[i].cloneNode(true));
        }
    }

    // Mostra un missatge d'alerta si no es troben receptes
    if (matchedRecipes.length === 0) {
        alert('No hi ha cap recepte amb aquest nom');
    }
}

window.onload = function() {
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

    let searchButton = document.querySelector('form button');
    let searchInput = document.getElementById('searchInput');
    let seeMoreButtons = document.querySelectorAll('#seeMoreButton');

    // Gestiona els esdeveniments als botons "See more" per gestionar l'expansió del contingut
    for (let i = 0; i < seeMoreButtons.length; i++) {
        let button = seeMoreButtons[i];
        button.addEventListener('click', seeMoreClicked);
    }

    // Gestiona la cerca quan es fa clic al botó de cerca o es prem Enter des del camp de cerca
    searchButton.addEventListener('click', function() {
        search(event)
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            search(event);
        }
    });
};
