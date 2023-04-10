/* Supongamos que preciso un slider para mi pagina
Probablemente alguien ya lo haya implementado y solo necesitamos agregarlo a nuestro proyecto
Para ello contamos con NPM ( npmjs.com ) Alli encontraremos modulos para frontend (como Create-react-app)

Un package es una carpeta conteniendo codigo JS reusable
Por el momento entenderemos que Dependency y module es lo mismo que package

Usando NPM en nuestro proyecto:
Comandos de terminal

$ npm --version   (o npm --v)
nos dice la version de npm que tenemos instalado

Solemos instalaar un package como local Dependency (para usar solo en el proyecto actual) con
$ npm -i <packageName>

o usar como global dependency (usar en cualquiera de los proyectos) 
$ npm install -g <PackageName>
$ sudo npm install -g <PackageName> (mac) (mac ouide sudo para instalar globalmente)

npx (lo veremos luego) hace que no sean tan necesarias ni de utilidad las dependencias globales

-----   package.json ----

Es un manifiest file. Contiene info de las dependencias y de nuestro proyecto (project /àckage). 
Podemos o bien mantenerlo a mano (crearlo en el root e ir agregandole propiedades)
o bien automatizar esto y usar 
$ npm init (step by step , press enter to skip)
o $npm init -y (everything by default) 

Ejemplo: 1) en la terminal ejecutar npm init. Ver que se crea el package.json de nuestro proyecto
2) Installamos lodedash y bootstrap. Ver que con Bootstrap tambien se installan automaticamnete jquery y popper 
3) Hacemos un require de logidash.
*/ 

const x = require('lodash')

items = [1,[2,[3,[4]]]]
newItems = x.flattenDeep(items)
console.log(newItems);