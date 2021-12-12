/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Écrivez le code qui demande une connexion avec `prompt`.

Si le visiteur entre `"Admin"`, puis `prompt` pour un mot de passe, si l'entrée est une ligne vide ou `key:Esc` -- affichez "Canceled", s'il s'agit d'une autre chaîne de caractères -- alors affichez "I don't know you".

Le mot de passe est vérifié comme suit :

- S'il est égal à "TheMaster", alors affichez "Welcome!",
- Une autre chaînede caractères -- affichez "Wrong password",
- Pour une chaîne de caractères vide ou une entrée annulée, affichez "Canceled".

 */

let user = prompt("Entrer votre nom d'utilisateur", "");

if(user === "Admin") {

      let password = prompt("Quel est votre mot de passe?", "");

      if(password === "TheMaster") {
            alert( "Welcome!" );
      } else if(password === "" || password === null) {
            alert( "Canceled" );
      } else {
            alert( "Wrong password" );
      }

} else if(user === "" || user === null) {
      alert( "Canceled" );
} else {
      alert( "I don't know you" );
}

/**
 * J'ai fait une variable avec un prompt afin de stocker le résultat taper
 * je vérifie si le user correspont à Admin, 
 *    alors il y'a une autre variable pour le mot de passe avec un prompt :
 *    je vérifie si le mot de passe correspond à TheMaster alors cela affiche Welcome,
 *    si le mot de passe correspond à une chaine vide ou null(echap) alors cela affiche Cenceled,
 *    si le mot de passe correspond à aucun des choix au dessus alors cela affiche Wrong Password.
 * si le user correspond à une chaine vide ou null (echap) alors cela affiche Canceled,
 * si le user correspond à aucun des choix au dessus alors cela affiche I don't know you.
 */