var box = document.querySelector('.opacity');


window.addEventListener('scroll', () => {
// fonction fléchée
    if(window.scrollY > 100) {
        box.classList.add('scroll');
    }
// si le scroll de la fenêtre est supérieur à 200px 
// on ajoute une class scroll  
});