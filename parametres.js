// Page réservée aux utilisateurs connectés
if (localStorage.getItem("utilisateurConnecte") === null) {
    window.location.href = "index.html";
}

const btnRetour = document.getElementById("btnRetour");
const btnDeconnexion = document.getElementById("btnDeconnexion");

btnRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

btnDeconnexion.addEventListener("click", function() {
    localStorage.removeItem("utilisateurConnecte");
    window.location.href = "index.html";
});
