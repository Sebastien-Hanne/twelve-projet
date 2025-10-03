/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */
// 1. Je recupere le bouton "Accepter les cookies"
const cookiesBtn = document.querySelector('.btn.btn-accept');
// 2. Je recupere la banniere de cookies
const cookiesBanner = document.querySelector('.cookies');
// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
cookiesBtn.addEventListener('click', function() {
 console.log('click');
    setTimeout(function(){
        cookiesBanner.remove();
    },1000);
    if (cookiesBtn){
        localStorage.setItem("cookiesAccepted", "true");
        console.log(localStorage);
    }
});
