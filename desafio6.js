const express = require('express')
const Contenedor = require('./Contenedor.js')

const app = express()

let seeProducts = new Contenedor('productos')
let data
(async function getData () {
    data = await seeProducts.getAll()
})()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const server = app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.send(
        `
            <ul>
                <li><a href="/productos">Listado de productos</a></li>
                <li><a href="/productoRandom">Producto random</a></li>
            </ul>
        `
    )
})

app.get('/productos', (req, res) => {
        res.send(data)
})

app.get('/productoRandom', (req, res) => {
    let min, max
    let result

    if(data.length > 0) {
        min = 1
        max = data.length + 1
        let randomNumber = getRandomInt(min, max)
        const getData = async () => {
            result = await seeProducts.getById(randomNumber)
            res.send(result)
        }
        getData()
    } else {
        result = 'No hay productos'
        res.send(result)
    }
})