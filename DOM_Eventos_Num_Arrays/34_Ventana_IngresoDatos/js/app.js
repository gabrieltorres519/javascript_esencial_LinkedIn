 "use strict"

 const Video = document.querySelector('.cafeVideo');

 Video.addEventListener('ended', function(){
     let email = prompt('Para poder seguir viendo más videos, ingrese un correo electrónico','correoPorDefecto@info.com') // Guardamos lo que hayan ingresado en el cuadro de confirmación

     //Actuamos en consecuencia de lo que haya seleccionado el usuario,
     //tomando en cuenta la posibilidad de que no nos llegue nada o que 
     //llegue una cadena vacía
     if(email == null || email == ""){
        console.log('Sin datos!!')
     }else{
         console.log(email)
     }
 });
 


