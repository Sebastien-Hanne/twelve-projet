/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

const switch_btn = document.querySelector(".switch");
const switchIcon = document.querySelector(".icon")

if (switch_btn) {
  switch_btn.addEventListener('click', function() {
    const switch_all = document.querySelectorAll("*");

    switch_all.forEach(function(element) {
      element.classList.toggle("darkmode");
      switchIcon.classList.toggle("fa-moon");
    });
  });
}

