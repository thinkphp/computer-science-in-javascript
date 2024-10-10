# Fibonacci Search in JavaScript

## Descriere

Fibonacci Search este un algoritm de căutare pentru liste sortate, care folosește numere Fibonacci pentru a împărți intervalul de căutare. Similar cu **binary search**, acest algoritm taie lista în secțiuni, dar utilizează proprietăți matematice ale seriei Fibonacci pentru a selecta punctele de comparație.

Acest algoritm este eficient atunci când listele sunt mari și când elementele pot fi accesate rapid.

## Cum funcționează

1. Se initializează numerele Fibonacci **fib2** (Fibonacci minus 2), **fib1** (Fibonacci minus 1) și **fibM** (suma celor două).
2. Găsește cel mai mic număr Fibonacci care este mai mare sau egal cu dimensiunea listei.
3. Se folosește seria Fibonacci pentru a împărți lista în secțiuni mai mici și a căuta elementul țintă.
4. Algoritmul continuă să micșoreze intervalul de căutare până când găsește elementul sau epuizează secțiunile de căutare.

## Complexitate

- **Timp de execuție**: O(log n)
- **Memorie**: O(1)

## Exemplu de utilizare

```javascript
function fibonacciSearch(arr, x) {
    let n = arr.length;

    let fib2 = 0;
    let fib1 = 1;
    let fibM = fib2 + fib1;

    while (fibM < n) {
        fib2 = fib1;
        fib1 = fibM;
        fibM = fib2 + fib1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fib2, n - 1);

        if (arr[i] < x) {
            fibM = fib1;
            fib1 = fib2;
            fib2 = fibM - fib1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fib2;
            fib1 = fib1 - fib2;
            fib2 = fibM - fib1;
        } else {
            return i;
        }
    }

    if (fib1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

// Exemplu
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const elementCautat = 85;
const rezultat = fibonacciSearch(arr, elementCautat);

if (rezultat !== -1) {
    console.log(`Elementul se află la indexul ${rezultat}`);
} else {
    console.log('Elementul nu a fost găsit în listă');
}

Output așteptat:
```
Elementul se află la indexul 8
```

