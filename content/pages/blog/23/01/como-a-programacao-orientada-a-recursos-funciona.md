---
layout: PostLayout
metaTitle: 'Como a programação orientada a recursos funciona? '
addTitleSuffix: true
metaTags: []
colors: colors-d
date: '2023-01-16'
featuredImage:
  type: ImageBlock
  url: >-
    /images/23/01/Como a programação orientada a recursos funciona
    diegofornalha.png
  altText: Como a programação orientada a recursos funciona?
  caption: >-
    O EVM (Ethereum Virtual Machine) ou WASM (WebAssembly) são opções ideais
    para ativos digitais, pois permitem que esses ativos sejam rotulados como
    "recursos" e sejam acompanhados por regras especiais que mantêm seu valor.
    Essas regras incluem a existência exclusiva de um recurso em um lugar
    específico, a impossibilidade de duplicação ou exclusão acidental e a
    propriedade determinada pelo local de armazenamento. Além disso, o acesso
    aos métodos de um recurso é limitado ao proprietário e as regras devem ser
    aplicadas enquanto o código é executado na blockchain para evitar invasões.
    Se essas regras forem seguidas corretamente, é possível armazenar ativos
    importantes de forma segura em estruturas de dados controladas por código de
    usuário. Um exemplo de como isso pode ser aplicado é o uso de tokens não
    fungíveis (NFTs) como CryptoKitties, que são indivisíveis, não copiáveis e
    podem ter um único proprietário direto. No modelo de recursos, o próprio
    CryptoKitty é armazenado diretamente na conta do proprietário, enquanto no
    modelo de ledger, é armazenado em um contrato inteligente centralizado.
  width: 800
  height: 450
