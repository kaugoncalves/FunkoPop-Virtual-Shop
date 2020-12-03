// chamando a classe ClientesDAO
const Usuarios_dao = require('../BD/usuarios_dao');

// instância do BD configurado
var db = require('../../config/database');

const usuarioDAO = new Usuarios_dao(db);

class UsuariosControllers {

    //VALIDA PARA VER SE EXISTE O USUARIO NO BD
    validaAcessoUsuario() {
        return function (req, res) {          
            usuarioDAO.selectNaTabelaUsuarios(req.body.login, req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        console.log('USUÁRIO EXISTE!! Está VALIDADO!!');
                        res.redirect('/pagInicial');
                    }
                })
                .catch(erro => {
                    console.log("deu ero")
                    res.marko(
                        require('../views/login.marko'),
                        { erro: erro });
                })
        }
    }
    
    //CADASTRA UM NOVO USUARIO E APENAS VALIDA SE É NULO
    cadastrarUsuario() {
        return function (req, res) {
            // instanciando a classe usuario_dao
            console.log(req.body.nome + '');       
            console.log(req.body.nome + "" + req.body.dataNascimento + "" + req.body.email + "" + req.body.username + "" + req.body.senha)
            if (req.body.nome && req.body.email && req.body.dataNascimento
                && req.body.username && req.body.senha) {

                usuarioDAO.incluiUsuarios(
                    req.body.nome,
                    req.body.dataNascimento,
                    req.body.email,
                    req.body.username,
                    req.body.senha
                )
                    .then(dados => {
                        console.log('USUÁRIO CADASTRADO COM SUCESSO');
                        res.redirect('/sair');

                    })
                    .catch(erro => {
                        console.log("NAO FOI POSSIVEL CADASTRAR NOVO USUARIO")
                        res.marko(
                            require('../views/login.marko'),
                            { erro: erro });
                    })
            }
            else {
                console.log("ALGUM DADO NULO")
                res.redirect('/inclusaoUsuarios')
            }

        }
    }
}

module.exports = UsuariosControllers;