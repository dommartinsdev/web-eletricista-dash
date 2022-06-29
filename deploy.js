const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/dist/web-eletricista-dash`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/web-eletricista-dash/`));
});

app.listen(process.env.PORT || 8080);