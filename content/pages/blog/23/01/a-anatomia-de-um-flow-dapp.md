---
layout: PostLayout
metaTitle: A anatomia de um Flow Dapp
addTitleSuffix: true
metaTags: []
colors: colors-d
featuredImage:
  type: ImageBlock
  url: /images/23/01/A anatomia de um Flow Dapp.png
  altText: A anatomia de um Flow Dapp
  caption: ''
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/A anatomia de um Flow Dapp.png
  altText: A anatomia de um Flow Dapp
  width: 800
  height: 450
  caption: A anatomia de um Flow Dapp
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
metaDescription: null
socialImage: /images/23/01/a anatomia da uma dapp diego fornalha.png
date: '2023-01-04'
titlePt: A anatomia de um Flow Dapp
author: content/data/team/people/diego-fornalha.json
excerptBr: Componentes fundamentais de um dapp na blockchain Flow.
markdown_content_pt: >
  El diagrama siguiente describe los componentes de un dapp típico construido en
  la blockchain Flow. Aunque muchos dapps están estructurados de manera
  diferente, esta arquitectura presenta conceptos fundamentales que se
  discutirán a lo largo de esta guía.


  ## Cliente Dapp


  El cliente dapp es la interfaz a través de la cual los usuarios interactúan
  con su dapp. Las aplicaciones web y móviles son ejemplos comunes de clientes
  dapp.


  ## Contrato Inteligente


  Un contrato inteligente es una colección de código, implantado en un lugar
  permanente en la blockchain, que define la lógica central de un dapp.


  ## Cuenta de Usuario


  Una cuenta de usuario es un registro en la blockchain que almacena los activos
  digitales pertenecientes a un solo usuario.


  ## Transacción


  Una transacción es un fragmento de código presentado a la blockchain que
  altera el estado de una o más cuentas de usuario y contratos inteligentes.
  Todas las transacciones son originadas por al menos una cuenta de usuario. En
  la mayoría de los casos, una transacción pasa datos entre una cuenta de
  usuario y un contrato inteligente.


  ## Consulta de Estado


  Una consulta de estado es una solicitud hecha a la blockchain que devuelve
  información sobre el estado de los contratos inteligentes de su dapp.


  ## Cartera de Usuario


  Una cartera de usuario es un software o hardware que controla el acceso a la
  cuenta de un usuario en la blockchain. El aplicativo cliente normalmente se
  conecta a la cartera del usuario para enviar transacciones a la blockchain. En
  muchos casos, el dapp transmite físicamente la transacción a la blockchain en
  nombre del usuario. Sin embargo, es importante observar que la cartera tiene
  la última palabra sobre lo que es firmado o no y, por lo tanto, tiene control
  sobre todas las transacciones que interactúan con la cuenta del usuario.


  ## Biblioteca de Cliente Flow (FCL)


  La Flow Client Library es un framework que proporciona una interfaz estándar
  para conectar aplicativos clientes y carteras de usuarios.
title: La anatomía de un Flow Dapp
excerpt: Componentes fundamentales de un dapp en la blockchain Flow.
---
El diagrama siguiente describe los componentes de un dapp típico construido en la blockchain Flow. Aunque muchos dapps están estructurados de manera diferente, esta arquitectura presenta conceptos fundamentales que se discutirán a lo largo de esta guía.

## Cliente Dapp

El cliente dapp es la interfaz a través de la cual los usuarios interactúan con su dapp. Las aplicaciones web y móviles son ejemplos comunes de clientes dapp.

## Contrato Inteligente

Un contrato inteligente es una colección de código, implantado en un lugar permanente en la blockchain, que define la lógica central de un dapp.

## Cuenta de Usuario

Una cuenta de usuario es un registro en la blockchain que almacena los activos digitales pertenecientes a un solo usuario.

## Transacción

Una transacción es un fragmento de código presentado a la blockchain que altera el estado de una o más cuentas de usuario y contratos inteligentes. Todas las transacciones son originadas por al menos una cuenta de usuario. En la mayoría de los casos, una transacción pasa datos entre una cuenta de usuario y un contrato inteligente.

## Consulta de Estado

Una consulta de estado es una solicitud hecha a la blockchain que devuelve información sobre el estado de los contratos inteligentes de su dapp.

## Cartera de Usuario

Una cartera de usuario es un software o hardware que controla el acceso a la cuenta de un usuario en la blockchain. El aplicativo cliente normalmente se conecta a la cartera del usuario para enviar transacciones a la blockchain. En muchos casos, el dapp transmite físicamente la transacción a la blockchain en nombre del usuario. Sin embargo, es importante observar que la cartera tiene la última palabra sobre lo que es firmado o no y, por lo tanto, tiene control sobre todas las transacciones que interactúan con la cuenta del usuario.

## Biblioteca de Cliente Flow (FCL)

La Flow Client Library es un framework que proporciona una interfaz estándar para conectar aplicativos clientes y carteras de usuarios.
