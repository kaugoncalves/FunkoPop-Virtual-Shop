class Produtos_dao {
    // construtor da classe
    constructor(db) { this._db = db; }

    //FAZ SELECT PARA EBIXIR OS PRODUTOS NA PAGINA PRINCIPAL
    selectNaTabelaProduto(callback) {
        var sqlConsProdutos = 'SELECT idProduto, imgProduto, nomeProduto, precoProduto, descricao FROM PRODUTO';
        console.log(sqlConsProdutos);
        this._db.query(sqlConsProdutos, (erro, resultados) =>
            callback(erro, resultados))
    }
}  // end da classe

module.exports = Produtos_dao;