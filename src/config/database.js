const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bdvesp',
  port: '3307'
});

connection.connect(function(err) {
    if (err) 
      console.log('Erro na CONEXÃO com o BD BDMAT')
    else
      console.log('CONEXÃO com BD BDMAT realizada com SUCESSO!');
});

module.exports = connection;

