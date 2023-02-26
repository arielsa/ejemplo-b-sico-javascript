console.log("hola mundo");

const h1= document.querySelector('h1');
const num1 = document.getElementById ('num1');
const num2 = document.getElementById ('num2');
const op = document.getElementById ('op');
const btn = document.querySelector ('#btnCalcular');
var resultado = document.getElementById('resultado');

btn.addEventListener('click',btnOnClik);



function btnOnClik ( ){

    const operacion = num1.value + num2.value;
    console.log('e');
    resultado.innerText  = "resultado: "+ operacion;
    op.value = 'resultado: '+ operacion;
};



//////////////////fin de la clase 10

h1.innerHTML='calculadora';