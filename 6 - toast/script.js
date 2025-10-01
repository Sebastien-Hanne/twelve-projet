/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");



btn.addEventListener("click", function(){
    // Création de la balise
    const toast = document.createElement("div");
    // Personnalisation de la balise
    toast.classList.add("toast");
    toast.innerHTML = "<p>Votre fichier est enregistré !</p>";
    // Affichage de la nouvelle balise en tant qu'enfant de la section.
    ctnToasts.appendChild(toast);
    // Suppression d'une balise
    setTimeout(function(){
        toast.remove();
    }, 3000);
});
