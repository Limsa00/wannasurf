/**
 * Ce fichier définit le module `callApiModule` qui contient une fonction pour effectuer des appels API.
 * @module callApiModule
 */

/**
 * Effectue un appel API avec les paramètres spécifiés.
 * @param {string} url - L'URL de l'API à appeler.
 * @param {string} method - La méthode HTTP à utiliser pour l'appel (ex: "GET", "POST", etc.).
 * @param {Object} body - Le corps de la requête (optionnel).
 * @param {Object} currentUser - L'utilisateur actuel (optionnel).
 * @returns {void} Ne retourne aucune valeur.
*/

const callApiModule = (url, method, body, currentUser) => {
    var options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body !== undefined ? JSON.stringify(body) : undefined
    };

    if (currentUser) {
        currentUser.getIdToken(true)
        .then(function(idToken) {
            options.headers["Authorization"] = "Bearer " + idToken;
            fetch(url, options);
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        fetch(url, options);
    }
}

module.exports = callApiModule;