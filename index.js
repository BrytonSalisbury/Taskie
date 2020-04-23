const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 8080;

app.use(morgan('dev'));
app.use(express.static('public'));


app.listen(port, () => {
  console.debug('App listening on port: ' + port);
});

