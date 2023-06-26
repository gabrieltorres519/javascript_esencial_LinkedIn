 "use strict"

// Uso del operador "this"

const boton = document.querySelector('.boton');

// boton.addEventListener('click', function (){
//     console.log(this.innerHTML); 
// });

boton.addEventListener('click', () => {
    console.log(this);
    this.location = 'https://instagram.com/gabrielletorricelli' 
});
