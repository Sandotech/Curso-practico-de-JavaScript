/* Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?

= Es un espacio reservado en memorio donde almacenamos un dato

¿Cuál es la diferencia entre declarar e inicializar una variable?

declar una variale == let listadoFrontend;

inicializar una variable == listadoFrontend = ["Diego", "Jose", "Mateo"];

¿Cuál es la diferencia entre sumar números y concatenar strings?

La suma es una operacion que se realiza solamente con datos numeriocs 

Concatenar es sumar elementos de tipo de string u otros, no en forma matematica.

¿Cuál operador me permite sumar o concatenar?

= +


Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
nombre = string
apellido = string
Nombre de usuario en Platzi = string
Edad = number
Correo electrónico = string
Mayor de edad = boolean
Dinero ahorrado = number
Deudas = number

var nombreCompleto = `${nombre} ${apellido}`;
var dineroReal = dineroAhorrado - deudas;

Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?

= Es la forma de agrupar un bloque en una sola linea y mandarlo a llamar cuando queramos (siempre y cuando siga el orden de nuestro algoritmo)

¿Cuándo me sirve usar una función en mi código?

= Cuando tenemos que usar el mismo en diferentes lineas de codigo, eso merece ser convertido en una funcion 

¿Cuál es la diferencia entre parámetros y argumentos de una función?

Los paramatros son variables dentro del scope de nuestra funcion y los argumentos son los valores de estas variable (parametros);

Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

Solucion =

function introduceMyself(completeName, nickname){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?

    Son expresiones que nos permitiran tomar decisiones en nuestro codigo dependiendo de si una condicon es true || false

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    if, else y switch 

    con el patron if else generamos multiples condiciones expresadas de forma diferente, por lo que podremas multiples bloque if else como sea posible

¿Puedo combinar funciones y condicionales?

    por supuesto!

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

solucion = 

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}   else if(tipoDeSuscripcion === "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}   else if (tipoDeSuscripcion === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}   else if (tipoDeSuscripcion === "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}   else{
        console.log("No tienes ninguna suscripcion :'( Que esperas para suscribirte?")
}

Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

let typeSuscripción = [
"Free",
"Basic", 
"Expert", 
"ExpertPlus"
];
let infoSuscripción = [
"solo puedes tomar los cursos gratis", 
"puedes tomar casi todos los cursos de Platzi durante un mes", 
"puedes tomar casi todos los cursos de Platzi durante un año", 
"tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSuscription = "Expert";
for (let i=0; i < typeSuscripción.length; i++) {
  if (userSuscription == typeSuscripción[i]) {
  	console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
  }
}

Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?

Es una expresion que nos permitira ejecutar un bloque de codiga mientras una condicion sea verdadera 

¿Qué tipos de ciclos existen en JavaScript?

while, do while, for, for in, for of.

¿Qué es un ciclo infinito y por qué es un problema?

Es cuando esta iterando una y otra vez y no tiene ninguna condicon o limite por el cuual detenerse, esto causa una mala experiencia al usuario, al punto de que computador puede quedar congelado y sin responder hasta ser reiniciado, se cierre el navegador o se detenga el ciclo

¿Puedo mezclar ciclos y condicionales?

Por supuesto!

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

solucion = 

var i = 0; 

while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

var i = 10;
while (i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}

 Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

function questionUser(){
    let user = pronmp(`Cuanto es 2 + 2?`);
    (user == 2) ? console.log(`Felcidades! Respondiste muy bien `) : console.log(`Respuesta incorrecta, intentalo de nuevo, campeon`);
}

Arrays

Responde las siguientes preguntas en la sección de comentarios:
¿
Qué es un array?

 Es un conjunto de datos almacenados en una sola variable.

 ¿Qué es un objeto?
    es una agrupacion, que puede ser a representacion de un objeto debido a 
    que puede poseer funciones (metodos )y caracteristicas (atributos)

¿Cuándo es mejor usar objetos o arrays?

dependiendo de la tarea, si posee muchos elementos lo reconendable seria trabajar con objetos
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Of course!

Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

*/

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// inicializamos nuestro array

var array = ["Manuel", 2, "Jose", 4, "Roberto"];

// funcion para imprimir el primer elemento del array

function printPrimerElemento(array){
    console.log(array[0]);
}

printPrimerElemento(array);

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var array = ["Manuel", 2, "Jose", 4, "Roberto", 6];

for(i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

// creamos el objeto


var newCar = {
    brand: "Toyota",
    model: "4X4",
    year: 2035
};

// creamos la funcion

function printObject(objeto){
    for(object in objeto){
        console.log(objeto[object]);
    }
}
printObject(newCar);

// solucion de juan DC

var newCar = {
    brand: "Toyota",
    model: "4X4",
    year: 2035
};

// get return the values of our object

console.log(Object.values(newCar));

// Teacher answer

var newCar = {
    brand: "Toyota",
    model: "4X4",
    year: 2035
};

function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto(newCar);

// get return the key name of our object

console.log(Object.keys(newCar));

console.log(Object.entries(newCar));

// Teacher Bonus solution 

const tipoDeSuscripciones = {
    free: "solo puedes tomar los cursos gratis",
    basic: "puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function conseguirTIpoSuscripcion(suscripcion){
    if (tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripcion no existe');
}

conseguirTIpoSuscripcion("uwu");

console.log(tipoDeSuscripciones.free);


// multiplica todos los elementos por dos

let miArray1 = [2, 4, 5, 6, 8];
let miArray2 = [1, 1, -2, -3];

function multiplyElements(array){
    array.map(function(array){
        console.log(array * 2);        
    })
}

multiplyElements(miArray1);
multiplyElements(miArray2);

for (i = 0; i < array.length; i++);

let miArray1 = [2, 4, 5, 6, 8];

var arrayPor2 = [];

function multiplyElements(array){
    for(i = 0; i < array.length; i++){
        arrayPor2.push((array[i] * 2));
    }
    console.log(arrayPor2);

}

let miArray1 = [2, 4, 5, 6, 8];

function multiplyElements(array){
    console.log(array.map(item => item * 2));
}

multiplyElements(miArray1);

