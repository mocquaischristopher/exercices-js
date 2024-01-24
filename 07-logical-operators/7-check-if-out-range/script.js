/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Ecrivez une condition `if` pour vérifier que l’`age` n’est PAS compris entre `14` et `90` ans inclus.

Créez deux variantes: la première utilisant NOT `!`, La seconde - sans ce dernier.

 */

if (!(age >= 14 && age <= 90)) {
}

if (age < 14 || age > 90) {
}

/**
 * Le 1ere condition c'est si l'age n'est pas entre 14 et 90
 * La 2eme condition c'est si age inférieur a 14 ou superieur a 90
 */

// Correction
let age = prompt(`Quel est votre age?`)

// 1ere variante

if (age < 14 || age > 90) {
    alert(`Success!`)
}

// 2nde variante

if (!(age >= 14) || !(age <= 90)) {
    alert(`Success!`)
}
