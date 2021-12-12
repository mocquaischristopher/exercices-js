/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


/**
 * Écrivez le code en utilisant `if..else` qui correspondrait au `switch` suivant :

```js
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```
 */

let browser;

if(browser == 'Edge') {
      alert( "You've got the Edge!");
} else if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
      alert('Okay we support these browsers too');
} else {
      alert( 'We hope that this page looks ok!' );
}