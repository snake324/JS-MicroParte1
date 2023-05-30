//Ejercicio de JavaScript 1

//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
//El resultado -> Cantidad de veces que aparecen las vocales: a:, e:, i:, o:, u:

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Pedir al usuario una frase
let frase = prompt('Ingresa una frase:').toLowerCase();

// Inicializar el contador de vocales
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

// Contar las vocales en la frase
for (let letra of frase) {
  if (letra === 'a') {
    contadorA++;
  } else if (letra === 'e') {
    contadorE++;
  } else if (letra === 'i') {
    contadorI++;
  } else if (letra === 'o') {
    contadorO++;
  } else if (letra === 'u') {
    contadorU++;
  }
}

// Mostrar los resultados
console.log('Cantidad de veces que aparecen las vocales:');
console.log('A: ' + contadorA);
console.log('E: ' + contadorE);
console.log('I: ' + contadorI);
console.log('O: ' + contadorO);
console.log('U: ' + contadorU);