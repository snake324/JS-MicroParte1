//Ejercicio de JavaScript 1

//Escribe un programa que pida tres números y escriba en la pantalla cual es el mayor.
//El resultado -> el número mayor es

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Solicitar al usuario tres números
const numero1 = prompt("Ingrese el primer número: ");
const numero2 = prompt("Ingrese el segundo número: ");
const numero3 = prompt("Ingrese el tercer número: ");

// Determinar el mayor de los tres números
let mayor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
}

if (numero3 > mayor) {
  mayor = numero3;
}

// Mostrar el número mayor en pantalla
console.log("El número mayor de los tres es: " + mayor);