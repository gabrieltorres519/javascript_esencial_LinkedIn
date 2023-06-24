"use strict"

// Control de ciclos 
// break | continue


var contador = 0;
var cuenta = 0;  

// Ciclo for, para contar cuántos números impares existen.

for(contador=0; contador <= 28; contador++){

    if(contador % 2 == 0){
        continue; // Si se entra a la condición significa que se encontró un par
                  // por lo que no se debe aumentar la cuenta de  impares, al usar continue
                  // ignora todas las instrucciónes que están por delante en el ciclo
                  // en esa iteración específica. 
    }
    cuenta++;
    debugger;
}

console.log("Hay "+cuenta+" numeros impares");