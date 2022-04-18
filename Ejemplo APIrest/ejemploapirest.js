const express = require("express")

const app = express()

//Extension para que Express reconozca los body
app.use(express.urlencoded({extended: true})) //Formularios
app.use(express.json()) //JSON

app.get('/',(req,res)=>{
    const {query} = req
    console.log(query)
    res.json(`recibio peticion get`)
})

app.get('/:id',(req,res)=>{
    const {params} = req
    console.log(params)
    res.json(`recibio peticion get`)
})

// CREAR OBJETO NUEVO
app.post('/',(req,res)=>{
    const {body} = req
    console.log(body)
    res.json(`recibio peticion post`)
})

// ACTUALIZAR OBJETO (por eso necesito el ID a diferencia del post)
app.put('/:id',(req,res)=>{
    const {body, params} = req
    console.log(body)
    console.log(params)   
    res.json(`recibio peticion put`)
})

app.delete('/:id',(req,res)=>{
    const {params} = req
    res.json(`recibio peticion delete para el id: ${params.id}`)
})

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))