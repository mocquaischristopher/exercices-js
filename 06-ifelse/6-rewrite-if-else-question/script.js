/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Réécrire ce `if..else` en utilisant plusieurs opérateurs ternaires `'?'`.

Pour plus de lisibilité, il est recommandé de diviser le code en plusieurs lignes.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

 */

let message = (login == 'Employee') ? 'Hello' : 
              (login == 'Director') ? 'Greetings' : 
              (login == '') ? 'No login' :
              "";

/**
 * Mon raisonnement est que de la variable message,
 * je regarde si le login est = à 'Employee', si oui j'affiche 'Hello',
 * sinon je regarde si le login est = à 'Director', si oui j'affiche 'Greetings',
 * Sinon je regarde si y'a un login vide, si non j'affiche 'No login',
 * Sinon pas de login j'affiche rien.
 */