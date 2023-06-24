 "use strict"

// Funciones Anónimas

// (
//     function(){
//         var mensaje = 'Hola de nuevo';
//         console.log(mensaje)        
//     }
// )()

// La siguiente forma de hacer funciones anónimas es muy utilizada al hacer callbacks

var saludar = function(nombre){
    var mensaje = 'Hola mundo ' + nombre;
    return mensaje
}