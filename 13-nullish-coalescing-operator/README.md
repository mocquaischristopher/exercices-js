# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme"); // "pomme" car 1ère valeur défini, il y a rien dans banane

```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme"); //banane car elle est affecter

```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon."); // poire car c'est la 1ère valeur vrai trouver
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ? 1ère valeur vrai trouver

### Ce que retourne, par définition, l'opérateur "??" ? 1ère valeur false trouver


# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ? 
// &&

### Faut il:
 #### utiliser ?? avec tous les autres opérateurs ? non ne pas l'utiliser avec && ou ||
 #### ne jamais utiliser ??? avec tous les autres opérateurs ?
 #### quelques fois utiliser ?? avec les autres opérateurs ?

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane" // error
```

```js
let fruit = ("poire" && "pomme") ?? "banane" 

alert(fruit) //pomme
```