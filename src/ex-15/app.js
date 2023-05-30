//Ejercicio de JavaScript 1

//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
//El resultado -> El número es primo: , El número no es primo

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Pedir al usuario un número
let numero = parseInt(prompt('Ingresa un número:'));

// Verificar si el número es primo
let esPrimo = true;

if (numero <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

// Mostrar el resultado
if (esPrimo) {
  console.log(numero, 'es un número primo.');
} else {
  console.log(numero, 'no es un número primo.');
}