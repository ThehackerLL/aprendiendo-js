// Metodos arrays
let numeros = [5, 3, 8, 1, 9, 2]

numeros.push(10)
console.log(numeros)

numeros.pop()
console.log(numeros)

console.log(numeros.length)
let frutas = ["manzana", "pera", "uva", "mango"]

// Verificar si un elemento existe
console.log(frutas.includes("pera"))
console.log(frutas.includes("sandia"))

// Encontrar la posición de un elemento
console.log(frutas.indexOf("uva"))

frutas.forEach(function(fruta)
{
    console.log("me gusta la " + fruta)
})

// Filtrar elementos de un array
let edades = [15, 22, 17, 30, 14, 25]

let mayores = edades.filter(function(edad) {
    return edad >= 18
})

console.log(mayores)

let precios = [100, 200, 300, 400]

let preciosConDescuentos = precios.map(function(precio){
    return precio * 0.9
})

console.log(preciosConDescuentos)
