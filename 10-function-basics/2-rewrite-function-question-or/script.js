/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

function checkAge(age) {
    return age > 18 ? true : `Did parents allow you?`
}

function checkAgeAgain(age) {
    return age > 18 || `Did parents allow you?`
}

alert(checkAge(prompt(`How old are you?`)))
alert(checkAgeAgain(prompt(`How old are you?`)))
