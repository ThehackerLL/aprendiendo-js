let alumnos = [
    {nombre: "Luis" , edad: 21, nota: 15, asistencia: true},
    {nombre: "Franklin" , edad: 25, nota: 1, asistencia: false},
    {nombre: "Martha" , edad: 18, nota: 10, asistencia: true},
    {nombre: "Fatima" , edad: 15, nota: 20, asistencia: true},
    {nombre: "Jose" , edad: 14, nota: 0, asistencia: false},
]

let aprobados = alumnos.filter(function(x){
    return x.nota >= 11 && x.asistencia === true
})

aprobados.forEach(function(x){
    console.log(x.nombre + " " + x.nota)
})

console.log(aprobados.length)
