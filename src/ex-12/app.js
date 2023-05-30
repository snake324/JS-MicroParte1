//Ejercicio de JavaScript 1

//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
//El resultado -> Es divisible por 2, Es divisible por 3, Es divisible por 5, Es divisible por 7, no es divisible por 2, 3, 5 ni 7

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Pedir al usuario un número
let numero = prompt('Ingresa un número:');

// Verificar si es divisible por 2
if (numero % 2 === 0) {
  console.log('El número es divisible por 2');
}

// Verificar si es divisible por 3
if (numero % 3 === 0) {
  console.log('El número es divisible por 3');
}

// Verificar si es divisible por 5
if (numero % 5 === 0) {
  console.log('El número es divisible por 5');
}

// Verificar si es divisible por 7
if (numero % 7 === 0) {
  console.log('El número es divisible por 7');
} 
