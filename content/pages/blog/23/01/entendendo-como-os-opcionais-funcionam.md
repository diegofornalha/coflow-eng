---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Entendendo como os opcionais funcionam
titlePt: Entendendo como os opcionais funcionam
colors: colors-d
excerpt: Como evitar e corrigir erros de referências vazias em seu código
excerptFr: Como evitar e corrigir erros de referências vazias em seu código
featuredImage:
  type: ImageBlock
  url: /images/CAPAS-Entendendo como os opcionais funcionam.png
  altText: Como evitar e corrigir erros de referências vazias em seu código
  caption: Como evitar e corrigir erros de referências vazias em seu código
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/CAPAS-Entendendo como os opcionais funcionam.png
  altText: Como evitar e corrigir erros de referências vazias em seu código
  caption: Como evitar e corrigir erros de referências vazias em seu código
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: >+
  Hoje, vou falar sobre um aspecto do Cadence com o qual muitas pessoas têm
  dificuldade de se familiarizar: os Optionais!


  Os Optionais são como o gato de Schrödinger da programação.


  Ou são mesmo?


  Desculpem, péssima analogia, mas vocês entenderão de onde venho quando
  terminarem de ler.


  Mas afinal, o que são Optionais?

  Os Optionais no Cadence são uma forma segura e poderosa de se usar variáveis
  em linguagens de programação. Eles podem ser difíceis de se acostumar, no
  entanto!


  Os Optionais dizem ou "há um valor, e ele é x" ou "não há valor algum". Então,
  o valor foi definido ou, mais importante, não foi definido. Os Optionais são
  inicializados como nil (que técnicamente é um valor) quando eles não possuem
  um valor específico do seu tipo.


  Qualquer tipo pode ser um Optional. Você declara um tipo Optional usando um ?
  após a declaração da variável, assim:


  // Declarando um Optional String

  var nome: String?

  Ao atribuir um valor a um Optional, você pode atribuir como se o tipo não
  fosse Optional:


  nome = "Josh"

  mas também pode atribuir o valor nil ao Optional.


  nome = nil

  Mas por que eu iria querer dizer que algo é nil?

  Os Optionais permitem que o software possa lidar com casos de erro e situações
  semelhantes de forma mais elegante.


  O objetivo principal é tornar o estado de uma variável de
  indisponível/vazio/nada explícito e, ainda mais, tornar explícito quando algo
  nunca poderá ser indisponível/vazio/nada. Em linguagens que permitem que
  qualquer variável seja nula, nem sempre é claro se a variável pode ser nula na
  localização específica do código, o que leva a dois problemas:


  Ou o caso nulo não é tratado pelo programador, e então há um valor nulo,
  causando uma referência nula, ou "null reference", no código. Isso ocorre
  quando uma variável é utilizada sem ter sido inicializada ou atribuída um
  valor válido. Isso pode causar erros e problemas no funcionamento do programa.



metaDescription: null
socialImage: null
date: '2023-01-11'
---
Hoje, vou falar sobre um aspecto do Cadence com o qual muitas pessoas têm dificuldade de se familiarizar: os Optionais!

Os Optionais são como o gato de Schrödinger da programação.

Ou são mesmo?

Desculpem, péssima analogia, mas vocês entenderão de onde venho quando terminarem de ler.

Mas afinal, o que são Optionais?
Os Optionais no Cadence são uma forma segura e poderosa de se usar variáveis em linguagens de programação. Eles podem ser difíceis de se acostumar, no entanto!

Os Optionais dizem ou "há um valor, e ele é x" ou "não há valor algum". Então, o valor foi definido ou, mais importante, não foi definido. Os Optionais são inicializados como nil (que técnicamente é um valor) quando eles não possuem um valor específico do seu tipo.

Qualquer tipo pode ser um Optional. Você declara um tipo Optional usando um ? após a declaração da variável, assim:

// Declarando um Optional String
var nome: String?
Ao atribuir um valor a um Optional, você pode atribuir como se o tipo não fosse Optional:

nome = "Josh"
mas também pode atribuir o valor nil ao Optional.

nome = nil
Mas por que eu iria querer dizer que algo é nil?
Os Optionais permitem que o software possa lidar com casos de erro e situações semelhantes de forma mais elegante.

O objetivo principal é tornar o estado de uma variável de indisponível/vazio/nada explícito e, ainda mais, tornar explícito quando algo nunca poderá ser indisponível/vazio/nada. Em linguagens que permitem que qualquer variável seja nula, nem sempre é claro se a variável pode ser nula na localização específica do código, o que leva a dois problemas:

Ou o caso nulo não é tratado pelo programador, e então há um valor nulo, causando uma referência nula, ou "null reference", no código. Isso ocorre quando uma variável é utilizada sem ter sido inicializada ou atribuída um valor válido. Isso pode causar erros e problemas no funcionamento do programa.





