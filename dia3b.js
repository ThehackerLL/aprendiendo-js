function saludar () {
    console.log("Hola, Bienvenido a Javascript")
}
saludar()

function saludarPersona(nombre) {
    console.log("Hola " + nombre + ", Bienvenido a javasCript")
}

saludarPersona("Lumart")
saludarPersona("Juan")
saludarPersona("Maria")

function sumar(a,b) {
    return a + b
}

let resultado = sumar(100,250)
console.log(resultado)

function esMayorDeEdad(Edad){
    if (Edad>=18) {
        return "Es mayor de Edad"
    } else {
        return "Es Menor de Edad"
    }
}

let Años = esMayorDeEdad(29)

console.log(Años)

    
