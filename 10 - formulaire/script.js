/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();
   
    
    let isValid = true;

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    // Vérif prénom
    if (prenomValue.length < 3 || prenomValue.length > 20) {
    showError(prenom, "Le prénom doit contenir entre 3 et 20 caractères");
    isValid = false;
    } else {
    clearError(prenom);
}

    // Vérif nom
    if (nomValue.length < 3 || nomValue.length > 20) {
    showError(nom, "Le nom doit contenir entre 3 et 20 caractères");
    isValid = false;
    } else {
    clearError(nom);
}

    // Vérif email
    if (!isValidEmail(emailValue)) {
        showError(email, "Email invalide");
        isValid = false;
    } else {
        clearError(email);
    }

// Vérif message
    if (messageValue.length < 10) {
        showError(message, "Le message doit contenir au moins 10 caractères");
        isValid = false;
    } else {
        clearError(message);
    }

    if (isValid) {
        console.log("Formulaire valide !");
        form.reset();
    }
});

/**
 * HELPERS FUNCTIONS
 */

/**
 * Affiche un message d'erreur pour un champ donné.
 */

function showError(input, message) {
    let errorElem = input.nextElementSibling;
    if (!errorElem || !errorElem.classList.contains('error-message')) {
        errorElem = document.createElement('span');
        errorElem.className = 'error-message';
        input.parentNode.insertBefore(errorElem, input.nextSibling);
    }
    errorElem.textContent = message;
    input.classList.add('input-error');
}

/**
 * Efface le message d'erreur pour un champ donné.
 */
function clearError(input) {
    let errorElem = input.nextElementSibling;
    if (errorElem && errorElem.classList.contains('error-message')) {
        errorElem.textContent = '';
    }
    input.classList.remove('input-error');
}
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}