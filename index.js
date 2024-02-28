const express = require('express')
//importando rotas
const rotas = require("./rotas/rotas") 

//porta a sua escolha
const porta = process.env.PORT || 3000

const app = express()

//permitindo que a app use a rota importada
app.use('/', rotas)

//rota generica para o caso de nao encontrar nenhuma rota
app.get('*', (req, res)=>{
    res.send('CBF Cursos')
})

app.listen(porta, ()=>{console.log('rodando')})