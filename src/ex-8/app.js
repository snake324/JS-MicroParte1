//Ejercicio de JavaScript 1

//Escribe un programa que pida una frase y escriba las vocales que aparecen
//El resultado -> Aparecen las siguientes vocales

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Solicitar al usuario una frase
const frase = prompt("Ingrese una frase: ");

// Convertir la frase a minúsculas
const fraseMinusculas = frase.toLowerCase();

// Definir un array con las vocales
const vocales = ["a", "e", "i", "o", "u"];

// Buscar las vocales presentes en la frase
const vocalesEncontradas = fraseMinusculas.match(/[aeiou]/g);

// Mostrar las vocales encontradas
console.log("Las vocales encontradas en la frase son: " + vocalesEncontradas.join(", "));