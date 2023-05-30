//Ejercicio de JavaScript 1

//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
//El resultado -> “La suma de <numero-uno> con <numero-dos> es <resultado>”

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Solicitar al usuario dos números
const numero1 = prompt("Introduce el primer número: ");
const numero2 = prompt("Introduce el segundo número: ");

// Calcular la suma de los números
const suma = Number(numero1) + Number(numero2);

// Construir la frase de resultado
const resultado = "La suma de " + numero1 + " con " + numero2 + " es " + suma + ".";

// Mostrar el resultado en la pantalla
console.log(resultado);