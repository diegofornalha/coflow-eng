---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
titlePt: Entendendo como os opcionais funcionam
colors: colors-d
excerptFr: Como evitar e corrigir erros de referências vazias em seu código
featuredImage:
  type: ImageBlock
  url: /images/23/01/CAPAS-Entendendo como os opcionais funcionam.png
  altText: Como evitar e corrigir erros de referências vazias em seu código
  caption: Como evitar e corrigir erros de referências vazias em seu código
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/CAPAS-Entendendo como os opcionais funcionam.png
  altText: Como evitar e corrigir erros de referências vazias em seu código
  caption: Como evitar e corrigir erros de referências vazias em seu código
  width: 800
  height: 450
bottomSections:
  - type: CtaSection
    colors: colors-e
    elementId: ''
    backgroundSize: full
    title: CoFlow
    titlePt: CoFlow
    text: >
      Nuestra empresa comparte la misma visión que Dapper Labs, que es crear
      experiencias líderes en la industria web3 y desarrollar dapps en la cadena
      de bloques Flow que proporcionen a los usuarios una forma sencilla de
      administrar sus activos y usar la cadena de bloques. Nuestra misión es
      hacer del mundo un lugar más accesible y agradable a través de la adopción
      por los consumidores de tecnologías descentralizadas.
    textPt: >
      Nossa empresa compartilha a mesma visão do Dapper Labs, que é criar
      experiências web3 líderes do setor e desenvolver dapps na blockchain da
      Flow que possibilita aos usuários uma maneira simples de gerenciar seus
      ativos e usar o blockchain. Nossa missão é tornar o mundo um lugar mais
      acessível e agradável por meio da adoção pelo consumidor de tecnologias
      descentralizadas.
    actions:
      - label: Servidor no Discord
        altText: Entrar no Discord
        url: 'https://discord.com/invite/hT8EpC5mUN'
        showIcon: true
        icon: arrowRight
        style: primary
        type: Button
    backgroundImage: null
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
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
date: '2023-01-25'
author: content/data/team/people/diego-fornalha.json
excerptBr: Como evitar e corrigir erros de referências vazias em seu código
title: Comprendiendo cómo funcionan los opcionales
excerpt: Cómo evitar y corregir errores de referencias vacías en su código
---



¡Hoy, hablaré sobre un aspecto de Cadence con el que muchas personas tienen dificultad para familiarizarse: los opcionales!

¡Los opcionales son como el gato de Schrödinger de la programación!

¿O realmente lo son?

Lo siento, es una analogía pésima, ¡pero entenderán de dónde vengo cuando terminen de leer!

Pero, ¿qué son los opcionales?
Los opcionales en Cadence son una forma segura y poderosa de usar variables en lenguajes de programación. ¡Sin embargo, pueden ser difíciles de acostumbrarse!

Los opcionales indican "hay un valor, y es x" o "no hay valor alguno". Entonces, el valor se ha definido o, lo que es más importante, no se ha definido. Los opcionales se inicializan como nil (que técnicamente es un valor) cuando no tienen un valor específico de su tipo.

Cualquier tipo puede ser un opcional. Declaras un tipo opcional usando un ? después de la declaración de la variable, así:

// Declarando un Optional String
var nombre: String?

Al asignar un valor a un opcional, puedes hacerlo como si el tipo no fuera opcional:

nombre = "Josh"

Pero también puedes asignar el valor nil al opcional.

nombre = nil

Pero, ¿por qué querría decir que algo es nil?
Los opcionales permiten que el software maneje casos de error y situaciones similares de una manera más elegante.

El objetivo principal es hacer explícito el estado de una variable como no disponible/vacío/nada, y aún más, hacer explícito cuando algo nunca puede ser no disponible/vacío/nada. En lenguajes que permiten que cualquier variable sea nula, no siempre está claro si la variable puede ser nula en la ubicación específica del código, lo que lleva a dos problemas:

O bien, el caso nulo no es manejado por el programador, y luego hay un valor nulo, lo que causa una referencia nula o "null reference" en el código. Esto ocurre cuando se utiliza una variable sin haberla inicializado o asignado un valor válido. Esto puede causar errores y problemas en el funcionamiento del programa.



