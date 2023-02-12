/* leyendo HTML desde JavaScript */

// creamos variables que representen a los selectores de nuestro document

// querySelector seleccionamos el tag, funciona como CSS

const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

// print object and values in the console
console.log({
    h1, p, parrafito, pid, input,
});