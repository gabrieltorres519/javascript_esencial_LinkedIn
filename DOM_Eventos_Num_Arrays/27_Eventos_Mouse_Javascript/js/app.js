 "use strict"

// Uso del operador "this"

const boton = document.querySelector('.boton');

// boton.addEventListener('click', function (){
//     console.log(this.innerHTML); 
// });

boton.addEventListener('click', () => {
    console.log('El botón se ha pulsado');
});

boton.addEventListener('mouseover', () => {
    console.log('El mouse está sobre el botón');
});

boton.addEventListener('mouseout', () => {
    console.log('El mouse está fuera del botón');
});