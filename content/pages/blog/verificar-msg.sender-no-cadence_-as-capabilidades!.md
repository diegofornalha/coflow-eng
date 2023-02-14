---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: 'Verificar msg.sender no Cadence: As Capabilidades!'
titlePt: 'Verificar msg.sender no Cadence: As Capabilidades!'
colors: colors-d
excerpt: ' Segurança por Capacidade'
excerptFr: ' Segurança por Capacidade'
featuredImage:
  type: ImageBlock
  url: /images/CAPAS-Verificar msg sender no Cadence As Capabilidades.png
  altText: 'Verificar msg.sender no Cadence: As Capabilidades!'
  caption: 'Verificar msg.sender no Cadence: As Capabilidades!'
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/CAPAS-Verificar msg sender no Cadence As Capabilidades.png
  altText: 'Verificar msg.sender no Cadence: As Capabilidades!'
  caption: 'Verificar msg.sender no Cadence: As Capabilidades!'
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: "Já faz algum tempo que a equipe do Flow vem trabalhando em alta velocidade e temos muitas coisas incríveis em desenvolvimento! Aqui está o que eu estive trabalhando.\n\nContratos inteligentes de Epoch\nVocê já teve a chance de dar uma olhada no contrato inteligente de Staking do Flow ainda? Se não, eu recomendo verificar a documentação primeiro e depois aprender como o contrato de staking funciona. Ele não é o típico contrato NFT, então pode haver alguns padrões de design e ferramentas interessantes lá dentro que você pode achar úteis!\n\nO contrato de Staking do Flow é apenas uma parte de um conjunto de contratos Cadence que o Flow usará para gerenciar os Epochs, os períodos de uma semana onde a tabela de identidade do nó é definida e os nós se preparam para o próximo epoch enquanto executam a rede. A lógica principal desta parte do protocolo é gerenciada via contratos inteligentes e estamos cada vez mais próximos de levá-lo para o mainnet!\n\nEstaremos preparando uma documentação mais extensa em breve, mas eu criei algumas propostas de melhoria do Flow (FLIPs) para os contratos inteligentes se você estiver curioso sobre o que eles fazem!\n\nContrato inteligente de Certificado de Quorum de Cluster Epoch\nContrato inteligente de Geração de Chave Distribuída (DKG) de Epoch\nContrato inteligente de Ciclo de Vida de Epoch\nTambém temos uma ramificação de recursos aberta com todo o código e testes se você quiser mergulhar, aprender mais e potencialmente deixar feedback!\nEles atualizarão este post toda vez que eu postar um novo blog, então sempre será um único lugar que você pode usar para acessar todos os meus blogs. Sinta-se à vontade para marcá-lo como favorito para fazer referência no futuro!\n\nSe você não tem experiência com o Flow ou Cadence, eu recomendo fortemente que você vá lá e comece com meu primeiro blog! \U0001F603\n\nControle de Acesso\nUma pergunta que todo usuário de Solidity faz quando começa a programar no Cadence é \"como eu verifico msg.sender?\". Na Ethereum, verificar msg.sender é usado para identificar a conta que está chamando uma função e modificar o comportamento dessa função de acordo. Isso é fundamental para identidade, permissões, propriedade e segurança na Ethereum. Um contrato ERC-20 permite que os usuários enviem tokens verificando o msg.sender para ver quais tokens mover. Um contrato de governança verifica o msg.sender para registrar o voto do chamador para que eles não possam votar novamente. Existem muitos outros exemplos.\n\nNo entanto, no Cadence, não temos msg.sender e não há uma maneira de nível de transação para o código Cadence identificar de forma única seu chamador. Isso não é apenas porque ainda não foi adicionado. No Cadence, as transações podem ser assinadas por mais de uma conta, então pegar o msg.sender a partir disso nem faria sentido.\n\nTudo isso significa que uma tarefa que seria implementada por um único contrato central verificando o msg.sender em Solidity requer uma abordagem diferente no Cadence. O design do Cadence é intencionalmente diferente, segue um modelo de segurança baseado em capacidade em vez de um modelo baseado em lista de controle de acesso. Acreditamos que este design oferece vantagens distintas para robustez e segurança de código.\n\nO engenheiro de contrato inteligente do time Flow, Rhea Myers, criou um documento que descreve por que não podemos usar o msg.sender no Cadence, o que usamos em vez disso e exemplos para vários casos de uso diferentes onde essa funcionalidade é importante. A segurança por capacidade é um dos aspectos mais importantes do design do Cadence e é vital que você entenda isso se algum dia quiser construir seus próprios contratos inteligentes.\n\n\n\n\n\n"
metaDescription: null
socialImage: null
date: '2023-01-26'
---
Já faz algum tempo que a equipe do Flow vem trabalhando em alta velocidade e temos muitas coisas incríveis em desenvolvimento! Aqui está o que eu estive trabalhando.

