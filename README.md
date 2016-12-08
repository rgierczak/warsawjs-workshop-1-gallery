# warsawjs-workshop-gallery

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Etapy szkolenia

### Przedstawienie projektu

* Projekt dostępny pod adresem:
https://rgierczak.github.io/warsawjs-workshop-gallery/
* Zdjęcia dostępne w katalogu /assets/photo0.jpg
(zdjęć jest 5, więc nazwy pliku to photo0.jpg - photo4.jpg)

### Struktura projektu

* Stworzyć katalog główny i podkatalogi,
* Stworzyć pliki styli, js oraz html i powstawiać do odpowiednich katalogów.

#### HTML

* Główna struktura: `<!DOCTYPE html><html><head><body>`,
* Struktura nagłówka: `<head><meta>, <head><title>`,
* Struktura body: `<body> + przykładowy selektor`,
* Omówić podstawowe selektory: `<div>, <p>, <ul>, <img>, <a>`,
* Dodać w selektorze przykładowy tekst: `<p>WarsawJS Workshop</p>`.

#### CSS

* Dodać przykładową regułę stylującą tekst,
* Załączenie pliku CSS do HTML.

#### JS

* Wyjaśnić console.log,
* Załączyć plik do HTML,
* Omówić zakładki DevTools pokazując m.in. wyświetlony tekst z funkcji

### Realizacja zadania - Galeria zdjęć

### &#x1F34E; ETAP 1) - Wyświetlenie miniaturek &#x1F34E;

#### HTML + CSS

* Dodać miniatury oraz aktualnie wyświetlane zdjęcie wraz z przyciskami
(wyjaśnienie wykorzystywanych znaczników)
* Ostylować te znaczniki w CSS
(wyjaśnienie używanych reguł styli)

### &#x1F34E; ETAP 2) - Wyświetlenie zdjęcia głównego &#x1F34E;

#### JS

##### Krótki przegląd języka - zmienne, funkcje, zdarzenia

* Zanim zaczniemy cokolwiek tworzyć w JS, musimy poczekać,
aż załaduje się DOM. Służy do tego zdarzenie `DOMContentLoaded`.

**Wyjaśnić:**

* Co to jest zmienna ?
1. Stworzyć zmienną let i = 5; i wyświetlić ją na konsoli,
2. Dodać wartości dwóch zmiennych, wynik na konsolę,
3. Omówić wbudowane typy danych,
* Co to jest funkcja ?,
a) Stworzyć zmienną lokalną,
b) Omówić parametry funkcji,
c) Stworzyć funkcję dodającą dwie liczby, wynik na konsolę,
* Co to jest zdarzenie ?,
* co to jest nasłuchiwanie na zdarzenie ?,
* Jak reagować na zdarzenia ?
* Co to jest wywołanie zwrotne ?
* Uruchomić przykładową funkcję w wywołaniu zwrotnym

##### Klasa `Gallery`

* Co to jest klasa ?,
* Co to jest instancja klasy ?,
* Stworzyć klasę Gallery,
* Co to jest konstruktor ?,
* Co to jest właściwość klasy ?,
* Dodać tablicę `this.images`, oraz `this.currentPhotoId`,
* Wyjaśnić co to jest `this`,
* Przenieść funkcję stworzoną w etapie wyżej do klasy,
* Uruchomić tę funkcję w konstruktorze,
* Stworzyć instancję klasy Gallery w wywołaniu zwrotnym zdarzenia `DOMContentLoaded`.

##### Funkcja `buildImagesArray`

* Stworzyć funkcję `buildImagesArray`, która wypełnia tablicę `images`
obiektami (para właściwości: `id`, `src`)
* Wyjaśnić co to jest stała oraz jak działają pętle,
* Wyrzucić do konsoli wypełnioną tablicę `this.images`.

##### Funkcja `displayCurrentPhoto`

* Stworzyć funkcję `displayCurrentPhoto`, która odpowiedzialna będzie
za wyświetlanie aktualnego zdjęcia (zdjęcie w pełnym rozmiarze pod
miniaturkami)
* Stworzyć pomocniczą funkcję `findPhotoByCurrentId`
 
**Wyjaśnić:**

* Dlaczego funkcja `findPhotoByCurrentId` jest zdefiniowana poza klasą ? 
* Wyjaśnić instrukcję warunkową `if`,
* Wyjaśnić różnicę między porównaniem a przypisaniem,
* Wyjaśnić co to jest `return`,
* Stworzyć pomocniczą funkcję `setCurrentPhotoSrc`,
* Jak pobrać element DOM ? (getElementById),
* Jak dostać się do właściwości obiektu (po kropeczce).

### &#x1F34E; ETAP 3) - Obsługa kliknięcia przycisków next/prev &#x1F34E;

##### Funkcja `setupClickListeners`

* Stworzyć funkcję `setupClickListeners`,
* Opowiedzieć, jakie mogą być typy zdarzeń, na które można nasłuchiwać,
* Stworzyć funkcję `clickHandler`.

**Wyjaśnić:**
- Jak działa `switch` ?

UWAGA: Na tym etapie, pomijamy wywołanie funkcji `this.addPhotosListener();`,
oraz `this.setActivePhotoBorder()`.

### &#x1F34E; ETAP 4) - ZADANIE DODATKOWE - Obsługa kliknięcia miniatury &#x1F34E;

### &#x1F34E; ETAP 5) - ZADANIE DODATKOWE - Dodanie kolorowej ramki na miniaturce, reprezentującej aktywne zdjęcie &#x1F34E;
