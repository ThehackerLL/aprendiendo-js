const celulares = [
    { marca: "Samsung", modelo: "A54", precio: 1250, stock: true },
    { marca: "Apple", modelo: "iPhone 17 Pro Max", precio: 5500, stock: false },
    { marca: "Redmi", modelo: "Note 15 Pro", precio: 2500, stock: true },
    { marca: "Huawei", modelo: "Pura 80 Ultra", precio: 2000, stock: true }
]

// función flecha con destructuring
const mostrarCelular = ({ marca, modelo, precio }) => {
    console.log(`Marca: ${marca} - Modelo: ${modelo} - Precio: S/.${precio}`)
}

// filtrar los que están en stock
const enStock = celulares.filter(celular => celular.stock === true)

// recorrer y mostrar
enStock.forEach(mostrarCelular) 

