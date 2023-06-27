 "use strict"

 const Video = document.querySelector('.cafeVideo');

 Video.addEventListener('play', function(){
     console.log('El video ha sido iniciado');
 });
 
 Video.addEventListener('seeking', function(){
     console.log('Se está navegando en el video: ', this.currentTime);
 });
 
 Video.addEventListener('ended', function(){
     console.log('El video ha terminado');
 });
 


