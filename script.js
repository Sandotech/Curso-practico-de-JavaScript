/* leyendo HTML desde JavaScript */

// creamos variables que representen a los selectores de nuestro document

// querySelector seleccionamos el tag, funciona como CSS

const h1 = document.querySelector("h1")
const p = document.querySelector('p')
const parrafito = document.getElementsByClassName("parrafito");
const parrafo_id = document.querySelector("#parrafoId");
const input = document.querySelector("input");

console.log(parrafito);
// print object and values in the console
console.log({
    h1, p, parrafito, parrafo_id, input
})

// innerHTML 

h1.innerHTML = "Javaescri";

// tambien esta innerText que solo funciona con strings 

// imprimir un atributo 

console.log(h1.getAttribute("class"))

// modificar el atributo

h1.setAttribute("class", "titulo");

// agregar una clase

h1.classList.add("heading")

// remover una clase

h1.classList.remove("heading");

// devuelve true || false si tenemos esta clase

h1.classList.contains("titulo");

// modificar el value de un input

// input.value = "234";

// console.log(input);

// createElement

const img = document.createElement("img");

img.setAttribute("src", "https://eloquentjavascript.net/img/cover.jpg")


console.log(img);

// console.log(img);

parrafo_id.append(img);

// console.log(parrafito);

// reemplazar un elemento
p.innerHTML = "";
p.appendChild(img);
