---
layout: PostLayout
metaTitle: Como construir um Dapp para cunhagem de NFT na Flow
addTitleSuffix: true
metaTags: []
colors: colors-d
date: '2023-01-18'
excerpt: >-
  Para configurar uma conta no blockchain Flow, é necessário gerar um par de
  chaves públicas e privadas.
featuredImage:
  type: ImageBlock
  url: >-
    /images/23/01/Como construir um Dapp para cunhagem de NFT na Flow
    diegofornalha.png
  altText: Como construir um Dapp para cunhagem de NFT na Flow
  caption: >-
    Para configurar uma conta no blockchain Flow, é necessário gerar um par de
    chaves públicas e privadas. Isso pode ser feito usando o comando
    "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
    geração de chaves. As chaves públicas e privadas são usadas para assinar
    transações no blockchain Flow e garantir a segurança da conta. Depois de
    gerar as chaves, é preciso criar uma conta no blockchain Flow usando as
    chaves e seguir as instruções fornecidas pela plataforma para configurar a
    conta. Depois de configurar a conta, você poderá implantar seu contrato
    inteligente no blockchain Flow.
  width: 800
  height: 450
media:
  type: ImageBlock
  url: >-
    /images/23/01/Como construir um Dapp para cunhagem de NFT na Flow
    diegofornalha.png
  altText: Como construir um Dapp para cunhagem de NFT na Flow
  caption: >-
    Para configurar uma conta no blockchain Flow, é necessário gerar um par de
    chaves públicas e privadas. Isso pode ser feito usando o comando
    "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
    geração de chaves. As chaves públicas e privadas são usadas para assinar
    transações no blockchain Flow e garantir a segurança da conta. Depois de
    gerar as chaves, é preciso criar uma conta no blockchain Flow usando as
    chaves e seguir as instruções fornecidas pela plataforma para configurar a
    conta. Depois de configurar a conta, você poderá implantar seu contrato
    inteligente no blockchain Flow.
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
metaDescription: >-
  Para configurar uma conta no blockchain Flow, é necessário gerar um par de
  chaves públicas e privadas. Isso pode ser feito usando o comando
  "generateKeys" da biblioteca "flow-js" ou através de outra ferramenta de
  geração de chaves. As chaves públicas e privadas são usadas para assinar
  transações no blockchain Flow e garantir a segurança da conta. Depois de gerar
  as chaves, é preciso criar uma conta no blockchain Flow usando as chaves e
  seguir as instruções fornecidas pela plataforma para configurar a conta.
  Depois de configurar a conta, você poderá implantar seu contrato inteligente
  no blockchain Flow.
socialImage: >-
  /images/23/01/Como construir um Dapp para cunhagem de NFT na Flow
  diegofornalha.png
