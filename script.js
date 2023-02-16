const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result');

// eventos

function input2Click(){
    console.log('acaba de pasar algo :)');
}

function btnClick(){
    let resultado = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = `El resultado es ${resultado}`;
}