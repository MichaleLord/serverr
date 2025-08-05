const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'saber.html'))
} )

app.get('/inscricao', (req, res) => {
    res.sendFile(path.join(__dirname, 'inscrição.html'))
} )

app.get('/valores', (req, res) => {
    res.sendFile(path.join(__dirname, 'valores.html'))
} )

app.get('/taxas', (req, res) => {
    res.sendFile(path.join(__dirname, 'taxas.html'))
} )

app.get('/equipe', (req, res) => {
    res.sendFile(path.join(__dirname, 'equipe.html'))
} )

app.get('/ensino', (req, res) => {
    res.sendFile(path.join(__dirname, 'ensino.html'))
} )

app.get('/primario', (req, res) => {
    res.sendFile(path.join(__dirname, 'primario.html'))
} )

app.get('/secundario', (req, res) => {
    res.sendFile(path.join(__dirname, 'secundário.html'))
} )

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacto.html'))
} )

app.get('/uniforme', (req, res) => {
    res.sendFile(path.join(__dirname, 'uniforme.html'))
} )

app.get('/material', (req, res) => {
    res.sendFile(path.join(__dirname, 'material.html'))
} )

app.get('/actividades', (req, res) => {
    res.sendFile(path.join(__dirname, 'actividades.html'))
} )

app.listen(3000, '192.168.1.203', () => {
    console.log('Server is running on http://192.168.1.203:3000');

})