titlePt: Como construir um Dapp para cunhagem de NFT na Flow
markdown_content_pt: "## Vamos colocar todo o conhecimento dos meus artigos anteriores em prática escrevendo e implantando um contrato inteligente, construindo um front-end e cunhando algumas NFTs\n\nSe você acompanhou a série Flow até agora, já sabe que o\_[O Flow Blockchain se destaca no manuseio de ativos digitais](https://medium.com/better-programming/an-introduction-to-the-flow-blockchain-60ccc7a35598), como NFTs. Foi construído desde o início como uma alternativa melhor ao congestionamento da rede da Ethereum e aos problemas de alta taxa.\nAlém disso, a linguagem de contrato inteligente Cadence é uma\_[programação orientada a recursos de primeira qualidade](https://medium.com/better-programming/smart-contracts-which-is-better-ethereum-or-flow-39f766c72e5d)\_linguagem que torna a criação e o gerenciamento de ativos digitais fáceis e eficientes. Embora a Solidez seja excelente em facilitar o Web3 por meio de contratos inteligentes, há desvantagens. A cadência aprimora as falhas da Solidity, fornecendo a capacidade de atualizar contratos e recursos inteligentes que reduzem o risco de erro humano, entre outras melhorias.\nE, finalmente, a lista de ferramentas e bibliotecas disponíveis para desenvolvedores que desejam começar é extensa. Então, vamos juntar tudo e construir algo sobre o Flow.\nEste artigo é um tutorial sobre a criação de um dapp completo de NFT para o Flow Blockchain.\n\n# **Vamos ao que interessa**\n\nPara o restante deste artigo, passaremos pelo processo de criação de um dapp de cunhagem NFT no blockchain Flow.\nComeçaremos com a configuração e implantação de um contrato inteligente da Cadence. Em seguida, criaremos um front-end para conectar-se ao nosso contrato inteligente e cunhar uma NFT na conta do usuário.\nA funcionalidade que construímos permitirá que os usuários conectem sua conta Flow, criem uma conta se ainda não tiverem uma e depois selecionem uma das três imagens para cunhar em uma NFT. Em seguida, o dapp exibirá as NFTs da nossa coleção que estão na conta do usuário. Será um excelente projeto para destacar a facilidade e eficiência da criação de NFTs no Flow e a eficácia da Biblioteca do Cliente Flow ( FCL ) para interagir com a blockchain.\nPara acompanhar este tutorial, você precisará das seguintes coisas:\n\n*   [NodeJs](https://nodejs.org/en/download/)[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)\n    e\n*   [A interface da linha de comando de fluxo](https://developers.flow.com/tools/flow-cli/install)\n    ( CLI de fluxo )\n*   [Seu IDE favorito](https://code.visualstudio.com/)\n    Com tudo isso instalado, vamos começar!\n\n# **1. Configurar conta de fluxo**\n\nAntes de começarmos a construir, precisaremos configurar uma conta no blockchain Flow para que possamos implantar nosso contrato inteligente. Execute o seguinte comando para gerar um novo par de chaves público e privado:\n\n```\nfluxo gerando chaves\n```\n\nCertifique-se de anotar os valores que o console gera, pois precisaremos deles nas etapas a seguir.\nEm seguida, vamos para o\_[Torneira de fluxo](https://testnet-faucet.onflow.org/)\_criar um novo endereço com base em nossas chaves e financiar nossa conta com alguns tokens de teste. Conclua as seguintes etapas para criar sua conta:\n\n1.  Cole sua chave pública no campo de entrada especificado\n2.  Mantenha os algoritmos de assinatura e hash definidos como padrão\n3.  Complete o captcha\n4.  Clique em Criar conta\n    ![https://miro.medium.com/max/520/1\\*C7g\\_k17hgGjzBACrFTzjBw.png](https://miro.medium.com/max/520/1*C7g_k17hgGjzBACrFTzjBw.png)\n    Com uma geração de contas bem-sucedida, mantemos um diálogo com nosso novo endereço Flow, contendo 1.000 tokens FLOW.\n    ![https://miro.medium.com/max/700/1\\*rhyoqzmKbCgfDA-QEcEx3w.png](https://miro.medium.com/max/700/1*rhyoqzmKbCgfDA-QEcEx3w.png)\n    Copie o endereço para uso na próxima etapa.\n\n# **2). Configurar o contrato inteligente**\n\nAntes de criarmos o front-end do projeto, vamos criar o contrato inteligente com o qual interagiremos mais tarde.\nNo terminal de comando, navegue até a pasta da qual você gostaria de trabalhar e digite o seguinte comando para iniciar um projeto:\n\n```\nfluxoinit\n```\n\nEste comando cria um\_`flow.json`\_arquivo dentro da pasta, onde colocaremos todas as informações necessárias para implantar nosso contrato inteligente.\nAbra o\_`flow.json`\_arquive no seu editor de códigos e configuraremos uma conta da rede de testes. Dentro do\_`accounts`\_seção, adicionaremos uma nova entrada chamada\_`testnet-account`, que contém nosso novo endereço e a chave privada gerada no\_`flow keys generate`\_comando mais cedo.\n\n```\n{\n \"emuladores\": {\n  \"padrão\": {\n   \"porta\":3569,\n\"Conta de serviço\":\"conta de emulador\"\n  }\n },\n \"contratos\": { },\n \"redes\": {\n  \"emulador\":\"127.0.0.1: 3569\",\n\"mainnet\":\"access.mainnet.nodes.onflow.org: 9000\",\n\"testnet\":\"access.devnet.nodes.onflow.org: 9000\"\n },\n \"contas\": {\n  \"conta de emulador\": {\n   \"endereço\":\"f8d6e0586b0a20c7\",\n\"chave\":\"2becfbede2fb89796ab68df3ec2a23c3627235ec250a3e5da41df850a8dd4349\"\n  },\n  \"conta de rede de teste\": {\n   \"endereço\":\"0x8e0dac5df6e8489e\",\n\"chave\":\"c91f4716a51a66683ccb090ca3e213b90e9f9ae2b1edd12defffe06c57edc\"\n  }\n },\n \"implantações\": { }\n}\n```\n\nEm seguida, criaremos um novo arquivo para escrever nosso contrato inteligente.\nAo escrever o código, você pode notar algumas diferenças na maneira como o Cadence lida com a criação de NFT em comparação com o Solidity. Por exemplo, as NFTs em Cadence são criadas como um recurso e cunhadas diretamente na conta do usuário. Por outro lado, as NFTs de solidez são essencialmente apenas um número de identificação referenciado em um mapeamento para um endereço específico no livro digital.\nEntão, com isso em mente, na mesma pasta que a\_`flow.json`\_arquivo, crie um novo arquivo chamado\_`FlowTutorialMint.cdc`, e digite o seguinte código:\nCoisas importantes a serem observadas no contrato inteligente acima:\n\n*   Estamos importando o\_`NonFungibleTokenMetadataViews`\n    e\n    contratos para criar nossas NFTs usando os padrões Flow\n*   Definimos nosso recurso NFT no\_`pub resource NFT`\n    função\n*   O\_`mintNFT`\n    função cunha uma NFT na conta que chama a função\n    Agora precisamos voltar ao nosso\_`flow.json`\_arquivo para adicionar algumas coisas:\n*   No\_`contracts`\n    seção, adicione o contrato e seu caminho.\n*   No\_`deploymentstestnettestnet-accountFlowTutorialMint`\n    seção adicionar a rede (\n    ), a conta que usaremos para executar a implantação (\n    ) e o nome do contrato (\n    ).\n\n```\n{\n \"emuladores\": {\n  \"padrão\": {\n   \"porta\":3569,\n\"Conta de serviço\":\"conta de emulador\"\n  }\n },\n \"contratos\": {\n  \"FlowTutorialMint\":\"./FlowTutorialMint.cdc\"\n },\n \"redes\": {\n  \"emulador\":\"127.0.0.1: 3569\",\n\"mainnet\":\"access.mainnet.nodes.onflow.org: 9000\",\n\"testnet\":\"access.devnet.nodes.onflow.org: 9000\"\n },\n \"contas\": {\n  \"conta de emulador\": {\n   \"endereço\":\"f8d6e0586b0a20c7\",\n\"chave\":\"2becfbede2fb89796ab68df3ec2a23c3627235ec250a3e5da41df850a8dd4349\"\n  },\n  \"conta de rede de teste\": {\n   \"endereço\":\"0x8e0dac5df6e8489e\",\n\"chave\":\"c91f4716a51a66683ccb090ca3e213b90e9f9ae2b1edd12defffe06c57edc\"\n  }\n },\n \"implantações\": {\n  \"rede de teste\": {\n   \"conta de rede de teste\": [\n\"FlowTutorialMint\"\n   ]\n  }\n }\n}\n```\n\nA etapa final na configuração do contrato inteligente é implantá-lo na rede de teste. Para fazer isso, digite o seguinte comando na pasta do projeto no seu terminal:\n\n```\nimplantação do projeto de fluxo -n = testnet\n```\n\nDevemos receber uma saída informando que o contrato foi implantado com sucesso:\n![https://miro.medium.com/max/700/1\\*TDLQtMd43FRRCVVHRWNnkw.jpeg](https://miro.medium.com/max/700/1*TDLQtMd43FRRCVVHRWNnkw.jpeg)\nÉ importante observar aqui que os contratos inteligentes da Cadence existem no armazenamento da conta que os implanta, enquanto que, com o Solidity, o contrato inteligente existe em seu próprio endereço na blockchain.\nEmbora existam limites para a capacidade de armazenamento da conta, eles são relativos ao número de tokens FLOW reservados na conta. Você pode aprender mais sobre o armazenamento da conta no\_[Portal do desenvolvedor de fluxo](https://developers.flow.com/learn/concepts/storage).\nImpressionante! Agora vamos criar um frontend simples para interagir com o nosso contrato.\n\n# **3). Criando o frontend**\n\nPara o front-end deste projeto, usaremos o React. Primeiro, navegue até uma nova pasta e execute o seguinte comando para criar um projeto de reação:\n\n```\nnpx create-react-appfluxo-tutorial\n```\n\nEm seguida, navegue até a pasta do tutorial de fluxo e instale o\_[Flow Client Library](https://developers.flow.com/tools/fcl-js)\_( FCL ):\n\n```\nnpmeu -S@onflow/fcl\n```\n\nO FCL nos permitirá comunicar com o blockchain Flow, transações de chamadas e integrar todas as outras carteiras compatíveis com FCL sem precisar adicionar integrações personalizadas. Quando isso terminar, instalaremos algumas dependências adicionais:\n\n```\nnpmeu componentes elípticos estilizados em sha3\n```\n\nDepois de instalar todas as nossas dependências, estamos prontos para começar a trabalhar no front-end do dapp.\n\n## **3.a. Configurar o FCL**\n\nAntes de começarmos a estruturar e modelar as coisas, vamos criar um arquivo de configuração FCL onde definiremos configurações importantes, como se iremos interagir com a rede de teste ou a rede principal.\nNo\_`src`\_diretório, crie uma nova pasta chamada\_`flow`. Dentro desta nova pasta, crie um arquivo chamado\_`config.js`.\nNisto\_`config.js`\_arquivo, vamos importar o FCL, chame o\_`fcl.config`\_funcione e crie algumas configurações para o nosso dapp, como:\n\n*   `app.detail.title`\n*   `accessNode.api`\n*   `discovery.wallet`\n    Abra o\_`config.js`\_arquive e preencha com o seguinte código:\n\n```\nconst fcl =requer(\"@onflow / fcl\");\nfcl.config( {\n\"app.detail.title\":\"Tutorial da página de menta de fluxo\",// isso adiciona um nome personalizado à nossa carteira\n\"accessNode.api\":\"https://rest-testnet.onflow.org\",// isto é para o emulador local\n\"discovery.wallet\":\"https://fcl-discovery.onflow.org/testnet/authn\",// isto é para a carteira dev local\n} )\n```\n\nHá\_[configurações adicionais que podemos configurar](https://github.com/onflow/fcl-js/tree/master/packages/config/src#overview)\_para o nosso dapp, mas por enquanto, é tudo o que precisaremos.\nCom a configuração fora do caminho, vamos para a construção!\n\n## **3.b. A estrutura inicial**\n\nPrimeiro, navegue até o\_`App.js`\_arquivo no\_`src`\_pasta e substitua o código por:\n\n```\nimportar'./App.css';\nfunçãoAplicativo() {\nRetorna (\n    < div className = \"App\" >\n        < h1 > Menta o seu cão!< / h1 >\n    < / div >\n  );\n}\nexportaçãopadrãoAplicativo;\n```\n\nIsso nos dará a estrutura inicial do nosso dapp, da qual expandiremos.\nEm seguida, estilizaremos essa estrutura. Abra o\_`index.css`\_arquive e substitua o código pelo seguinte:\n\n```\n@import url ('https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@200;300;600;700&display=swap');\ncorpo {\nmargem:0;\nfamília de fontes:'Montserrat', -apple-system, BlinkMacSystemFont,'Segoe UI','Roboto','Oxigênio',\n'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',\n    sans-serif;\n  -webkit-suavização de fonte: antialiased;\n  -moz-osx-suavização de fonte: escala de cinza;\n}\ncódigo {\nfamília de fontes: código-fonte-pro, Menlo, Mônaco, Consolas,'Courier New',\n    monoespaço;\n}\n```\n\nSe você executar o npm start, verá uma página em branco com o título Mint Your Dog!\nEm seguida, vamos criar alguns componentes!\n\n## **3.c. O componente nav**\n\nDentro do\_`src`\_diretório, crie uma nova pasta chamada\_`components`, onde construiremos todos os nossos componentes de reação personalizados.\nO primeiro componente que criaremos é o Navbar, que mostrará o botão Login se o usuário não estiver conectado, ou o botão Logout ao lado do endereço do usuário e o número de tokens FLOW que a conta possui se estiverem conectados.\nCrie um arquivo chamado\_`Navbar.jsx`\_e preencha com o seguinte código:\nVamos percorrer o código para ver o que está acontecendo aqui.\n\n*   Primeiro, estamos importando a Flow Client Library, que nos fornecerá funções para\_`authenticateunauthenticatecurrentUser`\n    ,\n    , e determine o\n    .\n*   Em seguida, importamos as outras dependências de que precisamos e depois usamos\_`styled-componentsWrapper`\n    para criar o estilo básico do nosso Navbar dentro do\n    variável.\n*   Em seguida, definimos algumas variáveis de estado de reação (`userflow`\n    e\n    ).\n*   Em seguida é a funcionalidade do dapp, como\_`logOutlogIngetFlow`\n    ,\n    , e\n    ( obtenha o saldo de FLUXO da conta conectada ).\n*   Depois disso, devolvemos o\_`html`\n    para o Navbar envolto em nosso estilo.\n    Com um completo\_`Navbar`\_componente, agora podemos importá-lo para o\_`App.js`\_Arquivo:\n\n```\nimportar'./App.css';\nimportarBarra de navegaçãode'./«./components/Navbar.jsx»';\nfunçãoAplicativo() {\nRetorna (\n    < div className = \"App\" >\n        < Navbar / >\n        < h1 > Menta seu cão!< / h1 >\n    < / div >\n  );\n}\nexportaçãopadrãoAplicativo;\n```\n\nAgora, se executarmos o projeto com\_`npm start`, vemos a nossa\_`Navbar`\_nos fornece a funcionalidade que definimos em nosso código. Impressionante!\nEm seguida, vamos construir nosso componente de cunhagem NFT!\n\n## **3.d. O componente de cunhagem NFT**\n\nDentro do\_`components`\_pasta, crie um novo arquivo chamado\_`MintComponent.jsx`, copie o seguinte código:\nNovamente, vamos percorrer o código para garantir que entendemos o que está acontecendo.\n\n*   Precisamos importar a FCL neste componente para obter acesso à função que nos permitirá cunhar nossa NFT.\n*   Novamente, usamos\_`styled-components`\n    para adicionar um pouco de estilo.\n    O\_`mintNFT`\_função usa\_`fcl.mutate`\_função para executar a hortelã real por:\n*   Validando se o usuário possui uma coleção NFT de Tutorial de Fluxo em sua conta e criando uma, se não.\n*   Chamando a função de hortelã existente dentro do contrato FlowTutorialMint e passando os parâmetros.\n*   A função retorna o recurso ( NFT ), que depositamos na conta do usuário.\n*   No\_`fcl.mutateimport FlowTutorialMint from 0x8e0dac5df6e8489e`\n    função, estamos importando o contrato inteligente que implantamos com a linha:\n*   Também importamos o\_`NonFngibleTokenMetadataViews`\n    e\n    padrões.\n*   Na transação, especificamos a NFT\_`typeurl`\n    e\n    da imagem.\n    As transações de cadência têm duas fases:\_`prepare`\_e\_`execute`\n*   `prepareFlowTutorialCapabilityNonFungibleToken.CollectionPublic`[confira este link](https://developers.flow.com/cadence/tutorial/04-capabilities)\n    – solicitamos a assinatura do usuário para acessar sua conta e executar funções privadas. Nesse caso, criando um novo\n    Coleção de hortelã, se eles ainda não tiverem um. Também inicializamos um público\n    restrito a\n    . Para mais contexto sobre Recursos,\n    .\n*   `executemintNFT`\n    – chame o\n    função dentro do nosso contrato na rede de teste.\n*   No\_`html`\n    parte do código, exibimos três imagens das quais o usuário pode cunhar uma NFT.\n    Com a nossa\_`MintComponent`\_completo, podemos importá-lo para o\_`App.js`\_Arquivo:\n\n```\nimportar'./App.css';\nimportarBarra de navegaçãode'./«./components/Navbar.jsx»';\nimportarComponente de hortelãde'./components/MintComponent.jsx';\nfunçãoAplicativo() {\nRetorna (\n    < div className = \"App\" >\n        < Navbar / >\n        < h1 > Menta seu cão!< / h1 >\n        < Componente de menta / >\n    < / div >\n  );\n}\nexportaçãopadrãoAplicativo;\n```\n\nAgora o usuário pode fazer login no dapp e cunhar uma NFT em sua conta!\nA peça final do quebra-cabeça é criar um componente que buscará as NFTs do usuário e as exibirá.\n\n## **3.e. Mostrando as NFTs do usuário**\n\nNo\_`components`\_pasta, crie um novo arquivo chamado\_`ShowNfts.jsx`, e usaremos o seguinte código:\nEssencialmente, o que estamos fazendo neste código é consultar o Flow Blockchain usando o FCL e reunir as NFTs na conta conectada que são da nossa\_`FlowTutorialMint`\_coleção.\nSó precisamos adicionar esse componente ao nosso\_`App.js`, e estamos prontos para ir!\n\n```\nimportar'./App.css';\nimportarBarra de navegaçãode'./«./components/Navbar.jsx»';\nimportarComponente de hortelãde'./components/MintComponent.jsx';\nimportarShowNftsde'./«./components/ShowNfts»';\nfunçãoAplicativo() {\nRetorna (\n    < div className = \"App\" >\n      < Navbar / >\n      < h1 > Menta seu cão!< / h1 >\n      < Componente de menta / >\n      < ShowNfts / >\n    < / div >\n  );\n}\nexportaçãopadrãoAplicativo;\n```\n\nIsso é tudo! Agora vamos testar nosso dapp e garantir que podemos cunhar algumas NFTs.\n\n## **4). Vamos cunhar algumas NFTs!**\n\nEntão, primeiro, vamos começar o aplicativo com\_`npm start`\_e então abra nosso navegador para\_`[http://localhost:3000/](http://localhost:3000/)`.\nSe tudo correr bem, sua tela ficará assim:\n![https://miro.medium.com/max/700/1\\*QEzqQSSfMqemHV7-vokCVA.png](https://miro.medium.com/max/700/1*QEzqQSSfMqemHV7-vokCVA.png)\nO mais bonito de usar o FCL em nossa sequência de login é que ele oferece aos usuários acesso fácil a fazer uma conta no local usando apenas um endereço de email. Vamos percorrer o processo para garantir que ele funcione corretamente. Ao clicar no botão Login, um diálogo será aberto, oferecendo duas opções para fazer login. Vamos escolher o Blocto.\n![https://miro.medium.com/max/501/1\\*kWffHiB\\_OdlWkbhkUT8P\\_Q.png](https://miro.medium.com/max/501/1*kWffHiB_OdlWkbhkUT8P_Q.png)\nA Blocto nos solicitará a inserir um endereço de e-mail e, ao fazer isso, nos dará a capacidade de registrar uma nova conta. Então, depois de inserir o código enviado por e-mail para o nosso endereço, o Blocto nos configura com um novo e brilhante endereço Flow!\n![https://miro.medium.com/max/452/1\\*R1pIcmUN7E\\_DsGdmsxEnHA.png](https://miro.medium.com/max/452/1*R1pIcmUN7E_DsGdmsxEnHA.png)\nA partir daqui, podemos escolher qual imagem de cachorro queremos cunhar como NFT. Eu escolhi o Swag Dog porque isso me lembra um pouco de mim!\n![https://miro.medium.com/max/295/1\\*k2n-4Bs8DhL9mlyFXmimeg.png](https://miro.medium.com/max/295/1*k2n-4Bs8DhL9mlyFXmimeg.png)\nPressionar o botão Mint abrirá outro diálogo nos informando sobre a transação que estamos prestes a realizar. Podemos ver que o Blocto está cobrindo graciosamente as taxas de cunhagem e, se quisermos olhar para o script que estamos chamando, podemos fazê-lo.\n![https://miro.medium.com/max/416/1\\*-8oJUrVK87ngEjG5JQEhew.png](https://miro.medium.com/max/416/1*-8oJUrVK87ngEjG5JQEhew.png)\nVários segundos depois de clicar em Aprovar, devemos receber uma mensagem de que nossa hortelã foi bem-sucedida e nosso cão Swag recém-cunhado será exibido na seção Minhas NFTs do nosso dapp.\nAqui está um link para o nosso dapp em ação:\nhttps://s1.gifyu.com/images/23/01/flow\\\\\\_tutorial-min.gif\nTodo o código fonte deste projeto pode ser encontrado em\_[este repositório](https://github.com/paul-mcaviney/flow-nft-minting-dapp-project).\n\n# **Conclusão**\n\nComo você pode ver, a construção de um dapp de cunhagem NFT no Flow Blockchain é direta quando você entende como tudo funciona em conjunto. Além disso, a Flow Client Library é uma ferramenta poderosa à nossa disposição que nos dá acesso a uma extensa funcionalidade interna e ajuda a proporcionar ao nosso dapp uma melhor experiência do usuário.\nAo contrário do Ethereum, o Flow lida com a criação e o gerenciamento de NFT de maneira muito mais eficiente e segura. Isso é conseguido implantando contratos inteligentes e cunhando as NFTs diretamente na conta do usuário, em vez de criar uma referência a endereços ou mapeamentos armazenados no livro digital.\nInspirado em artigo original em inglês: https://betterprogramming.pub/how-to-build-an-nft-minting-dapp-on-the-flow-blockchain-d331a2404cae\n"
author: content/data/team/people/diego-fornalha.json
---
## Vamos poner todo el conocimiento de mis artículos anteriores en práctica escribiendo e implementando un contrato inteligente, construyendo un front-end y creando algunas NFT

