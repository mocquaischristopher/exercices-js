/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

// Quel sera le résultat pour les expressions suivantes :
// La règle mise en place est le Boolean donc true si c'est vrai et False si c'est faux

5 > 4 // True car 5 plus grand que 4
'apple' > 'pineapple' // False car "a"(97) plus petit que "p"(112) dans unicode
'2' > '12' // True car "2" plus grand que "1"
undefined == null // True car ils sont égaux et en conversion
undefined === null // False car ils sont pas egaux en value mais pas en conversion
null == '\n0\n' // False car null est égale qu'à undefined en valeur et conversion
null === +'\n0\n' // False car même si null = 0 &  ce n'est pas égaux en valeur et en conversion
