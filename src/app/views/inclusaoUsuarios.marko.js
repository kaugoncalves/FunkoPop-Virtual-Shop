// Compiled using marko@4.23.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodemat$1.0.0/src/app/views/inclusaoUsuarios.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista dos Clientes com Node.js</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css></head><body style=\"background-color: rgb(41, 41, 41);; font-family: 'Exo', sans-serif; \"><nav class=\"navbar navbar-light bg-dark\"><a class=navbar-brand href=/sair><p class=\"text-white bg-dark\"><img src=https://st2.depositphotos.com/1340907/6714/v/950/depositphotos_67149235-stock-illustration-pixel-sad-face-icon.jpg width=30 height=30 class=\"d-inline-block align-left\" alt loading=lazy> Cabeçudinho Store</p> </a></nav><div class=\"container mx-auto \"><div class=\"container m-5 pb-5 w-50 mx-auto rounded\"><form action=/cadastrarUsuario method=post class=\"m-1 pb-1 pt-4\"><div class=\"input-group flex-nowrap \"><div class=\"input-group-prepend \"><span class=\"input-group-text \" id=addon-wrapping>🙍‍♂️🙍‍♀️Nome completo</span></div><input type=text class=form-control for=nome placeholder=\"Ex: Matheus Francisco\" id=nome name=nome aria-label=Username aria-describedby=\"addon-wrapping \"></div><br><div class=\"input-group flex-nowrap\"><div class=input-group-prepend><span class=input-group-text id=addon-wrapping>🗓️Data de nascimento</span></div><input type=date class=form-control for=data id=data name=dataNascimento aria-describedby=addon-wrapping></div><br><div class=\"input-group flex-nowrap\"><div class=input-group-prepend><span class=input-group-text id=addon-wrapping>📧Email</span></div><input type=text class=form-control placeholder=\"Ex: xxxxxxxx@gmail.com\" for=email id=email name=email aria-describedby=addon-wrapping></div><br><div class=\"input-group flex-nowrap\"><div class=input-group-prepend><span class=input-group-text id=addon-wrapping>🧾CPF (login)</span></div><input type=text class=form-control for=cpf placeholder=\"ex: XXXXXXXXXXX\" id=username name=username aria-label=Username aria-describedby=addon-wrapping></div><br><div class=\"input-group flex-nowrap\"><div class=input-group-prepend><span class=input-group-text id=addon-wrapping>🔑Senha</span></div><input type=password class=form-control for=senha placeholder=Password id=senha name=senha aria-describedby=addon-wrapping></div><br><button type=submit class=\"btn btn-primary btn-lg btn-block\">Enviar</button> </form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnodemat$1.0.0/src/app/views/inclusaoUsuarios.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
