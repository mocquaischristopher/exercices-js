/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Ecrivez une boucle qui demande un nombre supérieur à `100`. Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu'à ce que le visiteur saisisse un nombre supérieur à `100` ou annule l'entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.

 */
let num;
do{
      num = prompt("Saisissez un numéro supérieur à 100", "");

}
while (num <= 100 && "");

//Je fait une boucle do while car j'ai besoin d'éxecuter l'action plusieurs fois et de vérifier avec while si la condition est vrai ou pas