const parrafo = document.querySelector('#pythonImage');
parrafo.addEventListener('mouseover', desaparecerImg);
const javascriptImg = document.createElement('img');
javascriptImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/150px-Unofficial_JavaScript_logo_2.svg.png');
const tittle = document.querySelector('h1');

function desaparecerImg(event){
    console.warn(event);
    // event.preventDefaoult();
    alert('Es mentira! uno no es mejor que el otro ni veceversa. Cada lenguaje tiene sus propias caracteristicas y usos en el ambiente profesional');
    parrafo.innerHTML = '';
    parrafo.appendChild(javascriptImg);
    tittle.innerText = 'Javascript es el rey!'
}