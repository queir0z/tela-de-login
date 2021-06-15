const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.set("view engine", "html")

nunjucks.configure("pages", {
    express: server
})

server.get("/", function(requisição, resposta) {
    return resposta.render("index")
})

server.listen(3000, function() {
    console.log("O servidor está pronto!")
})