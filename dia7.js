let persona = {
    nombre: "Lumart",
    edad: 20,
    ciudad: "Junin"
} 
const {nombre, edad, ciudad} = persona

console.log(nombre)
console.log(edad)
console.log(ciudad)

let colores = ["rojo", "verde", "azul"]

const [primero, segundo, tercero] = colores

console.log(primero)
console.log(segundo)
console.log(tercero)

// Destructuring en funciones
const mostrarPersona = ({ nombre, edad, ciudad }) => {
    console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}`)
}

mostrarPersona(persona)

const {nombre: nombreCompleto, pais = "Peru"} = persona

console.log(nombreCompleto)
console.log(pais)