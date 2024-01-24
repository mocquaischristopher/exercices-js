/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * A votre avis, quelles sont les valeurs affichées pour chaque boucle ?  Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l'`alert` ou pas ?

 */

//1. Le préfixe sous forme `++i`:

let i = 0
while (++i < 5) alert(i) // 4 car cela commence par ajouter 1 à i et ressort directement la valeur de i donc 1
// Affiche 4 en dernière valeur car l'incrémentation de i se produit avant l'entrée en boucle

//2. Le postfixe sous forme `i++`:

let j = 0
while (j++ < 5) alert(j) // 5 car cela rajoute 1 à chaque fin de boucle.
// Affiche 5 en dernier car l'incrémentation de j se produit après l'entrée en boucle
