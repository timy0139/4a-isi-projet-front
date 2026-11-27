const btnRetour = document.getElementById("btnRetour");
const formulaire = document.getElementById("formConnexion");

btnRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    const name = document.getElementById("username").value;
    const password = document.getElementById("mdp").value;

    // Pas de back : on simule la connexion en mémorisant l'email
    localStorage.setItem("utilisateurConnecte", email);
    window.location.href = "index.html";

    
    if(exist()){

        window.location.href ="index.html"

    }else{

        alert ("Nom d'utilisateur ou mot de passe incorrect!")

    }

    //a faire , route de check sur username et password + re
});

async function exist(name, password){

    //check si l utilisateur existe + retourne true ou false en fct
    return true 

    return false
}