const Dtbase = require("./Banco/DBanco");
const Cadastrotb = require("./Banco/Cadastrotb");
const express = require("express");
const app = express();
const path = require("path");
const Porta = 3001;
const xmlparser = require('express-xml-bodyparser');
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());
app.use(xmlparser());



// Arquivos estáticos
app.use(express.static(path.join(__dirname, "Publica")));

Dtbase.sync()
    .then(() => {
        app.listen(Porta, () => { console.log(`Servidor funcionando na porta: ${Porta}`); });

        app.get("/", (req, res) => {
            res.send("SERVIDOR RODANDO!")
        });
        
    })
    .catch(e => console.log(`Alerta! ${e}`));

// Rota POST para lidar com JSON e XML
app.post("/Cadastrotb", (req, res) => {
    const contentType = req.headers['content-type'];
    let data;

    if (contentType === 'application/json') {
        data = req.body;
    } else if (contentType === 'application/xml') {
        data = req.body;
    }

    Cadastrotb.create(data)
        .then((Cadastro) => res.status(201).json(Cadastro))
        .catch((error) => res.status(400).json({ error: error.message }));
});