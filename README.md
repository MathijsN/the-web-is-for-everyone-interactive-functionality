# Snappthis

Snappthis is een mobiele webapplicatie waarmee gebruikers foto's delen binnen zogenoemde snappmaps. Een gebruiker wordt uitgenodigd in een groep; die groep kan meerdere snappmaps bevatten. Een begeleider, bijvoorbeeld een docent, maakt een snappmap aan en geeft deze een thema of opdracht. Deelnemers delen hierin zelfgemaakte foto's, die dienen als inspiratie en gespreksonderwerp vanuit de echte wereld.

## Bescrhrijving

### Responsive

Aangezien het idee van de webapp tot nu toe alleen mobiel is, is er nog nog geen desktop design. De website is wel responsive al zitten er nog geen layout veranderingen in voor desktop.

<img width="350" height="745" alt="Screenshot 2026-04-01 at 10 05 07" src="https://github.com/user-attachments/assets/d22a19f3-fc19-43fd-a60f-4bc580a21bba" />

<img width="1480" height="739" alt="Screenshot 2026-04-01 at 10 06 35" src="https://github.com/user-attachments/assets/17db6872-9ce1-41cc-a747-25235a9d27ef" />

Maar je kan wel ve view veranderen zodat je op destkop kleinere foto's krijgt.

<img width="1477" height="742" alt="Screenshot 2026-04-01 at 10 07 47" src="https://github.com/user-attachments/assets/290ea4ef-4e4b-47b2-abe0-85546fb2aeef" />

### Toegankelijkheid

## Gebruik

De hoofd functionaliteit van de webapp is het uploaden van snapps naar een specifieke snappmap. De website staat standaard ingesteld op de 'test' snappmap. Om foto's in deze snappmap te uploaden druk je op de groene foto knop.

<img width="1171" height="472" alt="Screenshot 2026-04-01 at 10 16 47" src="https://github.com/user-attachments/assets/6682e2dd-f8a5-4ab5-9c7e-940d652141dd" />

## Kenmerken

In dit project maak ik gebruik van ExpressJS (voor NodeJS) en LiquidJS. De hoofd functionaliteit is een POST van een foto naar de snappmap. De inhoud van het formulier (een foto) wordt doorgestuurd naar de post route die vervolgens het doorstuurd naar de database. Vervolgens halen wij uit de database de bijbehorende ID van de foto op en sturen die door naar de juiste snappmap.

Voor de view verander functie is een popover gebruikt die progressive enhanced is. Dat wilt zeggen dat als de browser geen popover ondersteund er niks zichtbaar is. De functionaliteit van de view verander functie is gemaakt met (client-side) Javascript. Ik check hier welke button geklikt is om de juiste classes te triggeren.

## Installatie
Als je de codes zelf wilt aanpassen vergeet dan niet bij het installeren eerst **npm install** te doen.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
