Da, în JavaScript există atât funcții **globale**, cât și **locale**, iar diferența între ele constă în **domeniul de vizibilitate** (scope) al funcției, adică în ce părți ale programului poate fi accesată.

### Funcții Globale

O **funcție globală** este o funcție care poate fi accesată de oriunde în codul tău, atâta timp cât aceasta a fost definită. O astfel de funcție este de obicei declarată în afara oricărui bloc de cod, cum ar fi funcțiile, `if`-uri, sau bucle.

#### Exemplu de funcție globală:

```javascript
function salut() {
    console.log("Salut din funcția globală!");
}

salut(); // Poate fi apelată oriunde
```

În acest exemplu, funcția `salut()` este globală și poate fi apelată din orice loc în cod.

#### Comportament în funcții globale:
- Funcțiile globale sunt definite la **nivelul cel mai înalt** (în afara oricărei funcții sau bloc).
- Ele pot fi accesate din orice altă funcție sau bloc de cod din fișierul JavaScript.
- În cazul în care ai mai multe fișiere JavaScript incluse într-un proiect, funcțiile globale pot fi accesibile în toate aceste fișiere dacă sunt incluse în aceeași pagină.

### Funcții Locale

O **funcție locală** este o funcție care este definită în interiorul altei funcții. Aceste funcții pot fi accesate și apelate doar din interiorul funcției în care au fost definite.

#### Exemplu de funcție locală:

```javascript
function externa() {
    function locala() {
        console.log("Salut din funcția locală!");
    }

    locala(); // Funcția locală poate fi apelată doar aici
}

externa(); // Apelează funcția externă, care la rândul ei apelează funcția locală

// locala(); // Eroare! Funcția locală nu este accesibilă în afara funcției `externa`
```

În acest exemplu:
- Funcția `locala()` este o funcție locală definită în interiorul funcției `externa()`. Ea poate fi apelată doar în interiorul funcției `externa()`.
- Dacă încerci să apelezi `locala()` în afara funcției `externa()`, vei primi o eroare pentru că funcția nu este în domeniul de vizibilitate global.

### Scope-ul (Domeniul de vizibilitate) în JavaScript

Există două tipuri principale de scope în JavaScript:
1. **Global Scope** (domeniul global): Variabilele și funcțiile definite aici sunt accesibile de oriunde din program.
2. **Local Scope** (domeniul local sau funcțional): Variabilele și funcțiile definite în interiorul unei funcții sunt accesibile doar în acea funcție.

#### Exemplu de variabile în scope local și global:

```javascript
let variabilaGlobala = "Sunt globală";

function functieExterna() {
    let variabilaLocala = "Sunt locală";

    function functieInterna() {
        console.log(variabilaGlobala); // Poate accesa variabila globală
        console.log(variabilaLocala);  // Poate accesa variabila locală definită în funcția externă
    }

    functieInterna();
}

functieExterna();

// console.log(variabilaLocala); // Eroare! variabilaLocala este locală și nu poate fi accesată din afara funcției
```

#### Ce este important de reținut:

- O funcție globală poate fi apelată din orice altă parte a codului.
- O funcție locală poate fi apelată doar în interiorul funcției sau blocului în care a fost definită.
- Funcțiile globale ar trebui folosite cu grijă, deoarece prea multe funcții globale pot duce la conflicte sau probleme de gestionare a codului (denumit și "poluarea spațiului global").

Dacă ai alte întrebări legate de funcții globale și locale sau de scope-ul în JavaScript, mă poți întreba!
