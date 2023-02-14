---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Aprende los fundamentos de Flow Playground
titlePt: Aprenda os fundamentos do Flow Playground
colors: colors-d
excerptFr: >-
  Como implantar um contrato e como interagir com contratos implantados usando
  transações e scripts.
featuredImage:
  type: ImageBlock
  url: /images/23/01/CAPAS-Aprenda os fundamentos do Flow Playground.png
  altText: Aprenda os fundamentos do Flow Playground
  caption: Aprenda os fundamentos do Flow Playground
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/CAPAS-Aprenda os fundamentos do Flow Playground.png
  altText: Aprenda os fundamentos do Flow Playground
  caption: Aprenda os fundamentos do Flow Playground
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: "O Flow Playground é um editor e emulador construído diretamente no navegador. Com o playground, os desenvolvedores podem começar a aprender a escrever contratos inteligentes Cadence e interagir com uma blockchain local Flow emulada usando scripts e transações.\n\nNão é preciso saber Cadence para seguir o tutorial. O playground tem modelos pré-carregados que usaremos.\n\nO objetivo desse tutorial é ajudá-lo a se familiarizar com o Flow Playground e como ele funciona \U0001F3C6\n\n\U0001F5E3️ FYI: o Google Chrome é o navegador recomendado de acordo com a documentação do Flow.\n\nContas\nO Flow Playground começa com cinco contas padrão. Cada conta tem um endereço diferente começando com 0x01. As contas estão localizadas na barra lateral esquerda.\n\nImplantando um contrato\nPara implantar um contrato, você precisa primeiro selecionar uma conta. As contas estão localizadas na esquerda e são rotuladas pelo endereço, por exemplo, 0x01, 0x02.\n\nSelecione a conta 0x01. Esta é a conta que usaremos para implantar nosso contrato.\n\nÀ direita das contas, está a seção de contrato. Você verá um contrato pré-carregado chamado HelloWorld.cdc. O playground é pré-carregado com um modelo de contrato, então não é necessário criar o nosso próprio contrato.\n\nHá muitos comentários, mas por uma boa razão, pois os comentários explicam exatamente o que está acontecendo com o código. Dois pontos importantes, a nossa variável de saudação está definida como \"Hello World\" e a função hello() retorna a variável de saudação.\n\nVamos implantar o contrato na blockchain local Flow emulada. Para fazer isso, clique no botão verde Deploy localizado na direita da tela.\n\nDepois de implantar o contrato, o console imprimirá Deployed Contract To: 0x01 para indicar que o contrato foi implantado com sucesso.\n\nSe você vir esta mensagem, bem feito! Você implantou com sucesso um contrato na conta 0x01!\n\nTransações\nAs transações são uma maneira de interagir com a blockchain Flow. As transações são usadas para fazer mudanças na blockchain e custam dinheiro para serem executadas.\n\nNa parte esquerda da tela, abaixo de Contas, você verá Templates de Transação. Selecione o template de transação chamado \"Transaction\". Uma transação pré-carregada aparecerá.\n\nSem entrar muito em detalhes com o Cadence, essa transação irá registrar a variável de saudação do contrato HelloWorld que nós implantamos na conta 0x01. Lembre-se, a variável de saudação no contrato HelloWorld era \"Hello World\".\n\nVocê verá uma nova caixa aparecer na parte direita da tela: Assinantes de Transação. Você escolherá a conta para assinar a transação. Neste caso, deixaremos como a conta padrão 0x01.\n\nClique no botão verde Enviar.\n\nAo clicar no botão Enviar, os resultados da transação serão exibidos no console:\n\nParabéns! Você acabou de executar uma transação!\n\nScripts\nOs scripts são usados para ler dados (não mudar dados) da blockchain e não há taxas para usar scripts no Flow.\n\nAbaixo de Transações, você verá a seção de Templates de Script.\n\nSelecione o template de script chamado \"Script\" e em seguida exclua todo o código dentro do template.\n\nCopie e cole o seguinte código no \"Script\":\n\nimport HelloWorld from 0x01\n\npub fun main(): String {\nreturn HelloWorld.greeting\n}\nEste script retornará o valor da variável de saudação do contrato HelloWorld, que é \"Hello World\".\n\nNa parte direita da tela, há um botão verde Executar. Clique Executar.\n\nDentro do console, os resultados do script serão exibidos. Este é como o seu console deve ficar:\n\nUau! Nosso script leu do contrato HelloWorld que nós implantamos na conta 0x01 e retornou o \"valor\" da variável de saudação. Bravo!\n\nParabéns\nVocê conseguiu! Você é oficialmente um Pro do Playground \U0001F4AA Você implantou um contrato e interagiu com seu contrato usando um script e uma transação. Agora é hora de você mergulhar mais fundo.\n\nTutoriais do Playground\nO playground também inclui os seguintes tutoriais que você pode completar:\n\n[Hello World](https://developers.flow.com/cadence/tutorial/02-hello-world)\n\n[Mint Fungible Tokens](https://developers.flow.com/cadence/tutorial/06-fungible-tokens)\n\n[Create Non-Fungible Tokens](https://developers.flow.com/cadence/tutorial/05-non-fungible-tokens-1)\n\n[Build a Marketplace](https://developers.flow.com/cadence/tutorial/08-marketplace-compose)\n\n[Expand Non-Fungible Tokens](https://developers.flow.com/cadence/tutorial/10-resources-compose)\n\n[Voting Contract](https://developers.flow.com/cadence/tutorial/09-voting)\n\n\nCada tutorial contém todo o código de exemplo necessário para seguir junto, bem como explicações detalhadas sobre como o código funciona e como ele se relaciona com a blockchain Flow. Ao seguir esses tutoriais, você poderá aprender como criar sua própria aplicação blockchain usando a plataforma Flow.\n"
metaDescription: null
socialImage: null
date: '2023-01-09'
excerptBr: >-
  Como implantar um contrato e como interagir com contratos implantados usando
  transações e scripts.
author: content/data/team/people/diego-fornalha.json
---
