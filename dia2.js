let a = 10 
let b = 5

console.log(a>b) // mayor que 
console.log(a<b) // menor que
console.log(a>=10) // mayor o igual que
console.log(a<=10) // menor o igual que
console.log(a == 10) // igual que
console.log(a !=b) // diferente que

let tengoInternet = true
let tengoPC= true

if (tengoInternet && tengoPC) {
    console.log("Puedo Programar")
}
else{
    console.log("No puedo programar")
}

let tengoTiempo = false
let tengoEnergia = true

if (tengoTiempo || tengoEnergia) {
    console.log("Puedo estudiar")
}
else {
    console.log("No puedo estudiar")
}