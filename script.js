const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result');
// agregamos adEventListener al elemento seleccionado
form.addEventListener('submit', SumInputValues);

// event

function SumInputValues(event){
    console.log({event});
    //  prevent the default action of an element from happening
    event.preventDefault();
    let resultado = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = `El resultado es ${resultado}`;
}