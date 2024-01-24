/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let banane

alert(banane ?? 'pomme') // Affiche "pomme"

let banana = 'Trop bon'

alert(banana ?? 'pomme') // Affiche "Trop bon"

let pomme = null
let poire = 'Trop bon !'
let banano = null

alert(pomme || poire || banano || 'pas bon.') // Affiche "Trop bon !"

/* || retourne la 1ere valeur true
   ?? retourne la 1ere valeur "defined" (qui n'est ni null ni undefined)

   || a une précédence supérieure à ??

   On peut utiliser ?? avec les autres opérateurs mais il est conseillé d'utiliser des parenthèses par sécurité
   Lorsqu'utilisé avec && et || directement, ?? déclenche une erreur de syntaxe
*/

// let fruits = "poire" && "pomme" ?? "banane" // Le code ne s'exécute pas, il déclenche une erreur de syntaxe

let fruit = ('poire' && 'pomme') ?? 'banane'

alert(fruit) // Affiche "pomme"
