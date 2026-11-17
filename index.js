const btnCommande = document.getElementById("btnCommande");
const btnCreaCompte = document.getElementById("btnCreaCompte");
const btnConnexion = document.getElementById("btnConnexion");
const btnParametres = document.getElementById("btnParametres");

// "Connecté" = une clé "utilisateurConnecte" existe dans le localStorage (simulation, sans back)
const estConnecte = localStorage.getItem("utilisateurConnecte") !== null;

// Affichage selon l'état de connexion
btnParametres.hidden = !estConnecte;
btnCreaCompte.hidden = estConnecte;
btnConnexion.hidden = estConnecte;

btnCommande.addEventListener("click", function() {
    window.location.href = "commande.html";
});

btnCreaCompte.addEventListener("click", function() {
    window.location.href = "creation-compte.html";
});

btnConnexion.addEventListener("click", function() {
    window.location.href = "connexion.html";
});

btnParametres.addEventListener("click", function() {
    window.location.href = "parametres.html";
});
