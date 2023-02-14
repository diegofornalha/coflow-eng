---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
titlePt: A revolução da programação de contratos inteligentes
colors: colors-d
excerptFr: >-
  Como projetar uma estrutura de dados escalável e segura para atender às
  necessidades do negócio
featuredImage:
  type: ImageBlock
  url: /images/23/01/CAPAS-a revolução da programação de contratos inteligentes.png
  altText: A revolução da programação de contratos inteligentes
  caption: A revolução da programação de contratos inteligentes
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/CAPAS-a revolução da programação de contratos inteligentes.png
  altText: A revolução da programação de contratos inteligentes
  caption: A revolução da programação de contratos inteligentes
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
  Por meio do uso de recursos, o idioma de programação do Flow, o Cadence, traz
  novas ideias emocionantes para o mundo dos contratos inteligentes baseados em
  registros.


  Sim, é claro que temos o NBA Top Shot. Mas, para ser sincero, há toneladas de
  outros motivos pelos quais este projeto parece promissor: a filosofia amigável
  ao usuário e ao desenvolvedor, a abordagem inovadora de escalabilidade ou
  simplesmente a ótima equipe por trás do projeto, que já deu ao mundo
  criptográfico inovações maravilhosas, como Cryptokitties (e com ela o padrão
  ERC721).


  Mas, na minha opinião, a verdadeira inovação está no núcleo da tecnologia, seu
  idioma de contrato inteligente Cadence. Por isso, estou dedicando uma série de
  artigos para explorar o idioma em profundidade, começando com uma visão geral
  dos princípios básicos.


  Spoiler: Não é tudo sobre NFTs

  Antes de entrar nos detalhes, vamos esclarecer algo. Quando falamos sobre
  Flow, as pessoas tendem a associá-lo intuitivamente com tokens não fungíveis -
  não é de admirar, dado o sucesso espetacular do NBA Top Shot. Mas você está
  perdendo a melhor parte se parar por aí.


  Um dos aspectos mais disruptivos do Cadence é na verdade a implementação de
  tokens fungíveis. E essa implementação de tokens fungíveis acaba sendo uma
  ótima ilustração de um dos principais paradigmas disruptivos do Cadence: a
  orientação a recursos.


  Para compreender este conceito, vamos olhar para algo familiar e trabalhar
  gradualmente em direção às novas ideias que o Cadence traz para a mesa.


  Solidity e a abordagem centrada no registro

  Vamos começar com uma implementação de um token fungível no Ethereum, uma
  implementação muito ingênua na verdade. Ele destaca as características do que
  eu chamo de abordagem centrada no registro ou a filosofia do mapeamento
  central.

  Temos um único contrato inteligente com duas funções: uma função de criação
  que nos permite imprimir dinheiro do nada e uma função de envio, que abre a
  possibilidade de enviar dinheiro para alguém. Mas a entidade mais importante
  deste contrato é a estrutura de dados que será utilizada para armazenar
  informações. Ela deve ser projetada de maneira eficiente e escalável, para
  garantir que o sistema possa lidar com grandes volumes de dados e ser
  facilmente atualizado à medida que a necessidade do negócio mude. Além disso,
  é importante considerar a segurança dos dados, garantindo que as informações
  só possam ser acessadas por usuários autorizados.



metaDescription: null
socialImage: null
date: '2023-01-05'
author: content/data/team/people/diego-fornalha.json
excerptBr: >-
  Como projetar uma estrutura de dados escalável e segura para atender às
  necessidades do negócio
title: La revolución de la programación de contratos inteligentes
excerpt: >-
  Cómo diseñar una estructura de datos escalable y segura para satisfacer las
  necesidades del negocio
---

A través del uso de recursos, el lenguaje de programación de Flow, Cadence, trae nuevas e interesantes ideas al mundo de los contratos inteligentes basados en registros.
Sí, por supuesto que tenemos NBA Top Shot. Pero, para ser honesto, hay muchas otras razones por las cuales este proyecto parece prometedor: la filosofía amigable con el usuario y el desarrollador, el enfoque innovador de escalabilidad o simplemente el gran equipo detrás del proyecto, que ya ha dado al mundo criptográfico innovaciones maravillosas como Cryptokitties (y con ella, el estándar ERC721).
Pero, en mi opinión, la verdadera innovación está en el núcleo de la tecnología, su lenguaje de contrato inteligente Cadence. Por eso, estoy dedicando una serie de artículos para explorar el lenguaje en profundidad, comenzando con una visión general de los principios básicos.
Spoiler: No todo se trata de NFTs
Antes de entrar en detalles, aclaremos algo. Cuando hablamos de Flow, la gente tiende a asociarlo intuitivamente con tokens no fungibles - no es de extrañar, dado el éxito espectacular de NBA Top Shot. Pero te perderás lo mejor si te quedas solo con eso.
Uno de los aspectos más disruptivos de Cadence es, de hecho, la implementación de tokens fungibles. Y esta implementación de tokens fungibles resulta ser una gran ilustración de uno de los principales paradigmas disruptivos de Cadence: la orientación a recursos.
Para comprender este concepto, veamos algo familiar y trabajemos gradualmente hacia las nuevas ideas que Cadence trae a la mesa.
Solidity y el enfoque centrado en el registro
Comencemos con una implementación de un token fungible en Ethereum, una implementación muy ingenua de hecho. Destaca las características de lo que yo llamo enfoque centrado en el registro o la filosofía del mapeo central.
Tenemos un solo contrato inteligente con dos funciones: una función de creación que nos permite imprimir dinero de la nada y una función de envío, que abre la posibilidad de enviar dinero a alguien. Pero la entidad más importante de este contrato es la estructura de datos que se utilizará para almacenar información. Debe diseñarse de manera eficiente y escalable, para garantizar que el sistema pueda manejar grandes volúmenes de datos y ser fácilmente actualizado a medida que cambien las necesidades del negocio. Además, es importante considerar la seguridad de los datos, garantizando que la información solo pueda ser accedida por usuarios autorizados.
