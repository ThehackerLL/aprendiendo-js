let persona = {
    nombre: "lumart",
    edad: "20",
    ciudad: "Junin",
    saludar: function () {
        return "Hola soproducto " + persona.nombre
    }
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.saludar())

persona.pais = "Peru"
persona.edad = 21

console.log(persona.pais)
console.log(persona.edad)

let estudiantes = [
    { nombre: "Lumart", nota: 18, },
    { nombre: "Juan", nota: 15, },
    { nombre: "Maria", nota: 20, },
]

estudiantes.forEach(function (estudiante) {
    console.log(estudiante.nombre + " tiene " + estudiante.nota)
})

let aprobados = estudiantes.filter(function (x) {
    return x.nota >= 16
})
console.log(aprobados)

let productos = [
    { nombre: "laptop", precio: 2500, disponible: true },
    { nombre: "Mouse", precio: 50, disponible: false },
    { nombre: "Teclado", precio: 120, disponible: true },
    { nombre: "Monitor", precio: 800, disponible: false },
    { nombre: "Auriculares", precio: 150, disponible: true },
]

let productosDisponibles = productos.filter(function (producto) {
    return producto.disponible === true
})

productosDisponibles.forEach(function (producto) {
    console.log(producto.nombre + " -S/. " + producto.precio)
})
