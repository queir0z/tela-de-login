const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.use(express.static('public'))
server.use(express.static('pages'))

server.set("view engine", "html")

nunjucks.configure("pages", {
    express: server
})

server.get("/", function(requisição, resposta) {
    return resposta.render("index")
})

server.get("/login", function(requisição, resposta) {
    return resposta.send("Pagina de login")
})

server.listen(3000, function() {
    console.log("O servidor está pronto!")
})