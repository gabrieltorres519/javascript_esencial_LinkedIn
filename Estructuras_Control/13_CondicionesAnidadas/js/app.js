"use strict"

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if(datoA > datoB){
    
    resultado = 'La condición se cumplió';

    if(datoA > datoB){
        resultado = 'Evaluación anidada verdadera';
    }else{
        resultado = 'La condición anidada no se cumplió';
    }

}else{
    resultado = 'La condición no se cumplió';
}