media:
  type: ImageBlock
  url: >-
    /images/23/01/Como a programação orientada a recursos funciona
    diegofornalha.png
  altText: 'Como a programação orientada a recursos funciona? '
  caption: >-
    O EVM (Ethereum Virtual Machine) ou WASM (WebAssembly) são opções ideais
    para ativos digitais, pois permitem que esses ativos sejam rotulados como
    "recursos" e sejam acompanhados por regras especiais que mantêm seu valor.
    Essas regras incluem a existência exclusiva de um recurso em um lugar
    específico, a impossibilidade de duplicação ou exclusão acidental e a
    propriedade determinada pelo local de armazenamento. Além disso, o acesso
    aos métodos de um recurso é limitado ao proprietário e as regras devem ser
    aplicadas enquanto o código é executado na blockchain para evitar invasões.
    Se essas regras forem seguidas corretamente, é possível armazenar ativos
    importantes de forma segura em estruturas de dados controladas por código de
    usuário. Um exemplo de como isso pode ser aplicado é o uso de tokens não
    fungíveis (NFTs) como CryptoKitties, que são indivisíveis, não copiáveis e
    podem ter um único proprietário direto. No modelo de recursos, o próprio
    CryptoKitty é armazenado diretamente na conta do proprietário, enquanto no
    modelo de ledger, é armazenado em um contrato inteligente centralizado.
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
metaDescription: null
socialImage: null
titlePt: 'Como a programação orientada a recursos funciona? '
markdown_content_pt: "Entre as\_opções que EVM ou WASM e são um ajuste perfeito para ativos digitais.\nA rotulagem de algo como um “recurso” informa ao ambiente de programação que essa estrutura de dados representa algo de valor tangível e que todo código que interage com essa estrutura de dados precisa seguir uma série de regras especiais que manterão o valor dessa estrutura de dados.\nEntão, quais são essas regras?\n\n1.  **Cada recurso existe exatamente em um lugar a qualquer momento.**\n    Os recursos não podem ser duplicados ou excluídos acidentalmente, por erro de programação ou código malicioso.\n2.  **A propriedade de um recurso é definida por onde ele é armazenado.**\n    Não há razão central que precise ser consultada para determinar a propriedade.\n3.  **O acesso aos métodos em um recurso é limitado ao proprietário.**\n    Por exemplo, apenas o proprietário de um CryptoKitty pode iniciar uma operação de criação que levará ao nascimento de um novo Kitty.\n    Não basta que o status especial dos objetos Resource seja aplicado apenas pelo compilador.\n    As regras devem ser aplicadas enquanto o código estiver realmente sendo executado na blockchain, seria muito fácil para um invasor usar uma cópia comprometida do compilador que ignora as regras que mantêm os recursos seguros.\n    Contudo! Se você aplicar essas regras corretamente, poderá permitir que o ativo mais importante da rede do token nativo seja armazenado com segurança dentro de estruturas de dados controladas por código enviado pelo usuário.\n\n# **Mostre-me um exemplo!**\n\nA maneira mais fácil de pensar sobre Recursos é pensar em um exemplo usando um Token Não Fungível (NFT), como um CryptoKitty.\nCada CryptoKitty é indivisível, não copiável e pode ter um único proprietário direto, que corresponde diretamente à construção de programação de Recursos.\nEm um modelo de Ledger como o Ethereum, todos os CryptoKitties são armazenados em um único contrato inteligente como uma lista gigante. A propriedade de cada Kitty é rastreada armazenando o ID da conta de cada proprietário em um livro central, e a única maneira de alterar a propriedade de uma Kitty é entrar em contato com o livro central e solicitar que ele atualize o ID da conta associado a essa Kitty.\n`contract KittyLedger {     struct Kitty {}     priv let kitties: {Int: Kitty}     fun transfer(kittyId: Int, newOwner: AccountId) {         if (msg.sender == kitties[kittyId].owner) {             kitties[kittyId].owner = newOwner         }     } } transaction(signer: Account) {     // diz ao razão central para atribuir a propriedade de     // myKittyId para uma conta diferente centralKittyLedger.transfer(myKittyId, receiverAccountId) }`\nNo Modelo de Recursos, o próprio Kitty é representado como um objeto de Recursos e é armazenado\_\\*diretamente na conta que a possui.\n\\*Assim como no mundo físico, a propriedade é representada pela posse. Você não precisa procurar em um livro central para ver se possui algo, ou o armazena em sua conta ou não.\nE se você tiver, pode transferi-lo ou controlá-lo de outra forma, e se você\_*não*\_tem, não há como capturá-lo ou alterá-lo.\n`contract CryptoKitties {     //As contas armazenam uma coleção em seu recurso de armazenamento de conta KittyCollection {         // Cada coleção tem funções para //mover recursos armazenados para dentro e para fora         fun withdraw(kittyId: int): CryptoKitty         fun deposit(kitty: CryptoKitty)     }     //Os objetos de recurso que podem ser armazenados no recurso de coleção CryptoKitty {} } transaction(signer: Account) {     //Remove o Kitty da coleção do signatário e o armazena     // temporariamente na pilha.      let theKitty <- signer.kittyCollection.withdraw(kittyId: myKittyId)     // Move o Kitty para a conta do destinatário     let receiver = getAccount(receiverAccountId)     receiver.kittyCollection.deposit(kitty: <-theKitty) }`\n*Nota: para manter o foco nas diferenças entre os modelos de contabilidade e propriedade direta, os dois exemplos acima ignoram questões como controle de acesso, definindo todas as variáveis, e outros fatores com os quais o código ativo precisaria se preocupar.*\n\n# **Por que os recursos importam**\n\nAlém da vitória óbvia de incluir abstrações para gerenciar a propriedade, existem vários outros benefícios secundários decorrentes do uso de Recursos, cada um dos quais bastante significativo por si só:\n\n# **Aluguel de Estado**\n\nAs plataformas escaláveis de contratos inteligentes precisam de alguma maneira de cobrar “ aluguel de estado ” para que os dados armazenados no blockchain sejam pagos ou removidos do conjunto de trabalho.\nCom o modelo de contabilidade, é difícil saber quem deve pagar esse aluguel. Por exemplo, o contrato CryptoKitties representa dezenas de milhares de jogadores com quase dois milhões de Kitties e mais de 111MB de dados na blockchain.\nA Ethereum não fornece nenhuma maneira de cobrar aluguel de maneira justa a todos os proprietários da Kitty.\nUsando um modelo de propriedade direta via Tipos de Recursos, cada Kitty seria armazenada dentro da conta de seu proprietário, juntamente com os outros ativos dessa pessoa.\nA responsabilidade de quem precisa pagar por esse armazenamento é clara.\nAlém disso, usuários individuais (assistidos pelo software cliente) podem arquivar ativos não utilizados para reduzir seus custos e reduzir a carga na rede.\n\n# **Propriedade flexível**\n\nO uso de um modelo de contabilidade para propriedade limita os tipos de relacionamentos com proprietários disponíveis.\nPor exemplo, o ERC-721 define um modelo de propriedade para NFTs que pressupõe que apenas endereços Ethereum podem possuir uma NFT.\nNo entanto, a ideia de um ativo em si possuir outros ativos (como um CryptoKitty que possui um par bacana de óculos de sol ) é muito interessante em alguns casos de uso, e exigiu a criação de uma nova especificação (ERC-998).\nO ERC-998 é muito poderoso, mas também é muito mais complicado que o ERC-721. Implementá-lo adequadamente é muito difícil e aplicar retroativamente seus recursos aos ativos existentes do ERC-721 é efetivamente impossível.\nO modelo de propriedade direta permite que qualquer ativo modelado usando Tipos de Recursos seja armazenado com segurança em qualquer lugar do sistema, incluindo “dentro” de outros ativos, quando apropriado.\nTodas as garantias de segurança e valor podem ser mantidas pelo sistema de tempo de execução, enquanto desbloqueia a flexibilidade criativa para desenvolvedores sem complexidade indevida.\n\n# **Segurança baseada em capacidade**\n\nOs tipos de recursos fornecem todas as garantias necessárias para implementar o conceito de “Capacidades” do\_[Segurança baseada em capacidade](https://en.wikipedia.org/wiki/Capability-based_security)\_modelo. Os recursos são um mecanismo poderoso para definir sistemas seguros e podem facilitar a adesão ao\_[Princípio do Menos Privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege)\_(uma prática recomendada comum em sistemas de segurança).\nOs modelos de segurança baseados em capacidade são geralmente considerados muito mais fáceis de raciocinar sobre, (o que aumenta a segurança), permitindo maior flexibilidade.\n\n# **Eliminando erros de reentrada**\n\n[O bug de contrato inteligente mais famoso da história da Ethereum](https://www.wired.com/2016/06/50-million-hack-just-showed-dao-human/)\_foi devido a um problema de reentrada, e os desenvolvedores de solidity precisa estar constantemente vigilantes contra a introdução de fluxo lógico suscetível a ataques de reentrada.\nFelizmente, os métodos definidos nos recursos dos objetos não podem ser vítimas de nenhuma exploração de reentrada.\nParece uma afirmação ousada! No entanto, segue naturalmente como os Recursos são definidos: cada Recurso tem um único proprietário e somente o proprietário de um Recurso pode chamar os métodos nele.\nSe um método de recurso estiver “na pilha”, sabemos que a referência de propriedade única a esse objeto já está em uso simplesmente não é possível que qualquer código que chamamos de dentro desse método, no entanto indiretamente, obtenha uma segunda referência a esse objeto para fazer uma chamada de método reentrante.\nObviamente, trabalhar diretamente com o estado compartilhado global (ignorando o uso de objetos de Recursos) ainda pode criar um código vulnerável a erros de reentrada.\nÉ por isso que o estilo idiomático de cadência é usar Recursos para todo o estado compartilhado autores de contratos inteligentes que adotam Recursos nunca precisam pensar em bugs de reentrada novamente!\n\n# **Mais sobre recursos**\n\nPara aprofundar os recursos e a programação orientada a recursos, você pode:\n\n*   Leia o\_[Mover papel técnico](https://developers.libra.org/docs/assets/papers/libra-move-a-language-with-programmable-resources/2019-09-26.pdf)[documentos do desenvolvedor](https://developers.libra.org/docs/move-overview) e\n*   Leia o\_[Documentos do desenvolvedor de Flow](https://docs.onflow.org/docs)[Introdução à Cadence](https://docs.onflow.org/docs/introduction)\n*   Aprenda a linguagem de programação Cadence em\_[Flow Playground](https://www.onflow.org/play)\n"
excerptBr: >-
  O objetivo da Dapper Labs é usar a tecnologia descentralizada, especificamente
  non-fungible tokens (NFTs), para dar poder aos criadores e permitir que eles
  monetizem e promovam o próprio trabalho de maneira mais eficiente. 
