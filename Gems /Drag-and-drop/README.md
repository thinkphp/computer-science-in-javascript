# Drag And Drop

1. Codul începe prin adăugarea unui listener pentru evenimentul 'DOMContentLoaded', care se declanșează când documentul HTML este complet încărcat:

```javascript
document.addEventListener('DOMContentLoaded', () => {
```

2. Se selectează toate elementele cu clasele 'draggable' (care pot fi trase) și 'drop-zone' (zonele unde pot fi plasate):

```javascript
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');
```

3. Pentru elementele care pot fi trase, se adaugă două evenimente principale:
   - 'dragstart': se declanșează când începe tragerea
   - 'dragend': se declanșează când se termină tragerea

4. În evenimentul 'dragstart':
   - Se adaugă clasa 'dragging' elementului
   - Se salvează conținutul HTML al elementului
   - Se setează efectul de tragere ca 'move' (mutare)

5. Pentru zonele de plasare (drop zones), se implementează patru evenimente:
   - 'dragenter': când elementul tras intră în zona de plasare
   - 'dragover': când elementul tras este deasupra zonei
   - 'dragleave': când elementul tras părăsește zona
   - 'drop': când elementul este plasat în zonă

6. La plasarea elementului ('drop'):
   - Se previne comportamentul implicit al browserului
   - Se elimină clasa 'drag-over'
   - Se recuperează datele salvate
   - Se creează un nou element draggable
   - Se adaugă evenimentele necesare noului element
   - Se adaugă elementul în zona de plasare

Acest cod permite:
- Tragerea elementelor dintr-un loc în altul
- Feedback vizual în timpul tragerii (prin adăugarea/eliminarea claselor CSS)
- Crearea de noi elemente draggable în zonele de plasare
- Menținerea funcționalității de drag and drop pentru elementele nou create

Este un sistem interactiv care poate fi folosit pentru diverse interfețe unde utilizatorii trebuie să mute elemente între diferite zone ale paginii.

```
e.dataTransfer.setData('text/plain', draggable.innerHTML);

```
Această linie de cod face parte din API-ul HTML5 Drag and Drop și are rolul de a salva datele în timpul operației de tragere (drag). Să o analizăm în detaliu:

`e.dataTransfer` este un obiect care acționează ca un fel de "clipboard" temporar pentru operațiile de drag and drop. 

`setData()` este o metodă care primește doi parametri:
1. Primul parametru ('text/plain') specifică tipul de date - în acest caz text simplu
2. Al doilea parametru (draggable.innerHTML) reprezintă datele efective care vor fi salvate - conținutul HTML al elementului care este tras

De exemplu, dacă ai un element draggable care conține textul "Salut!", când începi să-l tragi, această linie va salva textul "Salut!" în obiectul dataTransfer. Aceste date pot fi apoi recuperate când elementul este plasat (dropped) folosind:
```javascript
e.dataTransfer.getData('text/plain')
```

Este ca și cum ai pune un bilețel într-un buzunar în timpul tragerii, pentru a ști ce conținut trebuie recreat când elementul este plasat în noua locație.

Această funcționalitate este esențială pentru:
- Păstrarea conținutului elementului în timpul operației de drag and drop
- Transferul informațiilor de la punctul de start la punctul de destinație
- Asigurarea că noul element creat va avea exact același conținut ca elementul original
