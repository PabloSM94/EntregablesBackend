const express = require('express')
const fs = require('fs')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const PORT = 8080

app.use(express.static("../public"))

let productos = [];
let mensajes = [];

const server = httpServer.listen(PORT, ()=>{console.log("servidor escuchando en el puerto "+ server.address().port)})

server.on("error", error => console.log("Error en servidor"+error))


io.on('connection', (socket)=>{

    console.log(`Se conecto el usuario: ${socket.id}`)
    function cargarMensajes(){
        fs.promises.readFile("../public/mensajes.txt", "utf-8")
        .then (data => {
            const carga = JSON.parse(data)
            console.log(carga)
            mensajes = carga
            socket.emit("mensajes",mensajes)
        })
        
    }
    cargarMensajes()
    //setTimeout(()=>socket.emit("mensajes",mensajes),1000)

    socket.emit("productos", productos)
    

    socket.on("nuevoProducto",producto =>{
        productos.push(producto)
        io.sockets.emit("productos", productos)
    })

    socket.on("nuevoMensaje",msg =>{
        msg.fecha = new Date().toLocaleString()
        mensajes.push(msg)
        io.sockets.emit("mensajes", mensajes)
        mensajesJSON = JSON.stringify(mensajes)
        fs.promises.writeFile("../public/mensajes.txt",mensajesJSON, "utf-8")
    })
})


