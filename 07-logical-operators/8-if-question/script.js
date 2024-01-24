/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/**
 * Lesquelles de ces `alert`es vont s'exécuter ?

Quels seront les résultats des expressions à l'intérieur de `if (...)` ?

```js
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```

 */

if (-1 || 0)
    alert('first') /*alert s'éxécute car || renvoi 1ere valeur vrai qui est -1
                              S'affiche, || renvoie -1 qui est true */
if (-1 && 0) alert('second') // Ne s'affiche pas, && renvoie 0 qui est false
if (null || (-1 && 1))
    alert(
        'third'
    ) /*alert s'éxécute car cela renverra une valeur vrai vu que && supérieur à ||
                                    S'affiche, && renvoie 1 puis || renvoie 1 qui est true */
