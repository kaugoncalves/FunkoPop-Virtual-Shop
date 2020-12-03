class Carrinho_dao {
    // construtor da classe
    constructor(db) { this._db = db; }

    //INSERE OS PRODUTOS NA TABELA DE COMPRA(CARRINHO)
    incluiProduto(idProduto) {
        return new Promise((resolve, reject) => {
            var sqlInsproduto = "INSERT INTO COMPRAS (idProduto)" +
                "VALUES('" + idProduto + "')";
            console.log("INSERT MONTADO = " + sqlInsproduto);
            this._db.query(sqlInsproduto, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO AO INCLUIR OS DADOS NA TABELA DE COMPRA');
                }
                else { return resolve(); }
            })
        })
    }

    //EXCLUI O PRODUTO NA ÁREA DO CARRINHO (USANDO ID TA TABELA COMPRAS)
    excluiProduto(idItemComprado) {
        return new Promise((resolve, reject) => {

            var sqlDel = "DELETE FROM COMPRAS where idItemComprado=" + idItemComprado
            this._db.query(sqlDel,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('EXCLUSÃO DA TABELA NAO RALIZADA');
                    }
                    resolve();
                }
            );
        });
    }

    //FAZ O SELECT NA TABELA COMPRAS, PARA EXIBIR NO CARRINHO
    selectCompras(callback) {
        var sqlConsCarrinho = 'select p.*, c.* from produto p inner join compras c on c.idProduto = p.idProduto'
        console.log(sqlConsCarrinho);
        this._db.query(sqlConsCarrinho, (erro, resultados) => {
            console.log(resultados)
            callback(erro, resultados)
        })

    }

    //AINDA NAO ARENDI VARIAVEL DE SESSÃO
    excluiTudo() {
        return new Promise((resolve, reject) => {
            console.log("EXLUINDO REGISTROS DA TABELA COMPRAS")
            var sqlDel = "DELETE FROM COMPRAS"
            this._db.query(sqlDel,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('EXCLUSÃO DA TABELA NAO RALIZADA');
                    }
                    resolve();
                }
            );
        });
    }




}  // end da classe

module.exports = Carrinho_dao;