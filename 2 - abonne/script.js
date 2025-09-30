/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smiley = document.querySelector(".emoji");
console.log(smiley)
// 2. Je recupere le bouton ABONNER
const btnAbonner = document.querySelector(".btn-sub");
// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let isAbonne = false;
console.log(isAbonne);
// 4. J'ecoute le clique sur l'icone smiley
smiley.addEventListener("click",function(){

    smiley.classList.toggle("fa-face-smile-wink");
    console.log(smiley.classList);
    smiley.classList.toggle("fa-face-meh");
    smiley.classList.toggle("happy")
});
// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
btnAbonner.addEventListener("click",function(){
    isAbonne = !isAbonne;
    btnAbonner.classList.toggle("abonne")

    if (isAbonne === true) {
        btnAbonner.innerText = "Abonné";
         console.log("if")
    }else {
        btnAbonner.innerText = "Abonnez-vous";
        console.log("else")
    }

});
