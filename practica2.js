let celulares = [
    { Marca: "Samsung", Modelo: "A54", Precio: 1250, Stock: 0 },
    { Marca: "Apple", Modelo: "iPhone 17 Pro Max", Precio: 5500, Stock: 0 },
    { Marca: "Redmi", Modelo: "Note 15 Pro", Precio: 2500, Stock: 300 },
    { Marca: "Huawei", Modelo: "Pura 80 Ultra", Precio: 2000, Stock: 700 }
]

let mostrarCelular = ({ Marca, Modelo, Precio }) => {
    console.log(`Marca: ${Marca} - Modelo: ${Modelo} - Precio: S/.${Precio}`)
}

let celularesEnStock = celulares.filter((celular) => {
    return celular.Stock > 0
})

celularesEnStock.forEach(mostrarCelular)