
//1. Je recupere tout les switchs
const switchBtns_elem = document.querySelectorAll(".switch")
const switchIcon = document.querySelectorAll(".icon")

//2. Je recupere tout les elements html de ma page
const elementAll_elem = document.querySelectorAll("*");

//3. Je parcours tout les switchs
switchBtns_elem.forEach(function(switchBtn_elem){
    switchBtn_elem.addEventListener('click', function() {
        
   
        elementAll_elem.forEach(function(element){
            element.classList.toggle("darkmode");
            console.log(element)
        });
        switchIcon.forEach(function(icon) {
            icon.classList.toggle("fa-moon");
    })}
)
})