const API_URL = "http://127.0.0.1:8000";

const btnRetour = document.getElementById("btnRetour");
const formulaire = document.getElementById("formConnexion");

btnRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

formulaire.addEventListener("submit", async function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    const username = document.getElementById("username").value;
    const password = document.getElementById("mdp").value;

    const reponse = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json"},
        body: JSON.stringify({username, password}),
        });

    const data = await reponse.json();
    if (!reponse.ok){
        document.getElementById("erreurConnexion").innerHTML = data.detail
        return;
    }
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