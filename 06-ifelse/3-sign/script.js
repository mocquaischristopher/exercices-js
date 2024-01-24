/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * En utilisant `if..else`, écrivez le code qui obtient un numéro via le `prompt`, puis l'affiche en `alert` :

- `1`, si la valeur est supérieure à zéro,
- `-1`, si inférieur à zéro,
- `0`, si est égal à zéro.

Dans cet exercice, nous supposons que l'entrée est toujours un nombre.

 */

let num = prompt('Veuillez noter un nombre', '')

if (num > 0) {
    alert(1)
} else if (num == 0) {
    alert(0)
} else {
    alert(-1)
}

// Correction
if (num > 0) {
    alert(`1`)
} else if (num < 0) {
    alert(`-1`)
} else {
    alert(`0`)
}

/**
 * Mon raisonnement est que je stocke en 1er lieu la valeur du prompt qu'y sera rentrer,
 * Ensuite je fait une condition if/else if/ else afin de resoortir l'arte correspondant.
 */
