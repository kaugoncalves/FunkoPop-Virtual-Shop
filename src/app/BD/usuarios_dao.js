class Usuarios_dao {
    // construtor da classe
    constructor(db) {
        this._db = db;
    }

    //VALIDA PARA PODER LOGAR
    selectNaTabelaUsuarios(login, senha) {
        return new Promise((resolve, reject) => {
            var sqlConsUsuarios = "SELECT * FROM USUARIOS WHERE loginUsua='" + login + "' and senhaUsua='" + senha + "'";
            console.log("SELECT MONTADO = " + sqlConsUsuarios);
            this._db.query(sqlConsUsuarios, function (erro, resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                }
                else {
                    return reject('USUÁRIO NÃO EXISTE NO BD');
                }
            })
        })
    }

    //INCLUI NOVO USUARIO NO SISTEMA
    incluiUsuarios(nome, dataNascimento, email, username, senha) {
        return new Promise((resolve, reject) => {

            var sqlInsUsuario = "INSERT INTO usuarios (nome, dataNascimento, email, loginUsua, senhaUsua) VALUES('" + nome + "','" + dataNascimento + "','" + email + "','" + username + "','" + senha + "')";
            console.log(nome + '')
            console.log("INSERT MONTADO = " + sqlInsUsuario);
            this._db.query(sqlInsUsuario, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TAB CLIENTES NO BD');
                }
                else { return resolve(); }

            })
        })
    }





}

module.exports = Usuarios_dao;