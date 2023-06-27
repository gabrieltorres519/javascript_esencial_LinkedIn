 "use strict"

 const Video = document.querySelector('.cafeVideo');

 Video.addEventListener('ended', function(){
     let resultado = confirm('¿Deseas ver el video nuevamente?') // Guardamos lo que hayan ingresado en el cuadro de confirmación

     console.log(resultado)

     //Actuamos en consecuencia de lo que haya seleccionado el usuario.
     if(resultado){
        Video.play()
     }else{
        window.location = "http://www.google.com"
     }
 });
 


