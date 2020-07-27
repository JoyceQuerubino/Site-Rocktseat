const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Adicionando CSS
server.use(express.static('public'))

// Adicionando html
server.set("view engine" , "njk")

nunjucks.configure("views" , {
    express:server
})

//Criando porta
server.listen(5000, function() {
    console.log("server is running")
})

// Rota da página principal - home
server.get("/", function (req , res){
    return res.render("about")
})

// Rota da página cursos 
server.get("/cursos", function (req , res){
    return res.render("cursos")
})

// Rota da página classes
server.get("/classes", function (req , res){
    return res.render("classes")
})

// Página de erro, APOS TODAS AS ROTAS
server.use(function(req, res) {
    res.status(404).render("not-found");
  });