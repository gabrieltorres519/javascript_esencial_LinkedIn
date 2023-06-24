"use strict"

function saludar(nombre, edad){
    console.log('Hola: '+nombre);
    console.log('Edad: '+edad);
    let resultado = 'Nombre '+nombre+' tiene '+edad+' años \n'
    return resultado
}

var mensaje = saludar('Gabriel',23);

console.log(mensaje)