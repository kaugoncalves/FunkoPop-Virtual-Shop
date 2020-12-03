// chamando a classe usuarios_controler
const UsuarioControlador = require('../controllers/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

// chamando a classe clientes_controler
const ProdutoControlador = require('../controllers/produtos_controllers');
const produtosCont = new ProdutoControlador();

const CarrinhoControlador = require('../controllers/carrinho_controllers');
const carrinhoCont = new CarrinhoControlador();

module.exports = (aplicacao) => {

    // Evitar problema com o CORS
    aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });


    /****************  ROTAS  ****************/
    aplicacao.get('/sair', carrinhoCont.excluiparaSair())

    aplicacao.get('/', function (red, res) { res.redirect("/sair") })

    aplicacao.get('/inclusaoUsuarios', function (red, res) { res.marko(require('../views/inclusaoUsuarios.marko')) })

    aplicacao.get('/pagInicial', produtosCont.listaProdutos());

    aplicacao.post('/cadastrarusuario', usuarioCont.cadastrarUsuario());

    aplicacao.get('/adicionarAoCarrinho/:idProduto', carrinhoCont.insereProdutoComprado());

    aplicacao.post('/validaBDUsuarios', usuarioCont.validaAcessoUsuario());

    aplicacao.get('/carrinho', carrinhoCont.montaSelectSelecionados())

    aplicacao.get('/excluiProduto/:idItemComprado', carrinhoCont.excluiProdutoCarrinho())

    aplicacao.get('/finalizarCompra', carrinhoCont.finalizaCompra())




}


