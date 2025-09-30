const buttoHtml_elem = document.querySelector(".btn-counter");

const valueHtml_elem = document.querySelector(".value-counter");

let compteur = 0;
    buttoHtml_elem.addEventListener("click", function() {
        compteur++;
        valueHtml_elem.textContent = compteur;
});