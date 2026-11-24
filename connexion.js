const btnRetour = document.getElementById("btnRetour");
const formulaire = document.getElementById("formConnexion");

btnRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    const email = document.getElementById("email").value;

    // Pas de back : on simule la connexion en mémorisant l'email
    localStorage.setItem("utilisateurConnecte", email);
    window.location.href = "index.html";
});