Si has seguido la serie Flow hasta ahora, sabrás que [Flow Blockchain se destaca en la gestión de activos digitales](https://medium.com/better-programming/an-introduction-to-the-flow-blockchain-60ccc7a35598), como los NFTs. Se construyó desde cero como una mejor alternativa a la congestión de la red Ethereum y los problemas de alta tarifa. Además, el lenguaje de contrato inteligente Cadence es un lenguaje de programación orientado a recursos de primera calidad que facilita la creación y gestión de activos digitales. Aunque Solidity es excelente para facilitar el Web3 a través de contratos inteligentes, tiene sus desventajas. Cadence mejora las deficiencias de Solidity proporcionando la capacidad de actualizar contratos y recursos inteligentes que reducen el riesgo de error humano, entre otras mejoras. Y, finalmente, la lista de herramientas y bibliotecas disponibles para los desarrolladores que quieren empezar es extensa. Así que vamos a juntarlo todo y construir algo sobre Flow. Este artículo es un tutorial sobre cómo crear un dapp completo de NFT para Flow Blockchain.

# **Vayamos a lo importante**

Para el resto de este artículo, pasaremos por el proceso de crear un dapp de creación de NFT en la cadena de bloques de Flow. Empezaremos con la configuración e implementación de un contrato inteligente de Cadence. A continuación, crearemos una interfaz de usuario para conectarnos a nuestro contrato inteligente y acuñar un NFT en la cuenta del usuario. La funcionalidad que construimos permitirá a los usuarios conectarse a su cuenta de Flow, crear una cuenta si aún no tienen una, y luego seleccionar una de las tres imágenes para acuñar un NFT. Después, el dapp mostrará los NFT de nuestra colección que se encuentran en la cuenta del usuario. Será un excelente proyecto para destacar la facilidad y eficiencia de la creación de NFT en Flow y la efectividad de la biblioteca del cliente Flow (FCL) para interactuar con la cadena de bloques. Para seguir este tutorial, necesitarás lo siguiente:

*   [NodeJs](https://nodejs.org/en/download/) y [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

*   [La interfaz de línea de comandos de Flow](https://developers.flow.com/tools/flow-cli/install) (CLI de Flow)

*   [Tu editor de código favorito](https://code.visualstudio.com/)

Con todo instalado, ¡vamos a empezar!

# **1. Configurar una cuenta de Flow**

Antes de empezar a construir, necesitaremos configurar una cuenta en la cadena de bloques Flow para que podamos implementar nuestro contrato inteligente. Ejecuta el siguiente comando para generar un nuevo par de claves pública y privada:

```
cssCopy code
```

Asegúrate de anotar los valores que genera la consola, ya que los necesitaremos en los próximos pasos. A continuación, vamos a [Flow Faucet](https://testnet-faucet.onflow.org/) para crear una nueva dirección basada en nuestras claves y financiar nuestra cuenta con algunos tokens

de prueba. Realice los siguientes pasos para crear su cuenta:

1.  Pegue su clave pública en el campo de entrada especificado.

2.  Mantenga los algoritmos de firma y hash definidos como predeterminados.

3.  Complete el captcha.

4.  Haga clic en Crear cuenta.

![](https://miro.medium.com/max/520/1*C7g_k17hgGjzBACrFTzjBw.png)

Con la creación de cuenta exitosa, establecemos un diálogo con nuestra nueva dirección de Flow que contiene 1,000 tokens FLOW.

![](https://miro.medium.com/max/700/1*rhyoqzmKbCgfDA-QEcEx3w.png)

Copie la dirección para su uso en el siguiente paso.




# **2). Configurando el contrato inteligente**

Antes de crear el front-end del proyecto, crearemos el contrato inteligente con el que interactuaremos más tarde.
En la terminal de comandos, navegue hasta la carpeta de la que le gustaría trabajar y escriba el siguiente comando para iniciar un proyecto:

```
flow init

```

Este comando crea un archivo `flow.json` dentro de la carpeta, donde colocaremos toda la información necesaria para desplegar nuestro contrato inteligente.
Abra el archivo `flow.json` en su editor de código y configuraremos una cuenta de la red de pruebas. Dentro de la sección `accounts`, agregaremos una nueva entrada llamada `testnet-account`, que contiene nuestra nueva dirección y la clave privada generada en el comando `flow keys generate` anterior.

```
json



```

