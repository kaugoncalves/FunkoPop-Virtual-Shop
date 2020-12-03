require('marko/node-require').install();
require('marko/express');

const express    = require('express');

const aplicacao  = express();

const bodyParser = require('body-parser');

aplicacao.use(bodyParser.urlencoded({
  extended: true
}));
 //const path = require=('path');

aplicacao.use('/static',express.static('src/app/views'));
//aplicacao.set('views', path.join(__dirname,'../app/views'));
aplicacao.set('view engine', 'marko');
 
const rotas = require('../app/rotas/rotas');
rotas(aplicacao);




module.exports = aplicacao;





