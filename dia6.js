// funcion normal vs funcion flecha
function saludar(nombre){
    return "Hola " + nombre
}

const saludarFlecha = (nombre) => {
    return "Hola " + nombre
}
console.log(saludar("Lumart"))
console.log(saludarFlecha("Lumart"))

// funcion flecha simplificada

const sumar = (a,b) => a + b

const doble = n => n * 2 

console.log(sumar(10,5))

console.log(doble(8))

let nombre = "Lumart"
let edad = 20 
let ciudad = "junin"

console.log(`Me llamo ${nombre} tengo ${edad} años y vivo en ${ciudad}`)

// Template literals con operaciones

let precio = 100 
let descuento = 10 

console.log(`El precio original es S/.${precio} y con descuento es S/.${precio - descuento}`)

const describir = (nombre, edad, ciudad) => 
    `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad} `
console.log(describir("lumart", 20, "junin"))
console.log(describir("juan", 25, "Lima"))
