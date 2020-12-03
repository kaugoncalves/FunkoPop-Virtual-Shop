// chamando a classe ClientesDAO
const Carrinho_dao = require('../BD/carrinho_dao');

// instância do BD configurado
var db = require('../../config/database');

const carrinhoDAO = new Carrinho_dao(db);

class carrinhoController {


    //INSERE O PRODUTO ESCOLHIDO NA TABELA DE COMPRAS PARA IR PRO CARRINHO
    insereProdutoComprado() {
        return function (req, res) {
            console.log("PRODUTO INSERIDO: " + req.params.idProduto)
            const carrinhoDAO = new Carrinho_dao(db);
            carrinhoDAO.incluiProduto(req.params.idProduto)
                .then(res.redirect('/pagInicial'))
                .catch(erro => console.log(erro));
        }
    }

    //EXCLUI O ITEM SELECIONADO DO CARRINHO
    excluiProdutoCarrinho() {
        return function (req, res) {

            console.log("ID ITEM COMPRADO A SER EXCLUIDO: " + req.params.idItemComprado)
            carrinhoDAO.excluiProduto(req.params.idItemComprado)
                .then(res.redirect('/carrinho'))
                .catch(erro => console.log(erro));
        }
    }

    //MONTA O SELECT DOS PRODUTOS SELECIONADOS PARA O CARRINHO
    montaSelectSelecionados() {
        return function (req, res) {
            const carrinhoDAO = new Carrinho_dao(db);
            carrinhoDAO.selectCompras((function (erro, resultados) {
                console.log(resultados);
                var total = 0;

                for (var i = 0; i < resultados.length; i++) {

                    console.log(resultados[i].Valor_Total)
                    total += resultados[i].precoProduto
                    console.log(total)
                }
                console.log(total)
                res.marko(
                    require('../views/carrinho.marko'),
                    {
                        produtos: resultados,
                        vtotal: total
                    });

            }))

        }

    }

    excluiparaSair() {
        return function (req, res) {

            carrinhoDAO.excluiTudo()
                .then(res.marko(
                    require('../views/login.marko')))

                .catch(erro => console.log(erro)
                )
        }
    }

    finalizaCompra() {
        return function (req, res) {
            const carrinhoDAO = new Carrinho_dao(db);
            carrinhoDAO.selectCompras((function (erro, resultados) {
                console.log(resultados);

                var total = 0;
                for (var i = 0; i < resultados.length; i++) {
                    console.log(resultados[i].Valor_Total)
                    total += resultados[i].precoProduto
                    console.log(total)
                }
                if (resultados.length < 1) {

                    console.log("NAO HA PRODUTOS PARA FINALIZAR A COMPRA")
                    res.redirect("/carrinho")
                }
                else {
                    res.marko(
                        require('../views/finalizado.marko'),
                        {
                            produtos: resultados,
                            vtotal: total
                        })
                }




            }))

        }
       


    }







}


module.exports = carrinhoController; 