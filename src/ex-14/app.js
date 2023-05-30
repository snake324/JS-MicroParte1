//Ejercicio de JavaScript 1

//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
//El resultado -> Los divisores comunes de 'numero1' y de 'numero2' son:

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Pedir al usuario dos números
let numero1 = parseInt(prompt('Ingresa el primer número:'));
let numero2 = parseInt(prompt('Ingresa el segundo número:'));

// Mostrar los divisores comunes de los dos números
console.log('Los divisores comunes de', numero1, 'y', numero2, 'son:');
for (let i = 1; i <= numero1 && i <= numero2; i++) {
  if (numero1 % i === 0 && numero2 % i === 0) {
    console.log(i);
  }
}