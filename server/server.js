const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {setup} = require('./database/database')

module.exports = app

// start listening at port
const PORT = process.env.PORT || 4001;
setup().then(
  app.listen(PORT)
);

// mount apirouter
const apiRouter = require('./api');
app.use('/api', apiRouter)