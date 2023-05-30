//Ejercicio de JavaScript 1

//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
//El resultado -> La letra 'a' aparece x veces en la frase

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Solicitar al usuario una frase
const frase = prompt("Ingrese una frase: ");

// Convertir la frase a minúsculas
const fraseMinusculas = frase.toLowerCase();

// Contar la cantidad de veces que aparece la letra "a" en la frase
const contadorA = fraseMinusculas.split("a").length - 1;

// Mostrar el resultado en la consola
console.log("La letra 'a' aparece " + contadorA + " veces en la frase.");