/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Quel sera le résultat ?
 */

alert( null || 2 && 3 || 4 );

/* Le résultat est : && prend ascendant par rapport à ||
* alert( null || 3 || 4 ); 2 && 3 renvoi 1ère valeur false trouver mais vu qu'il en as pas trouver, renvoi la dernière valeur
* alert( 3 ); renvoi 3 car 1 ère valeur vrai trouver entre null et 3.
*/