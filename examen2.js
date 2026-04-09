let celulares = [
    {Marca: "Samnsung", Modelo: "A54", Precio: 1250, Stock: 0 },
    {Marca: "Apple", Modelo: "iPhone 17 pro max", Precio: 5500, Stock: 0 },
    {Marca: "Redmi", Modelo: "Redmi note 15 pro", Precio: 2500, Stock: 300 },
    {Marca: "huawei", Modelo: "Pura 80 ultra", Precio: 2000, Stock: 700 },
] 

const phone = ({Marca, Modelo, Precio,}) => {
    console.log(`Marca: ${Marca} - Modelo: ${Modelo} - Precio: S/.${Precio}`)
}

let celularesVendidos = celulares.filter((celular) => {
    return celular.Stock > 0
})

// celularesVendidos = celulares.forEach((celular) => {
//     console.log(`Marca: ${celular.Marca} - Modelo: ${celular.Modelo} - Precio: ${celular.Precio}`)
// } )


celularesVendidos.forEach(phone)




/*
Tienes una tienda de celulares. Debes:

------Crear un array de objetos con 4 celulares, cada uno con: Marca, Modelo, Precio y Stock (true o false)
......Crear una función flecha que reciba un celular y muestre con template literals: "Marca: X - Modelo: X - Precio: S/.X"
------Filtrar solo los celulares que están en Stock
Recorrer los celulares en Stock con forEach y mostrar cada uno usando la función del paso 2
Usar destructuring en alguna parte del código

No te doy ningún código. Tú lo escribes solo. Si te trabas dime exactamente dónde.

*/