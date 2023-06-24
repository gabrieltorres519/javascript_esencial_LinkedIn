"use strict"

var simbolo1 = Symbol();
var simbolo2 = Symbol();

// Utilizaremos un símbolo para saber si nos encontramos en ambiente de producción o de desarrollo
var ambiente = Symbol('dev')