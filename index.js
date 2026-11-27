document.addEventListener("DOMContentLoaded",init)

async function init() {
    afficherSelonConnexion(await estConnecte());
    remplirListes();


}

async function estConnecte() {
    /*try {
        const reponse = await fetch("/me", { credentials: "include" });
        return reponse.ok; // 200 = connecté, 401 = non connecté
    } catch (e) {
        return false; // serveur injoignable : on considère l'utilisateur déconnecté
    }*/
   return false
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

