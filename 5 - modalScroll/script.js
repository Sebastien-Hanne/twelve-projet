/**
 * removeEventListener
 * Scroll Event
 */

// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section1 = document.querySelector(".one");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll",onScrollDisplayModal);

// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click",function(){
    // ...
    modal.remove(modalQuit)
    window.removeEventListener("scroll",onScrollDisplayModal);
});

/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal(){
    console.log("Ouiiii je scroollll");
    if (window.scrollY >= section1.offsetTop + 300){
        modal.style.display = "flex";
    } 
}
