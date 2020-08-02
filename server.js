
// Importando arquivos para o servidor
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const videos = require("./data")

// Adicionando CSS
server.use(express.static('public'))

// Adicionando html
server.set("view engine" , "njk")

nunjucks.configure("views" , {
    express:server,
    autoescape: false,
    noCache:true
})

//Criando porta
server.listen(5000, function() {
    console.log("server is running")
})

// Rota da página principal - home
server.get("/", function (req , res){   
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg", 
        name: "RocketSeat",
        role: "Ensinando alunos a Codar!", 
        description: "Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores.",
        links: [
            {name: "GitHub", url: "https://github.com/Rocketseat"}, 
            {name: "Linkedin", url: "https://linkedin.com/school/rocketseat/?originalSubdomain=br"},
            {name: "Facebook", url: "https://pt-br.facebook.com/rocketseat/"}
        ]
    }
    return res.render("about", {about})
})

//Rota da página vídeos
server.get("/video", function (req , res){
    const id = req.query.id;

    res.send(id)
})



// Rota da página cursos 
server.get("/cursos", function (req , res){
    return res.render("cursos",)
})

// Rota da página classes - aulas
server.get("/classes", function (req , res){
    return res.render("classes", {items: videos})
})

// Página de erro, APOS TODAS AS ROTAS
server.use(function(req, res) {
    res.status(404).render("not-found");
  });