Contratos inteligentes de Epoch
Você já teve a chance de dar uma olhada no contrato inteligente de Staking do Flow ainda? Se não, eu recomendo verificar a documentação primeiro e depois aprender como o contrato de staking funciona. Ele não é o típico contrato NFT, então pode haver alguns padrões de design e ferramentas interessantes lá dentro que você pode achar úteis!

O contrato de Staking do Flow é apenas uma parte de um conjunto de contratos Cadence que o Flow usará para gerenciar os Epochs, os períodos de uma semana onde a tabela de identidade do nó é definida e os nós se preparam para o próximo epoch enquanto executam a rede. A lógica principal desta parte do protocolo é gerenciada via contratos inteligentes e estamos cada vez mais próximos de levá-lo para o mainnet!

Estaremos preparando uma documentação mais extensa em breve, mas eu criei algumas propostas de melhoria do Flow (FLIPs) para os contratos inteligentes se você estiver curioso sobre o que eles fazem!

Contrato inteligente de Certificado de Quorum de Cluster Epoch
Contrato inteligente de Geração de Chave Distribuída (DKG) de Epoch
Contrato inteligente de Ciclo de Vida de Epoch
Também temos uma ramificação de recursos aberta com todo o código e testes se você quiser mergulhar, aprender mais e potencialmente deixar feedback!
Eles atualizarão este post toda vez que eu postar um novo blog, então sempre será um único lugar que você pode usar para acessar todos os meus blogs. Sinta-se à vontade para marcá-lo como favorito para fazer referência no futuro!

Se você não tem experiência com o Flow ou Cadence, eu recomendo fortemente que você vá lá e comece com meu primeiro blog! 😃

Controle de Acesso
Uma pergunta que todo usuário de Solidity faz quando começa a programar no Cadence é "como eu verifico msg.sender?". Na Ethereum, verificar msg.sender é usado para identificar a conta que está chamando uma função e modificar o comportamento dessa função de acordo. Isso é fundamental para identidade, permissões, propriedade e segurança na Ethereum. Um contrato ERC-20 permite que os usuários enviem tokens verificando o msg.sender para ver quais tokens mover. Um contrato de governança verifica o msg.sender para registrar o voto do chamador para que eles não possam votar novamente. Existem muitos outros exemplos.

No entanto, no Cadence, não temos msg.sender e não há uma maneira de nível de transação para o código Cadence identificar de forma única seu chamador. Isso não é apenas porque ainda não foi adicionado. No Cadence, as transações podem ser assinadas por mais de uma conta, então pegar o msg.sender a partir disso nem faria sentido.

Tudo isso significa que uma tarefa que seria implementada por um único contrato central verificando o msg.sender em Solidity requer uma abordagem diferente no Cadence. O design do Cadence é intencionalmente diferente, segue um modelo de segurança baseado em capacidade em vez de um modelo baseado em lista de controle de acesso. Acreditamos que este design oferece vantagens distintas para robustez e segurança de código.

O engenheiro de contrato inteligente do time Flow, Rhea Myers, criou um documento que descreve por que não podemos usar o msg.sender no Cadence, o que usamos em vez disso e exemplos para vários casos de uso diferentes onde essa funcionalidade é importante. A segurança por capacidade é um dos aspectos mais importantes do design do Cadence e é vital que você entenda isso se algum dia quiser construir seus próprios contratos inteligentes.

