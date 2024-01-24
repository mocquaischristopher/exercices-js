/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let num = 10
for (let i = 2; num >= i; i++) {
    if (num % i == 0) {
        alert(i)
    } else {
    }
}

let n = +prompt(`Entrez un nombre`)

for (i = 2; i <= n; i++) {
    let prime = true

    for (j = 2; j < i; j++) {
        if (i % j == 0) prime = false
    }

    if (prime) alert(i)
}
