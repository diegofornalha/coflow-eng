---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: A revolução da programação de contratos inteligentes
titlePt: A revolução da programação de contratos inteligentes
colors: colors-d
excerpt: >-
  Como projetar uma estrutura de dados escalável e segura para atender às
  necessidades do negócio
excerptFr: >-
  Como projetar uma estrutura de dados escalável e segura para atender às
  necessidades do negócio
featuredImage:
  type: ImageBlock
  url: /images/CAPAS-a revolução da programação de contratos inteligentes.png
  altText: A revolução da programação de contratos inteligentes
  caption: A revolução da programação de contratos inteligentes
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/CAPAS-a revolução da programação de contratos inteligentes.png
  altText: A revolução da programação de contratos inteligentes
  caption: A revolução da programação de contratos inteligentes
  width: 800
  height: 450
bottomSections: []
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
date: '2023-01-02'
---
Por meio do uso de recursos, o idioma de programação do Flow, o Cadence, traz novas ideias emocionantes para o mundo dos contratos inteligentes baseados em registros.

Sim, é claro que temos o NBA Top Shot. Mas, para ser sincero, há toneladas de outros motivos pelos quais este projeto parece promissor: a filosofia amigável ao usuário e ao desenvolvedor, a abordagem inovadora de escalabilidade ou simplesmente a ótima equipe por trás do projeto, que já deu ao mundo criptográfico inovações maravilhosas, como Cryptokitties (e com ela o padrão ERC721).

Mas, na minha opinião, a verdadeira inovação está no núcleo da tecnologia, seu idioma de contrato inteligente Cadence. Por isso, estou dedicando uma série de artigos para explorar o idioma em profundidade, começando com uma visão geral dos princípios básicos.

Spoiler: Não é tudo sobre NFTs
Antes de entrar nos detalhes, vamos esclarecer algo. Quando falamos sobre Flow, as pessoas tendem a associá-lo intuitivamente com tokens não fungíveis - não é de admirar, dado o sucesso espetacular do NBA Top Shot. Mas você está perdendo a melhor parte se parar por aí.

Um dos aspectos mais disruptivos do Cadence é na verdade a implementação de tokens fungíveis. E essa implementação de tokens fungíveis acaba sendo uma ótima ilustração de um dos principais paradigmas disruptivos do Cadence: a orientação a recursos.

Para compreender este conceito, vamos olhar para algo familiar e trabalhar gradualmente em direção às novas ideias que o Cadence traz para a mesa.

Solidity e a abordagem centrada no registro
Vamos começar com uma implementação de um token fungível no Ethereum, uma implementação muito ingênua na verdade. Ele destaca as características do que eu chamo de abordagem centrada no registro ou a filosofia do mapeamento central.
Temos um único contrato inteligente com duas funções: uma função de criação que nos permite imprimir dinheiro do nada e uma função de envio, que abre a possibilidade de enviar dinheiro para alguém. Mas a entidade mais importante deste contrato é a estrutura de dados que será utilizada para armazenar informações. Ela deve ser projetada de maneira eficiente e escalável, para garantir que o sistema possa lidar com grandes volumes de dados e ser facilmente atualizado à medida que a necessidade do negócio mude. Além disso, é importante considerar a segurança dos dados, garantindo que as informações só possam ser acessadas por usuários autorizados.





