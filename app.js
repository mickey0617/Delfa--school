// declaaration de variable
let conteneur,parent,img, mot;


document.getElementById('burger').addEventListener('click', ()=>{
    conteneur = document.querySelector('header');
    conteneur.classList.toggle('new');
});
document.querySelector('header').addEventListener('scroll',()=>{
    document.body.style.overflow = 'hidden';
})
// Annimation js
document.addEventListener("DOMContentLoaded", ()=>{
    conteneur= document.getElementById('annimation');
    annimation.classList.add('Annimer');
});


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
mot = "</>";
document.getElementById('logo_service').innerText = mot;


function ClickMe(){
    conteneur = document.querySelector('header');
    conteneur.classList.remove('new');
}

