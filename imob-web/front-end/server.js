const express = require('express');
const path = require('path');

const name = process.env.NAME_APP || 'front-end';
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/dist/${name}`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${name}/index.html`));
});

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta ${port}!`);
});
