---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: >-
  Gerenciamento de recursos e controle de acesso para contratos inteligentes
  seguros
titlePt: >-
  Gerenciamento de recursos e controle de acesso para contratos inteligentes
  seguros
colors: colors-d
date: '2023-01-13'
featuredImage:
  type: ImageBlock
  url: >-
    /images/CAPAS-Gerenciamento de recursos e controle de acesso para contratos
    inteligentes seguros.png
  altText: >-
    Gerenciamento de recursos e controle de acesso para contratos inteligentes
    seguros
  caption: >-
    Gerenciamento de recursos e controle de acesso para contratos inteligentes
    seguros
  width: 800
  height: 450
media:
  type: ImageBlock
  url: >-
    /images/CAPAS-Gerenciamento de recursos e controle de acesso para contratos
    inteligentes seguros.png
  altText: >-
    Gerenciamento de recursos e controle de acesso para contratos inteligentes
    seguros
  caption: >-
    Gerenciamento de recursos e controle de acesso para contratos inteligentes
    seguros
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: >
  Você já ouviu falar do Cadence? É uma linguagem de programação que acelera e
  simplifica o desenvolvimento de contratos inteligentes seguros, introduzindo
  recursos e capacidades avançadas, como composição e aninhamento de recursos.
  Ao mesmo tempo, o Cadence também é responsável por transações e consultas no
  Flow.


  Gerenciando a propriedade

  O Cadence é fácil de aprender, pois tem muitas semelhanças com outras
  linguagens de programação, como Rust, TypeScript e Swift. A grande diferença é
  que o Cadence é tudo sobre recursos.


  Os recursos são fáceis de entender porque são a coisa real - uma arca de
  tokens, um momento NBA Topshot - e porque são armazenados diretamente na conta
  do seu dono. É por isso que o código Cadence é fácil de ler, manter e
  discutir.


  Os tipos de recursos são semelhantes às classes - representam uma coleção de
  dados e funções. No entanto, eles introduzem regras rígidas sobre como um
  desenvolvedor pode lidar com eles:


  *   Os recursos só podem existir em um único lugar exato e em um único momento
  exato


  *   Os recursos não podem ser copiados


  *   Os recursos precisam ser explicitamente destruídos


  Isso impede a duplicação prejudicial e a exclusão acidental de um recurso,
  tornando-os uma boa escolha para aplicativos de blockchain. O operador move,
  um operador especial para transferir recursos, fornece um indicador visual ao
  lidar com recursos.


  Capabilidades para controle de acesso

  As capacidades são semelhantes às permissões: elas controlam as ações que um
  usuário pode realizar em um determinado recurso. Se você quiser chamar um
  método de recurso, precisa ter uma capacidade válida.


  As capacidades são a porta de entrada para os recursos. Como uma API REST, as
  capacidades têm um caminho. Se esse caminho estiver no domínio público de uma
  conta, a capacidade pode ser obtida por qualquer pessoa; as capacidades no
  domínio privado só são acessíveis pelo dono da conta.


  Independentemente de estar no domínio público ou privado, as capacidades
  sempre se relacionam com um alvo. Esse alvo pode ser um recurso inteiro ou
  apenas um subconjunto de seus métodos. Para o último caso, as interfaces podem
  atuar como alvo para a capacidade. É assim que as capacidades permitem um
  controle de acesso fino e legível para humanos.




  Para interagir com um recurso, você precisa obter a capacidade específica
  antes de emprestar seu recurso subjacente. Isso pode ser feito dentro das
  transações.


  account.getCapability<...>(/public/MyCapability).borrow()


  Interagir com transações e scripts

  As transações permitem que você altere os dados na cadeia. No Flow, as
  transações são escritas em Cadence. Elas geralmente consistem em duas etapas:
  Prepare e execute.


  transaction {

  prepare (acct: AuthAccount) {

  ...

  }

  execute {

  ...

  }

  }


  Para cada assinante da transação, a conta AuthAccount correspondente é passada
  para a fase de preparação da transação, fornecendo acesso completo à
  armazenagem, bem como aos domínios privado e público da conta de assinatura.


  Se você só quiser consultar dados na cadeia sem alterá-los, poderá executar um
  script. Em Cadence, os scripts consistem em uma função pública main que é
  executada na execução:


  pub fun main () {

  log("Hello world!")

  }


  [Leituras
  adicionais](https://developers.flow.com/cadence/tutorial/01-first-steps)

  Se você quiser começar a construir rapidamente com Cadence, verifique a série
  oficial de tutoriais, na qual você codificará todo um mercado com integrações
  para tokens fungíveis e não fungíveis.


  [Cadence tutorial series](https://developers.flow.com/cadence/language)

  Quando você estiver procurando uma documentação mais abrangente e aprofundada
  do idioma, verifique a documentação completa do Cadence:


  Cadence language reference

  A qualquer momento em que você quiser experimentar o Cadence sem ter que
  configurar um ambiente de desenvolvimento local, dê uma olhada no Cadence
  Playground:


  [Cadence playground](https://play.flow.com/local-project)
metaDescription: null
socialImage: null
---
Você já ouviu falar do Cadence? É uma linguagem de programação que acelera e simplifica o desenvolvimento de contratos inteligentes seguros, introduzindo recursos e capacidades avançadas, como composição e aninhamento de recursos. Ao mesmo tempo, o Cadence também é responsável por transações e consultas no Flow.

Gerenciando a propriedade
O Cadence é fácil de aprender, pois tem muitas semelhanças com outras linguagens de programação, como Rust, TypeScript e Swift. A grande diferença é que o Cadence é tudo sobre recursos.

Os recursos são fáceis de entender porque são a coisa real - uma arca de tokens, um momento NBA Topshot - e porque são armazenados diretamente na conta do seu dono. É por isso que o código Cadence é fácil de ler, manter e discutir.

Os tipos de recursos são semelhantes às classes - representam uma coleção de dados e funções. No entanto, eles introduzem regras rígidas sobre como um desenvolvedor pode lidar com eles:

*   Os recursos só podem existir em um único lugar exato e em um único momento exato

*   Os recursos não podem ser copiados

*   Os recursos precisam ser explicitamente destruídos

Isso impede a duplicação prejudicial e a exclusão acidental de um recurso, tornando-os uma boa escolha para aplicativos de blockchain. O operador move, um operador especial para transferir recursos, fornece um indicador visual ao lidar com recursos.

Capabilidades para controle de acesso
As capacidades são semelhantes às permissões: elas controlam as ações que um usuário pode realizar em um determinado recurso. Se você quiser chamar um método de recurso, precisa ter uma capacidade válida.

As capacidades são a porta de entrada para os recursos. Como uma API REST, as capacidades têm um caminho. Se esse caminho estiver no domínio público de uma conta, a capacidade pode ser obtida por qualquer pessoa; as capacidades no domínio privado só são acessíveis pelo dono da conta.

Independentemente de estar no domínio público ou privado, as capacidades sempre se relacionam com um alvo. Esse alvo pode ser um recurso inteiro ou apenas um subconjunto de seus métodos. Para o último caso, as interfaces podem atuar como alvo para a capacidade. É assim que as capacidades permitem um controle de acesso fino e legível para humanos.



Para interagir com um recurso, você precisa obter a capacidade específica antes de emprestar seu recurso subjacente. Isso pode ser feito dentro das transações.

account.getCapability<...>(/public/MyCapability).borrow()

Interagir com transações e scripts
As transações permitem que você altere os dados na cadeia. No Flow, as transações são escritas em Cadence. Elas geralmente consistem em duas etapas: Prepare e execute.

transaction {
prepare (acct: AuthAccount) {
...
}
execute {
...
}
}

Para cada assinante da transação, a conta AuthAccount correspondente é passada para a fase de preparação da transação, fornecendo acesso completo à armazenagem, bem como aos domínios privado e público da conta de assinatura.

Se você só quiser consultar dados na cadeia sem alterá-los, poderá executar um script. Em Cadence, os scripts consistem em uma função pública main que é executada na execução:

pub fun main () {
log("Hello world!")
}

[Leituras adicionais](https://developers.flow.com/cadence/tutorial/01-first-steps)
Se você quiser começar a construir rapidamente com Cadence, verifique a série oficial de tutoriais, na qual você codificará todo um mercado com integrações para tokens fungíveis e não fungíveis.

[Cadence tutorial series](https://developers.flow.com/cadence/language)
Quando você estiver procurando uma documentação mais abrangente e aprofundada do idioma, verifique a documentação completa do Cadence:

Cadence language reference
A qualquer momento em que você quiser experimentar o Cadence sem ter que configurar um ambiente de desenvolvimento local, dê uma olhada no Cadence Playground:

[Cadence playground](https://play.flow.com/local-project)
