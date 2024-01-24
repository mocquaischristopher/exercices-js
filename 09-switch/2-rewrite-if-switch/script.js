/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Réécrivez le code ci-dessous en utilisant une seule instruction `switch` :

```js run
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```

 */

let a = +prompt('a?', '')
console.log(a)

switch (a) {
    case 0:
        alert(0)
        break
    case 1:
        alert(1)
        break
    case 2:
    case 3:
        alert('2,3')
        break
}

// correction
let b = +prompt(`b`, ``)

switch (b) {
    case 0:
        alert(0)
        break

    case 1:
        alert(1)
        break

    case 2:
    case 3:
        alert(`2,3`)
}
