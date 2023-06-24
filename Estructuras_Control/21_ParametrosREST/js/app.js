"use strict"

// Parámetros REST

function cocinar(ingrediente1, ingrediente2, ...restoIngredientes){
    console.log('Ingrediente 1: '+ingrediente1);
    console.log('Ingrediente 2: '+ingrediente2);
    console.log('Resto de ingredientes: '+restoIngredientes);
}

cocinar('Pollo','Tomate','Arroz','Frijoles','Pescado')