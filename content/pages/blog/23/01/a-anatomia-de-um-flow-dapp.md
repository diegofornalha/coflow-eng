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
  O diagrama abaixo descreve os componentes de um dapp típico construído na
  blockchain Flow. Embora muitos dapps sejam estruturados de maneira diferente,
  essa arquitetura apresenta conceitos fundamentais que serão discutidos ao
  longo deste guia.


  **Cliente Dapp**

  O cliente dapp é a interface através da qual os usuários interagem com seu
  dapp. Aplicativos da Web e móveis são exemplos comuns de clientes dapp.


  **Contrato Inteligente**

  Um contrato inteligente é uma coleção de código, implantado em um local
  permanente na blockchain, que define a lógica central de um dapp.


  **Conta de usuário**

  Uma conta de usuário é um registro na blockchain que armazena os ativos
  digitais pertencentes a um único usuário.


  **Transação**

  Uma transação é um pedaço de código submetido ao blockchain que altera o
  estado de uma ou mais contas de usuário e contratos inteligentes. Todas as
  transações são originadas de pelo menos uma conta de usuário. Na maioria dos
  casos, uma transação passa dados entre uma conta de usuário e um contrato
  inteligente.


  **consulta de estado**

  Uma consulta de estado é uma solicitação feita ao blockchain que retorna
  informações sobre o estado dos contratos inteligentes do seu dapp.


  **Carteira do usuário**

  Uma carteira de usuário é um software ou hardware que controla o acesso à
  conta de um usuário na blockchain. O aplicativo cliente normalmente se conecta
  à carteira do usuário para enviar transações para a blockchain. Em muitos
  casos, o dapp transmite fisicamente a transação para o blockchain em nome do
  usuário. No entanto, é importante observar que a carteira tem a palavra final
  sobre o que é assinado ou não e, portanto, tem controle sobre todas as
  transações que interagem com a conta do usuário.


  **Biblioteca de cliente Flow(FCL)**

  A Flow Client Library é uma estrutura que fornece uma interface padrão para
  conectar aplicativos clientes e carteiras de usuários.
title: La anatomía de un Flow Dapp
excerpt: Componentes fundamentales de un dapp en la blockchain Flow.
---

El diagrama abajo describe los componentes de un dapp típico construido en la blockchain Flow. Aunque muchos dapps están estructurados de manera diferente, esta arquitectura presenta conceptos fundamentales que serán discutidos a lo largo de esta guía.
Cliente Dapp
El cliente dapp es la interfaz a través de la cual los usuarios interactúan con su dapp. Aplicaciones web y móviles son ejemplos comunes de clientes dapp.
Contrato Inteligente
Un contrato inteligente es una colección de código, implantado en un lugar permanente en la blockchain, que define la lógica central de un dapp.
Cuenta de usuario
Una cuenta de usuario es un registro en la blockchain que almacena los activos digitales pertenecientes a un único usuario.
Transacción
Una transacción es un fragmento de código sometido a la blockchain que altera el estado de una o más cuentas de usuario y contratos inteligentes. Todas las transacciones se originan de al menos una cuenta de usuario. En la mayoría de los casos, una transacción pasa datos entre una cuenta de usuario y un contrato inteligente.
Consulta de estado
Una consulta de estado es una solicitud hecha a la blockchain que devuelve información sobre el estado de los contratos inteligentes de su dapp.
Billetera del usuario
Una billetera de usuario es un software o hardware que controla el acceso a la cuenta de un usuario en la blockchain. La aplicación cliente normalmente se conecta a la billetera del usuario para enviar transacciones a la blockchain. En muchos casos, el dapp transmite físicamente la transacción a la blockchain en nombre del usuario. Sin embargo, es importante observar que la billetera tiene la palabra final sobre lo que se firma o no y, por lo tanto, tiene control sobre todas las transacciones que interactúan con la cuenta del usuario.
Biblioteca de cliente Flow(FCL)
La Flow Client Library es un marco que proporciona una interfaz estándar para conectar aplicaciones clientes y billeteras de usuarios.

