/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

function pow(x, n) {
    if (n > 0) {
        return x ** parseInt(n)
    } else {
        ;`Please enter a positive integer for n`
    }
}

alert(pow(+prompt(`x?`), +prompt(`n`)))
