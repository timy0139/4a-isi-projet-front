const API_URL = "http;//127.0.0.1:8000";
let currentUser = null;

document.addEventListener("DOMContentLoaded",init)

async function init() {
    currentUser = await fetchCurrentUser();
    afficherSelonConnexion(currentUser !== null);
}

<<<<<<< HEAD
async function estConnecte() {
    /*try {
        const reponse = await fetch("/me", { credentials: "include" });
        return reponse.ok; // 200 = connecté, 401 = non connecté
    } catch (e) {
        return false; // serveur injoignable : on considère l'utilisateur déconnecté
    }*/
   return false
=======

async function fetchCurrentUser() {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
        const reponse = await fetch(`${API_URL}/auth/current`, {
            headers: { "authorisation": `bearer ${token}` },
        });
        if (!reponse.ok) {
            localStorage.removeItem("token");
            return null;
        }
        return await reponse.json();
    } catch {
        return null;
    }
>>>>>>> 439fe50ec8811900861448c2fc2974e784161d02
}


function afficherSelonConnexion(estConnecte) {
    //affiche ou non les bouttons en fct de l état de la connexion
    document.getElementById("btnConnexion").hidden = estConnecte;
    document.getElementById("btnCreaCompte").hidden = estConnecte;
    document.getElementById("btnCommander").hidden = !estConnecte;
    document.getElementById("btnParametres").hidden = !estConnecte;
}



function afficherSelonConnexion(estConnecte) {
    //affiche ou non les bouttons en fct de l état de la connexion
    document.getElementById("btnConnexion").hidden = estConnecte;
    document.getElementById("btnCreaCompte").hidden = estConnecte;
    document.getElementById("btnCommander").hidden = !estConnecte;
    document.getElementById("btnParametres").hidden = !estConnecte;
}

btnCreaCompte.addEventListener("click", function() {
        window.location.href = "creation-compte.html";
});

btnConnexion.addEventListener("click", function() {
    window.location.href = "connexion.html";
});

btnParametres.addEventListener("click", function() {
    window.location.href = "parametres.html";
});

btnCommander.addEventListener("click", function() {
    window.location.href = "commande.html";
});

async function remplirListes() {
    
}

