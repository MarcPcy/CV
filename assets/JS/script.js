// Récupération du bouton et du contenu de l'accueil
const btnAccueil = document.getElementById('btnAccueil');
const accueil = document.getElementById('accueil');
const site = document.getElementById('site');

// Fontion pour initialiser AOS
function initAOS() {
    AOS.init({
        offset: 100, // se déclenche lorsque le bas de l'écran sera à 100px 
    });
}

// Ajout d'un événement au clic sur le bouton
btnAccueil.addEventListener('click', function () {
    // Masquer l'accueil et afficher le site
    accueil.style.display = 'none';
    site.style.display = 'block';
    initAOS();
    
});


// Menu burger
const links = document.querySelectorAll("nav li")


// Au clic sur le menu burger ou sur la croix
icons.addEventListener("click", () => {
    nav.classList.toggle("active")
}
)

// Au clic sur un a
links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Au clic n'importe où sur la page le menu burger se referme
document.addEventListener("click", (event) => {
    const isClickInsideMenu = nav.contains(event.target);
    if (!isClickInsideMenu) {
        nav.classList.remove("active");
    }
});