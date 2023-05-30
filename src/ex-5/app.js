//Ejercicio de JavaScript 1

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//El resultado -> el número mayor es

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Solicitar al usuario dos números
const numero1 = prompt("Introduce el primer número: ");
const numero2 = prompt("Introduce el segundo número: ");

// Comparar los números y mostrar el resultado
if (numero1 > numero2) {
  console.log("El primer número, " + numero1 + ", es mayor que el segundo número, " + numero2 + ".");
} else if (numero2 > numero1) {
  console.log("El segundo número, " + numero2 + ", es mayor que el primer número, " + numero1 + ".");
}
