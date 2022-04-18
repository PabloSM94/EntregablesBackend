//archivo anterior
const fs = require('fs');
let arrayNuevo;

function getAll(){
    fs.promises.readFile("./data/archivo.txt", "utf-8")
    .then (contenido => {
        const objetoBD = JSON.parse(contenido)
        console.log(objetoBD)
        arrayNuevo = contenido
        return arrayNuevo})
}




// Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
// Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
// Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
// Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

const express = require("express")

const app = express()

const PORT = 8080

const server = app.listen(PORT, ()=>{console.log("servidor escuchando en el puerto "+ server.address().port)})

server.on("error", error => console.log("Error en servidor"+error))

getAll()

app.get("/productos",(req,res)=>{
    res.send(`<h1>Productos</h1><br><p> ${arrayNuevo}</p>`)
})

app.get("/productoRandom",(req,res)=>{
    const objetoProductos = JSON.parse(arrayNuevo)
    let aleatorio = Math.floor(Math.random() * (objetoProductos.length));
    res.send(`<h1>Producto aleatorio</h1><br><p> ${JSON.stringify(objetoProductos[aleatorio])}</p>`)
})

