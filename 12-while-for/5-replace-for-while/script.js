/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Réécrivez le code en modifiant la boucle `for` en `while` sans modifier son comportement (la sortie doit rester la même).

```js run
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

 */

let i = 0;

while(i < 3) {
      alert( `number ${i}!`);
      i++;
}

/**  on commence par initialiser la variable i à 0,
 *  On fait la boucle while avec comme condition tant que i est inférieur à 3,
 * dans la boucle on met l'alerte qui affichera i tant qu'il sera inférieur à 3,
 * on ajoute 1 a i pour chaque fois qu'il sera inférieur à 3
 */