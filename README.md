# warsawjs-workshop-gallery

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

* napisać console.log/funkcję z console.log,
* załączyć plik do HTML,
* omówić zakładki DevTools pokazując m.in. wyświetlony tekst z funkcji

### Realizacja zadania - Galeria zdjęć

### <span style="color:orange;">ETAP 1) - Wyświetlenie miniaturek</span>

#### HTML + CSS

* Dodać miniatury oraz aktualnie wyświetlane zdjęcie wraz z przyciskami
(wyjaśnienie wykorzystywanych znaczników)
* Ostylować te znaczniki w CSS
(wyjaśnienie używanych reguł styli)


### <span style="color:orange;">ETAP 2) - Wyświetlenie zdjęcia głównego</span>

#### JS

##### Krótki przegląd języka - zmienne, funkcje, zdarzenia

* Zanim zaczniemy cokolwiek tworzyć w JS, musimy poczekać,
aż załaduje się DOM. Służy do tego zdarzenie `DOMContentLoaded`.

**Wyjaśnić:**

* Co to jest zmienna ?
a) stworzyć zmienną var i=5 i wyświetlić ją na konsoli
b) dodać wartości dwóch zmiennych, wynik na konsolę
c) omówić wbudowane typy danych 
(Array, number, string, Object, Boolean, null, undefined)
* Co to jest funkcja ?,
a) stworzyć zmienną lokalną,
b) omówić parametry funkcji,
c) stworzyć funkcję dodającą dwie liczby, wynik na konsolę
* Co to jest zdarzenie ?,
* co to jest nasłuchiwanie na zdarzenie ?,
* Jak reagować na zdarzenia ?
* Co to jest wywołanie zwrotne ?
* Uruchomić przykładową funkcję w wywołaniu zwrotnym

##### Klasa `Gallery`

* Co to jest klasa ?
* Co to jest instancja klasy ?
* Stworzyć klasę Gallery
* Co to jest konstruktor ?
* Co to jest właściwość klasy ?
* Dodać tablicę `this.images`, oraz `this.currentPhotoId`,
* Wyjaśnić co to jest `this`,
* Przenieść funkcję stworzoną w etapie wyżej do klasy
* Uruchomić tę funkcję w konstruktorze
* Stworzyć instancję klasy Gallery w wywołaniu zwrotnym zdarzenia
`DOMContentLoaded`.

##### Funkcja `buildImagesArray`

* Stworzyć funkcję `buildImagesArray`, która wypełnia tablicę `images`
obiektami (para właściwości: `id`, `src`)
* Wyjaśnić co to jest stała oraz jak działają pętle
* Wyrzucić do konsoli wypełnioną tablicę `this.images`

##### Funkcja `displayCurrentPhoto`

* Stworzyć funkcję `displayCurrentPhoto`, która odpowiedzialna będzie
za wyświetlanie aktualnego zdjęcia (zdjęcie w pełnym rozmiarze pod
miniaturkami)
* Stworzyć pomocniczą funkcję `findPhotoByCurrentId`
 
**Wyjaśnić:**

* Dlaczego funkcja `findPhotoByCurrentId` jest zdefiniowana poza klasą ? 
* Wyjaśnić instrukcję warunkową `if`,
* Wyjaśnić różnicę między porównaniem a przypisaniem,
* Wyjaśnić co to jest `return`

* Stworzyć pomocniczą funkcję `setCurrentPhotoSrc`

**Wyjaśnić**

* Jak pobrać element DOM ? (getElementById)
* Jak dostać się do właściwości obiektu (po kropeczce)
