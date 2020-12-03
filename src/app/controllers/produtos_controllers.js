// chamando a classe ClientesDAO
const Produtos_dao = require('../BD/produtos_dao');

// instância do BD configurado
var db = require('../../config/database');

class ProdutosControllers {

    //LISTA OS PRODUTOS PARA A PAGINA PRINCIPAL
    listaProdutos() {
        return function (req, res) {
            const produtoDAO = new Produtos_dao(db);
            produtoDAO.selectNaTabelaProduto(function (erro, resultados) {
                res.marko(
                    require('../views/pagInicial.marko'),
                    { produtos: resultados });
            });
        }
    }
}

module.exports = ProdutosControllers; 