title: ¿Cómo funciona la programación orientada a recursos?
author: content/data/team/people/diego-fornalha.json
excerpt: >-
  El objetivo de Dapper Labs es utilizar tecnología descentralizada,
  específicamente tokens no fungibles (NFT), para empoderar a los creadores y
  permitirles monetizar y promover su trabajo de manera más eficiente.
---
Entre las opciones de EVM o WASM, son una buena opción para activos digitales.

Etiquetar algo como un "recurso" le informa al ambiente de programación que esta estructura de datos representa algo de valor tangible y que todo código que interactúe con esta estructura de datos necesita seguir una serie de reglas especiales que mantendrán el valor de esa estructura de datos.

Las reglas son:

1.  Cada recurso existe exactamente en un lugar en cualquier momento.

2.  La propiedad de un recurso está definida por dónde se almacena.

3.  El acceso a los métodos en un recurso está limitado al propietario.

Para aplicar correctamente estas reglas, se puede permitir que el activo más importante de la red del token nativo se almacene de manera segura dentro de estructuras de datos controladas por el código enviado por el usuario.

La forma más fácil de pensar en Recursos es pensar en un ejemplo usando un token no fungible (NFT), como un CryptoKitty. Cada CryptoKitty es indivisible, no copiable y puede tener un único propietario directo, que corresponde directamente a la construcción de programación de Recursos.

