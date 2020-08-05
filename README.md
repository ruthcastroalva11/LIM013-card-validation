# Tarjeta de Crédito Válida para Comercial Castro

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Descripción](#2-descripción)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. El Paso a Paso](#4-El-Paso-a-Paso)
* [5. Contenido de Referencia](#5-Contenido-de-Referencia)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Descripción

En este proyecto se ha construido una aplicación web para un emprendimiento peruano que busca exhibir sus productos para que así los clientes o usuarios que deseen adquirirlos puedan hacer el pago vía online.

Con esta aplicación el usuario solo deberá ingresar a la web, escoger el producto de interés e ingresar el número de tarjeta. Una vez validada la tarjeta, el cliente podrá para proceder con la compra. Finalmente se ocultarán todos los dígitos menos los últimos cuatro al momento de confirmar la validación.

## 3. Objetivos de aprendizaje

Construir una aplicación web que interactúa con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript como tecnologías.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

## 4. El Paso a Paso

### Ideando...

* Al momento de idear en qué contexto sería de mucha utilidad un proyecto de validación de tarjeta de crédito, se pensó automáticamente en los emprendimientos peruanos que buscan llegar a más clientes e incrementar sus ventas. Para esto, se tomó el caso específico de "Comercial Castro".
* Los principales usuarios de este producto serían todos los interesados en conocer y/o adquirir alguno de los productos de este negocio, ya que podrán ver y escoger el producto con facilidad y finalmente ingresar el número de tarjeta de crédito para estar a solo un paso de la compra.
* Con este proyecto se beneficiarían las dos partes del proceso comercial: el vendedor y el comprador.

### Realizando...

* El primer prototipo (realizado en papel) fue el siguiente:
![Prototipo1](https://i.imgur.com/pKvtCZW.jpg)
![Prototipo2](https://i.imgur.com/66Ugrp7.jpg)
![Prototipo3](https://i.imgur.com/8z3EmON.jpg)

* Luego de pedir feedback a las compañeras y coaches, se añadió mayor contexto del negocio, agregando imágenes e información sobre los productos que ofrece. El prototipo final fue el siguiente:
![Prototipo Final1](https://i.imgur.com/bZi1Cid.png)
![Prototipo Final2](https://i.imgur.com/rBTpUfw.png)
![Prototipo Final3](https://i.imgur.com/WUgrJmh.png)

* Imágenes del proyecto final: 
![Proyecto Final1](https://i.imgur.com/knfaVTl.png)
![Proyecto Final2](https://i.imgur.com/oYDscBF.png)
![Proyecto Final3](https://i.imgur.com/a4ARvuG.png)
![Proyecto Final4](https://i.imgur.com/tYkv3By.png)

## 5. Contenido de Referencia

### Herramientas

* Editor en texto: [Code](https://code.visualstudio.com/).
* Herramienta de diseño visual: [Figma](https://www.figma.com/).
* Repositorio de imágenes: [Imgur](https://imgur.com/).
* Web de íconos diversos: [Flaticon](https://www.flaticon.com/).

### Referencia

* Algoritmo de Luhn: 
[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

* Terminal y shell de UNIX: 
[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

* Control de versiones y trabajo colaborativo con Git y GitHub: 
[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)
