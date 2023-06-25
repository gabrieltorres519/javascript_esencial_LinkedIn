 "use strict"

// Callbacks


function calcular(datoA, datoB, sumarfCallback, restarfCallback){
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumarfCallback(suma)
    restarfCallback(resta)
}

calcular(2,3, function(resultado){
    console.log('Suma: ',resultado)
},function(resultado){
    console.log('Resta: ',resultado)
})