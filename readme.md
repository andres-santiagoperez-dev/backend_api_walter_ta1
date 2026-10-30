## Paso a Paso
-Verificar version de node : node -v
-Inicializar el proyecto : npm init
-Crea el package.json
-Cambiamos la linea de type en el package.json :   "type":"module",para poder implementar modules de ES6
-Paquetes Basicos : npm i nodemon cors express mysql2
    -nodemon: solo para desarrollar! sirve para cambiar el codigo y que se actualize automaticamente
    -cors: setear la seguriadad de interactuar con direcciones IP diferentes
    -express: libreria para crear un servidor rest(POST,GET,PUT,DELETE) 
    -mysql2: esta es una libreria que permite hacer consultas SQL desde NODEJS

-Cambios la seccion script en package.json asi:
    -"scripts": {
    "dev":"nodemon index.js",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    }
    -Con el fin de tener 2 scripts de ejecucion, uno de desarrollo y otro de produccion

