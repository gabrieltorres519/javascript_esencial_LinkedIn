"use strict"

var persona = {

    nombre: 'Gabriel',
    twitter: 'gabrielletorricelli' 

};

var personas = [
    {

        nombre: 'Gabriel',
        twitter: 'gabrielletorricelli' 
    
    },
    {

        nombre: 'Emmanuel',
        twitter: 'emma.sirangua' 
    
    },
    {

        nombre: 'Cesar',
        twitter: 'cesar.cube' 
    
    }, 
    persona
]



var personaJSON = JSON.stringify(persona); // Objeto que convertirá el contenido en una cadena de texto para su envío entre servidores

// El método parse va a entender todo lo que está en la cadena de texto personaJSON y lo va a recomponer como un objeto para usarlo
var nuevaPersona = JSON.parse(personaJSON);// El valor ahora convertido en Objeto JSON

