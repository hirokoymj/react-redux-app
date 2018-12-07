const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../../', 'dist');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
