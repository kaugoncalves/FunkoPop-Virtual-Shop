// Compiled using marko@4.23.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodemat$1.0.0/src/app/views/pagInicial.marko",
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

  out.w("<html><head><title>Cabeçudinho Store</title><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css></head><style>\r\nbody{\r\n  background-color: rgb(41, 41, 41); \r\n  font-family: Georgia, serif \r\n\r\n}\r\n\r\n.efeito{\r\n\r\nborder: none;\r\npadding: 20px;\r\nmargin: 10px;\r\nfont-size: 20px;\r\nborder-radius: 10px;\r\nposition: relative;\r\nbox-sizing: border-box;\r\ncursor: pointer;\r\ntransition: all 200ms ease;\r\n\r\n}\r\n.animate-carrinho{\r\n  color: white;\r\n  background: none;\r\n  transform-style: preserve-3d;\r\n  \r\n}\r\n.animate-carrinho::after{\r\n  top: -100%;\r\n  left: 0px;\r\n  width:100%;\r\n  padding: 20px;\r\n  position: absolute;\r\n  background: greenyellow;\r\n  color: black;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  box-sizing: border-box;\r\n  content:'🛒Carrinho';\r\n  transform-origin: left bottom;\r\n  transform: rotateX(90deg);\r\n}\r\n.animate-carrinho:hover{\r\n  transform-origin: center bottom;\r\n  transform: rotateX(-90deg) translateY(100%);\r\n}\r\n\r\n.animate-sair{\r\n  color: white;\r\n  background: none;\r\n  transform-style: preserve-3d;\r\n  \r\n}\r\n.animate-sair::after{\r\n  top: -100%;\r\n  left: 0px;\r\n  width:100%;\r\n  padding: 20px;\r\n  position: absolute;\r\n  background: red;\r\n  color: black;\r\n \r\n  border-radius: 10px;\r\n  box-sizing: border-box;\r\n  content:'📴Deslogar';\r\n  transform-origin: left bottom;\r\n  transform: rotateX(90deg);\r\n}\r\n.animate-sair:hover{\r\n  transform-origin: center bottom;\r\n  transform: rotateX(-90deg) translateY(100%);\r\n}\r\n\r\n\r\n.animate-adicionar{\r\nbackground: none;\r\ncolor: rgb(37, 37, 37);\r\nwidth: 150px;\r\nheight: 25px;\r\nborder: none;\r\ncolor: black;\r\nborder-radius: 4px;\r\ntransition: ease-out 0.3s;\r\nfont-size: 12px;\r\noutline: none;\r\nborder: 3px solid  rgb(72, 72, 202);;\r\nposition: relative;\r\nz-index: 1;\r\n}\r\n.animate-adicionar:hover{\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.animate-adicionar::before{\r\n  transition: 0.5s all ease;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  right: 50%;\r\n  bottom: 0;\r\n  opacity: 0;\r\n  content: \"\";\r\n  background-color: rgb(72, 72, 202);;\r\n}\r\n.animate-adicionar:hover:before{\r\n  transition: 0.5s all ease;\r\n  left: 0;\r\n  right: 0;\r\n  opacity: 1;\r\n  z-index: -1;\r\n}\r\n\r\n.border-card {\r\n  border: solid 5px transparent;\r\n  transition: border-width 0.6s linear;\r\n  \r\n}\r\n\r\n.border-card:hover { border-width: 10px;\r\n}\r\n\r\n.animate-card { \r\n  border: 5px solid blueviolet;\r\n  animation: mymove 1s infinite;\r\n}\r\n\r\n@keyframes mymove {\r\n  50% {border-color: blueviolet;}\r\n}\r\n\r\n.animate-font {  \r\n  width: 300px;\r\n  color: black;\r\n  animation: mymove2 2s infinite;\r\n}\r\n\r\n@keyframes mymove2 {\r\n  50% {color: blue;}\r\n}\r\n\r\n\r\n  </style><body><nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-dark\" style=\"height: 70px;  position: sticky; margin-top: 0px; width: 100%;\"><a class=border-card style=\"font-size: 20px; color:white\" href=/pagInicial> <img src=https://st2.depositphotos.com/1340907/6714/v/950/depositphotos_67149235-stock-illustration-pixel-sad-face-icon.jpg height=35 loading=lazy> Cabeçudinho Store </a><div class=\"navbar-nav ml-auto\"><ul class=navbar-nav><li class=\"nav-item ml-auto\"><a class=\"nav-link \" href=/carrinho> <button class=\"efeito animate-carrinho\"> 🛒Carrinho</button> </a></li> <li class=\"nav-item \"><a class=\"nav-link my-2 my-sm-0\" href=/sair><button class=\"efeito animate-sair\"> 📴Deslogar </button> </a></li> </ul></div></nav> <div class=\"container mx-auto\"> <div class=mx-auto style=\"width:600; height:500;\"><h1 style=\"color:white; font:Roboto\"> Produtos que chegarão em <a class=animate-font> breve! </a></h1> <br><br><br><div id=carouselExampleIndicators class=\"carousel slide\" data-ride=carousel><ol class=carousel-indicators><li data-target=#carouselExampleIndicators data-slide-to=0 class=active></li><li data-target=#carouselExampleIndicators data-slide-to=1></li><li data-target=#carouselExampleIndicators data-slide-to=2></li><li data-target=#carouselExampleIndicators data-slide-to=3></li><li data-target=#carouselExampleIndicators data-slide-to=4></li></ol><div class=carousel-inner><div class=\"carousel-item active\"><img class=\"d-block w-100\" src=https://leagueofgeeks.com.br/2271/funkopop-backstreetboys-kevinrichardson140.jpg width=700 height=500 alt=\"First slide\"></div><div class=carousel-item><img class=\"d-block w-100\" src=https://30591.cdn.simplo7.net/static/30591/sku/colecionaveis-harry-potter-Funko-Pop-Harry-Potter-Buckbeak-104-HOT-TOPIC-EXCLUSIVE-Pre-venda-Copia-1-copia-1-1584420505208.png alt=\"Second slide\" width=700 height=500></div><div class=carousel-item><img class=\"d-block w-100\" src=https://www.jing.fm/clipimg/full/86-868460_c-3po-pop-vinyl-bobble-head-figure-funko.png width=700 height=500 alt=\"Third slide\"></div><div class=carousel-item> <img class=\"d-block w-100\" src=https://d26lpennugtm8s.cloudfront.net/stores/001/035/054/products/46691-aerosmith-joe-perry-funko-pop-vinyl-figure-popcultcha_1-1588202432_1500x1-ad82ba8b2035c6831d15927543550456-640-0.png width=700 height=500 alt=\"Third slide\"></div><div class=carousel-item> <img class=\"d-block w-100\" href=/pagInicial src=https://d26lpennugtm8s.cloudfront.net/stores/001/035/054/products/41140-james-brown-funko-pop-vinyl-figure-popcultcha_1-1587997318_1600x1-357453e5bb45ba9e5015927519600213-640-0.png width=700 height=500 alt=\"Third slide\"></div></div><a class=carousel-control-prev href=#carouselExampleIndicators role=button data-slide=prev><span class=carousel-control-prev-icon style=\"background-color: black;\" aria-hidden=true></span><span class=sr-only>Previous</span></a><a class=carousel-control-next href=#carouselExampleIndicators role=button data-slide=next><span class=carousel-control-next-icon style=\"background-color: black;\" aria-hidden=true></span><span class=sr-only>Next</span></a></div></div></div><div class=\"container mx-auto \"> <div class=mx-auto style=\"width: 800px; height: 400px;\"><br><br><br> <br><br><br><h1 style=color:white;> Produtos em <a class=animate-font> estoque! </a> </h1><br>");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(produto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"card d-inline-block animate-card\" style=\"width: 25rem; margin:5px; border-color: rgb(72, 72, 202); border-radius:10px\"><img class=card-img-center" +
      marko_attr("src", produto.imgProduto) +
      " style=\"width:200px; height:200px; \" alt=\"Card image cap\"><div class=card-body><h5 class=card-title style=\"color:black; font-size:20px\">" +
      marko_escapeXml(produto.nomeProduto) +
      " </h5><p class=card-text>" +
      marko_escapeXml(produto.descricao) +
      "<b> <br> R$ " +
      marko_escapeXml(produto.precoProduto) +
      " </b> </p><a" +
      marko_attr("href", "/adicionarAoCarrinho/" + (produto.idProduto == null ? "" : produto.idProduto)) +
      "> <button class=animate-adicionar> Adicionar ao carrinho </button> </a></div></div> ");
  });

  out.w(" </div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "69");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnodemat$1.0.0/src/app/views/pagInicial.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
