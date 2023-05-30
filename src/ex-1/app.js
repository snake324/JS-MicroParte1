//Ejercicio de JavaScript 1

//Nos pide un programa que muestre un <h1> que diga "Hello Javascript"
//El resultado -> El resultado tiene que dar "Hello Javascript"

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html
// Crear un elemento h1
const h1 = document.createElement("h1");
// Establecer el texto dentro del elemento h1
h1.textContent = "Hello JavaScript";
// Agregar h1 al cuerpo del documento
document.body.appendChild(h1);