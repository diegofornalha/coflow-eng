---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Melhorias nos padrões de FTs e NFTs
titlePt: Melhorias nos padrões de FTs e NFTs
colors: colors-d
excerpt: Novidades sensacionais para desenvolvedores de Flow!
excerptFr: Novidades sensacionais para desenvolvedores de Flow!
featuredImage:
  type: ImageBlock
  url: /images/CAPAS-Melhorias nos padrões de FTs e NFTs.png
  altText: Melhorias nos padrões de FTs e NFTs
  caption: Melhorias nos padrões de FTs e NFTs
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/CAPAS-Melhorias nos padrões de FTs e NFTs.png
  altText: Melhorias nos padrões de FTs e NFTs
  caption: Melhorias nos padrões de FTs e NFTs
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: >
  Caso essa seja a primeira vez que você está lendo um dos meus posts, eu sou
  engenheiro de contratos inteligentes na equipe central do Flow Blockchain. O
  último ano foi louco e ainda temos muito mais em estoque para todos! Aqui
  estão algumas das coisas que minha equipe fez nos últimos meses e outras que
  ainda estamos trabalhando:


  *   Ativação de Epochs na Testnet e Mainnet: Epochs são períodos de uma semana
  onde a tabela de identidade de nós é estabelecida e os nós se preparam para a
  próxima epoch enquanto a rede é executada. A lógica central desse protocolo é
  gerenciada por contratos inteligentes e esses contratos foram implantados e
  ativados na testnet e mainnet! Agora, quase tudo o que é relacionado a Epochs
  no Flow é automatizado! Isso, juntamente com a conquista de que a comunidade
  controla mais nós de consenso do que a equipe Dapper Labs, são marcos
  importantes na descentralização do Flow.



  *   Padrão de Metadados NFT: Isso é algo de que todos nós estamos muito
  orgulhosos. Três membros da comunidade que não possuem afiliação formal com a
  equipe central do Flow enviaram uma proposta para um padrão genérico que
  permite que NFTs retornem metadados importantes sobre si mesmos através de uma
  interface padrão. Eu acho que a proposta é algo com que todos os
  desenvolvedores Cadence estão familiarizados, porque realmente ilustra o que
  podemos alcançar como comunidade open-source e é simplesmente uma proposta
  muito bem projetada e escrita. O padrão foi implantado na testnet e mainnet e
  projetos já estão usando-o para se interagir de maneira mais fácil! Também
  definimos algumas das estruturas padrão, conhecidas como views, que são usadas
  para retornar conjuntos de dados específicos. Ainda há mais a adicionar, e
  qualquer pessoa pode enviar uma proposta para uma view padrão! Dê uma olhada
  no NFT README também!

    Enfim, esses são apenas alguns dos projetos incríveis que estamos trabalhando, e esperamos que você esteja animado para ver o que mais está por vir. E agora, vamos falar sobre o assunto principal deste post: as grandes mudanças propostas para os padrões de token fungíveis e não fungíveis do Flow.

  Como desenvolvedores de contratos inteligentes na equipe principal do Flow
  Blockchain, aprendemos muito desde que criamos os padrões originais há três
  anos. E agora, estamos chegando ao final da janela onde será possível fazer
  uma atualização, pois com o alcance da meta "Stable Cadence", provavelmente
  antes do final de 2022, não haverão mais mudanças quebradas no Cadence!
  Acreditamos que, embora a atualização possa ser um pouco desafiadora para os
  desenvolvedores no momento, os benefícios de usar um padrão mais eficiente e
  poderoso valerão a pena no longo prazo. Nós esperamos que o Flow e o Cadence
  estejam sempre presentes, então agora é o momento mais importante para nos
  prepararmos e prepararmos os desenvolvedores futuros para o sucesso.



  No forum post que fizemos, apresentamos uma proposta para atualizar os padrões
  para suas formas finais. Você pode encontrar mais detalhes no próprio post,
  onde descrevemos os problemas dos padrões atuais, as mudanças propostas e o
  código de exemplo do que acreditamos que as novas versões dos padrões devem
  parecer. Se recebermos um bom feedback da comunidade, avançaremos com uma
  proposta de melhoria do Flow e começaremos a escrever o código para as versões
  finais dos padrões.
metaDescription: null
socialImage: null
date: '2023-01-16'
---
Caso essa seja a primeira vez que você está lendo um dos meus posts, eu sou engenheiro de contratos inteligentes na equipe central do Flow Blockchain. O último ano foi louco e ainda temos muito mais em estoque para todos! Aqui estão algumas das coisas que minha equipe fez nos últimos meses e outras que ainda estamos trabalhando:

*   Ativação de Epochs na Testnet e Mainnet: Epochs são períodos de uma semana onde a tabela de identidade de nós é estabelecida e os nós se preparam para a próxima epoch enquanto a rede é executada. A lógica central desse protocolo é gerenciada por contratos inteligentes e esses contratos foram implantados e ativados na testnet e mainnet! Agora, quase tudo o que é relacionado a Epochs no Flow é automatizado! Isso, juntamente com a conquista de que a comunidade controla mais nós de consenso do que a equipe Dapper Labs, são marcos importantes na descentralização do Flow.

*   Padrão de Metadados NFT: Isso é algo de que todos nós estamos muito orgulhosos. Três membros da comunidade que não possuem afiliação formal com a equipe central do Flow enviaram uma proposta para um padrão genérico que permite que NFTs retornem metadados importantes sobre si mesmos através de uma interface padrão. Eu acho que a proposta é algo com que todos os desenvolvedores Cadence estão familiarizados, porque realmente ilustra o que podemos alcançar como comunidade open-source e é simplesmente uma proposta muito bem projetada e escrita. O padrão foi implantado na testnet e mainnet e projetos já estão usando-o para se interagir de maneira mais fácil! Também definimos algumas das estruturas padrão, conhecidas como views, que são usadas para retornar conjuntos de dados específicos. Ainda há mais a adicionar, e qualquer pessoa pode enviar uma proposta para uma view padrão! Dê uma olhada no NFT README também!

Enfim, esses são apenas alguns dos projetos incríveis que estamos trabalhando, e esperamos que você esteja animado para ver o que mais está por vir. E agora, vamos falar sobre o assunto principal deste post: as grandes mudanças propostas para os padrões de token fungíveis e não fungíveis do Flow.

Como desenvolvedores de contratos inteligentes na equipe principal do Flow Blockchain, aprendemos muito desde que criamos os padrões originais há três anos. E agora, estamos chegando ao final da janela onde será possível fazer uma atualização, pois com o alcance da meta "Stable Cadence", provavelmente antes do final de 2022, não haverão mais mudanças quebradas no Cadence! Acreditamos que, embora a atualização possa ser um pouco desafiadora para os desenvolvedores no momento, os benefícios de usar um padrão mais eficiente e poderoso valerão a pena no longo prazo. Nós esperamos que o Flow e o Cadence estejam sempre presentes, então agora é o momento mais importante para nos prepararmos e prepararmos os desenvolvedores futuros para o sucesso.

No forum post que fizemos, apresentamos uma proposta para atualizar os padrões para suas formas finais. Você pode encontrar mais detalhes no próprio post, onde descrevemos os problemas dos padrões atuais, as mudanças propostas e o código de exemplo do que acreditamos que as novas versões dos padrões devem parecer. Se recebermos um bom feedback da comunidade, avançaremos com uma proposta de melhoria do Flow e começaremos a escrever o código para as versões finais dos padrões.
