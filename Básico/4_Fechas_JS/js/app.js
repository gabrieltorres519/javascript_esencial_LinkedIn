"use strict"

// Hacemos uso del objeto llamado Date

var fecha = new Date();

// En cada instante que se cree un new Date() se tomará la fecha con precisión de segundos exacta del 
// momento en que esa instrucción se ejecutó.

// Obtener solo el día (numérico) 
fecha.getDate()

// Establecer un día en una fecha, será con set
fecha.setDate(5) // Estableciendo que en la fecha guardada en la variable fecha, se cambie el día, por el día 5


// En el trabajo con fechas siémpre se usan los métodos set y get ya que se trata de objetos.
