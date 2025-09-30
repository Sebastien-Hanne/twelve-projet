
// 1. Je recupere le burger
const burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal = document.querySelector(".modal");

burger.addEventListener('click', function() {
    modal.classList.toggle("show-modal");
    burger.classList.toggle("fa-x");
})