const btnRetour = document.getElementById("btnRetour");
const formulaire = document.getElementById("formCreation");
const divResultat = document.getElementById("divResultat");
const spanMotDePasse = document.getElementById("motDePasse");
const btnVersConnexion = document.getElementById("btnVersConnexion");

/**
 * SIMULATION DU BACK : à remplacer plus tard par un appel réel, par exemple :
 *   const reponse = await fetch("/api/comptes", { method: "POST", ... });
 *   return (await reponse.json()).motDePasse;
 * Le back créera le compte et renverra le mot de passe généré.
 */
async function demanderCreationCompte(email) {
    const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
    const tirages = crypto.getRandomValues(new Uint32Array(12));
    let motDePasse = "";
    for (const n of tirages) {
        motDePasse += caracteres[n % caracteres.length];
    }
    return motDePasse;
}

btnRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

formulaire.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const motDePasse = await demanderCreationCompte(email);

    // On affiche le mot de passe reçu et on masque le formulaire
    spanMotDePasse.textContent = motDePasse;
    formulaire.hidden = true;
    divResultat.hidden = false;
});

btnVersConnexion.addEventListener("click", function() {
    window.location.href = "connexion.html";
});