En un modelo de Ledger como Ethereum, todos los CryptoKitties se almacenan en un único contrato inteligente como una lista gigante. En el Modelo de Recursos, el propio Kitty se representa como un objeto de Recursos y se almacena directamente en la cuenta que lo posee.




En el modelo de Recursos, el propio CryptoKitty se representa como un objeto de Recursos y se almacena directamente en la cuenta que lo posee.

Al igual que en el mundo físico, la propiedad se representa por medio de la posesión. No es necesario buscar en un libro central para ver si se posee algo, se almacena en la cuenta o no.

Y si se posee, se puede transferir o controlar de otra manera, y si no se posee, no hay forma de capturarlo o cambiarlo.

```
kotlinCopy code
```

*Nota: para mantener el enfoque en las diferencias entre los modelos de contabilidad y propiedad directa, los dos ejemplos anteriores ignoran cuestiones como el control de acceso, la definición de todas las variables y otros factores con los que el código activo tendría que preocuparse.*

# **Por qué importan los recursos**

Además de la ventaja obvia de incluir abstracciones para gestionar la propiedad, existen varios otros beneficios secundarios derivados del uso de Recursos, entre ellos:

*   **Mayor seguridad**: El modelo de Recursos proporciona una forma más segura de gestionar la propiedad, evitando errores comunes que se producen con la gestión de datos en una estructura de contabilidad. Además, los recursos son más difíciles de duplicar o eliminar por error de programación o código malicioso.

*   **Más eficiencia**: Con el modelo de Recursos, se evita la necesidad de consultar una base de datos centralizada cada vez que se requiere una actualización de propiedad o una transferencia de propiedad. En su lugar, los recursos se transfieren directamente entre las cuentas, lo que reduce la cantidad de operaciones necesarias y aumenta la eficiencia.

*   **Mayor flexibilidad**: El modelo de Recursos permite una mayor flexibilidad en la gestión de la propiedad, lo que permite a los desarrolladores crear nuevos modelos de negocio y aplicaciones que no son posibles con una estructura de contabilidad tradicional.

En resumen, el modelo de Recursos es una forma innovadora de gestionar la propiedad y los activos digitales en una estructura de contabilidad descentralizada. Al utilizar este modelo, los desarrolladores pueden crear aplicaciones más seguras, eficientes y flexibles que permiten a los usuarios tener un mayor control sobre sus propios activos digitales.






