/**
 * Regex pour valider un nom. Il doit contenir uniquement des lettres (majuscules et minuscules).
 * @type {RegExp}
*/
export const validName = new RegExp(
    /^[a-zA-Z]*$/
);

/**
 * Regex pour valider un numéro de téléphone.
 * Il peut être au format international ou local.
 * Exemples de formats valides :
 * - +1234567890
 * - (123) 456-7890
 * - 123-456-7890
 * - 123 456 7890
 * @type {RegExp}
 */
export const validPhone = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
);