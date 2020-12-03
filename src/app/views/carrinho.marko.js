// Compiled using marko@4.23.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodemat$1.0.0/src/app/views/carrinho.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Cabeçudinho Store</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css></head><style>\r\n  body{\r\n    background-color: rgb(41, 41, 41); \r\n    font-family: Georgia, serif;\r\n    color: white;\r\n  \r\n  }\r\n  \r\n  .efeito{\r\n  \r\n  border: none;\r\n  padding: 20px;\r\n  margin: 10px;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n  transition: all 200ms ease;\r\n  \r\n  }\r\n  .animate-carrinho{\r\n    color: white;\r\n    background: none;\r\n    transform-style: preserve-3d;\r\n    \r\n  }\r\n  .animate-carrinho::after{\r\n    top: -100%;\r\n    left: 0px;\r\n    width:100%;\r\n    padding: 20px;\r\n    position: absolute;\r\n    background: greenyellow;\r\n    color: black;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    content:'🛒Carrinho';\r\n    transform-origin: left bottom;\r\n    transform: rotateX(90deg);\r\n  }\r\n  .animate-carrinho:hover{\r\n    transform-origin: center bottom;\r\n    transform: rotateX(-90deg) translateY(100%);\r\n  }\r\n  \r\n  .animate-sair{\r\n    color: white;\r\n    background: none;\r\n    transform-style: preserve-3d;\r\n    \r\n  }\r\n  .animate-sair::after{\r\n    top: -100%;\r\n    left: 0px;\r\n    width:100%;\r\n    padding: 20px;\r\n    position: absolute;\r\n    background: red;\r\n    color: black;\r\n   \r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    content:'📴Deslogar';\r\n    transform-origin: left bottom;\r\n    transform: rotateX(90deg);\r\n  }\r\n  .animate-sair:hover{\r\n    transform-origin: center bottom;\r\n    transform: rotateX(-90deg) translateY(100%);\r\n  }\r\n  \r\n  \r\n  .animate-adicionar{\r\n  background: none;\r\n  color: rgb(37, 37, 37);\r\n  width: 100px;\r\n  height: 30px;\r\n  border: none;\r\n  color: white;\r\n  border-radius: 4px;\r\n  transition: ease-out 0.3s;\r\n  font-size: 12px;\r\n  outline: none;\r\n  border: 3px solid red;\r\n  position: relative;\r\n  z-index: 1;\r\n  }\r\n  .animate-adicionar:hover{\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n  .animate-adicionar::before{\r\n    transition: 0.5s all ease;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    right: 50%;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    content: \"\";\r\n    background-color: red;\r\n  }\r\n  .animate-adicionar:hover:before{\r\n    transition: 0.5s all ease;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 1;\r\n    z-index: -1;\r\n  }\r\n  \r\n  .border-card {\r\n    border: solid 5px transparent;\r\n    transition: border-width 0.6s linear;\r\n    \r\n  }\r\n  \r\n  .border-card:hover { border-width: 10px;\r\n  }\r\n  \r\n  .animate-card { \r\n    border: 9px solid blueviolet;\r\n    animation: mymove 1s infinite;\r\n  }\r\n  \r\n  @keyframes mymove {\r\n    50% {border-color: #6541A5;}\r\n  }\r\n  \r\n  .animate-font {  \r\n    width: 300px;\r\n    color: white;\r\n    animation: mymove2 1s infinite;\r\n  }\r\n  \r\n  @keyframes mymove2 {\r\n    50% {color: rgb(153, 255, 0);}\r\n  }\r\n</style><body><nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-dark\" style=\"height: 70px;  position: sticky; margin-top: 0px; width: 100%;\"><a class=border-card style=\"font-size: 20px; color:white\" href=/pagInicial> <img src=https://st2.depositphotos.com/1340907/6714/v/950/depositphotos_67149235-stock-illustration-pixel-sad-face-icon.jpg height=35 loading=lazy> Cabeçudinho Store </a><div class=\"navbar-nav ml-auto\"><ul class=navbar-nav><li class=\"nav-item ml-auto\"><a class=\"nav-link \" href=/carrinho> <button class=\"efeito animate-carrinho\"> 🛒Carrinho</button> </a></li> <li class=\"nav-item \"><a class=\"nav-link my-2 my-sm-0\" href=/sair><button class=\"efeito animate-sair\"> 📴Deslogar </button> </a></li> </ul></div></nav> <div class=\"container m-5 pb-5 mx-auto \">");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(produto) {
    out.w(" ");

    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=row><div class=col-sm-4><img class=animate-card" +
      marko_attr("src", produto.imgProduto) +
      " style=\"width:70%; margin:10px\"></div><div class=col-sm-8 style=\"background-color:#232931; text-align: right; padding:10px  width:10px\"> <p><h1>" +
      marko_escapeXml(produto.nomeProduto) +
      "</h1> </p><h3><a class=animate-font>R$ " +
      marko_escapeXml(produto.precoProduto) +
      " </a> </h3><h3>" +
      marko_escapeXml(produto.descricao) +
      "</h3> <br><form" +
      marko_attr("action", "/excluiProduto/" + (produto.idItemComprado == null ? "" : produto.idItemComprado)) +
      "><button class=animate-adicionar>✖️Remover </button> </form><br><input type=hidden name=id_pedido" +
      marko_attr("value", produto.idPedido) +
      "><input type=hidden name=valor_produto" +
      marko_attr("value", produto.Valor_Total) +
      "> </div></div> ");
  });

  out.w("<div class=row> <div class=col-sm-4></div> <div class=col-sm-8 style=\"background-color:#6541A5; text-align: right;\"><h3> Valor total: <a class=animate-font> R$ " +
    marko_escapeXml(data.vtotal) +
    " </a> </h3><form class=form-inline action=/finalizarCompra><button class=\"btn btn-success \" type=submit>⭐Finalizar compra⭐</button></form></div> </div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnodemat$1.0.0/src/app/views/carrinho.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
