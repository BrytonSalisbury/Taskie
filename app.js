const express = require('express');
const morgan = require('morgan');
const index = require('./routes/index.js');

const app = express();


const port = 8080;

app.use(morgan('dev'));
app.use('/', index);
app.use(express.static('public'));


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.debug(`App listening on port: ${port}`);
});
