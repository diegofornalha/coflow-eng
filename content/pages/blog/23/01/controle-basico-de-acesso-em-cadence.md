---
layout: PostLayout
metaTitle: Controle básico de acesso em Cadence
addTitleSuffix: true
metaTags: []
colors: colors-d
date: '2023-01-20'
featuredImage:
  type: ImageBlock
  url: /images/23/01/Controle básico de acesso em Cadence diegofornalha.png
  altText: Controle básico de acesso em Cadence
  caption: >-
    O controle de acesso em contratos inteligentes escritos em Cadence, uma
    linguagem de programação para a plataforma Flow. O controle de acesso é a
    restrição de acesso a campos, funções e tipos em um contrato para
    determinados escopos e usuários e é importante para evitar vulnerabilidades
    no código. O Cadence fornece duas camadas de controle de acesso: baseado em
    palavras-chave e baseado em capacidade. As palavras-chave "pub" e
    "access(all)" permitem que uma declaração seja acessível em todos os
    escopos, enquanto "in" e "access(self)" restringem o acesso a um escopo
    específico. O controle de acesso baseado em capacidade permite que um
    contrato conceda ou negue acesso a outros contratos com base em suas
    capacidades específicas. É recomendado que os desenvolvedores tenham um
    entendimento completo do controle de acesso em Cadence antes de implantar
    seus projetos na rede principal.
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/Controle básico de acesso em Cadence diegofornalha.png
  altText: Controle básico de acesso em Cadence
  caption: >-
    O controle de acesso em contratos inteligentes escritos em Cadence, uma
    linguagem de programação para a plataforma Flow. O controle de acesso é a
    restrição de acesso a campos, funções e tipos em um contrato para
    determinados escopos e usuários e é importante para evitar vulnerabilidades
    no código. O Cadence fornece duas camadas de controle de acesso: baseado em
    palavras-chave e baseado em capacidade. As palavras-chave "pub" e
    "access(all)" permitem que uma declaração seja acessível em todos os
    escopos, enquanto "in" e "access(self)" restringem o acesso a um escopo
    específico. O controle de acesso baseado em capacidade permite que um
    contrato conceda ou negue acesso a outros contratos com base em suas
    capacidades específicas. É recomendado que os desenvolvedores tenham um
    entendimento completo do controle de acesso em Cadence antes de implantar
    seus projetos na rede principal.
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
  O controle de acesso em contratos inteligentes escritos em Cadence, uma
  linguagem de programação para a plataforma Flow. O controle de acesso é a
  restrição de acesso a campos, funções e tipos em um contrato para determinados
  escopos e usuários e é importante para evitar vulnerabilidades no código. O
  Cadence fornece duas camadas de controle de acesso: baseado em palavras-chave
  e baseado em capacidade. As palavras-chave "pub" e "access(all)" permitem que
  uma declaração seja acessível em todos os escopos, enquanto "in" e
  "access(self)" restringem o acesso a um escopo específico. O controle de
  acesso baseado em capacidade permite que um contrato conceda ou negue acesso a
  outros contratos com base em suas capacidades específicas. É recomendado que
  os desenvolvedores tenham um entendimento completo do controle de acesso em
  Cadence antes de implantar seus projetos na rede principal.
socialImage: /images/23/01/Controle básico de acesso em Cadence diegofornalha.png
titlePt: Controle básico de acesso em Cadence
excerptBr: >-
  O controle de acesso em contratos inteligentes escritos em Cadence, uma
  linguagem de programação para a plataforma Flow. 
title: Control básico de acceso en Cadence
excerpt: >-
  El control de acceso en contratos inteligentes escritos en Cadence, un
  lenguaje de programación para la plataforma Flow.
markdown_content_pt: "![](https://miro.medium.com/max/347/1*M7p33-EGZPFdKcX7oR6mDg.jpeg)\n\nEsto es solo para que el administrador presione. No presione. Por favor. Bonito, por favor.\n\n¡Llegamos a la segunda semana sin olvidar el blog! ¡Toma eso, enemigos! \U0001F64C\n\nSi eres nuevo aquí, ¡bienvenido! Este es un blog semanal sobre Cadence, el nuevo lenguaje de programación de vanguardia de Flow para contratos inteligentes. Recomiendo comenzar con mi primer artículo sobre materiales para principiantes antes de leer esto, porque supondré que los lectores ya tienen una comprensión básica de Cadence o simplemente disfrutan de mi estilo de escritura. (¡Estoy halagado!)\n\n# **¿Qué es el control de acceso?**\n\nEl control de acceso es la restricción de campos, funciones y tipos para determinados ámbitos y usuarios. Es extremadamente importante que los desarrolladores lo consideren profundamente para asegurarse de que su código esté protegido contra posibles vulnerabilidades. La tecnología Blockchain ciertamente ha tenido su parte de errores y hazañas, y muchos de ellos podrían haberse evitado con un control de acceso más adecuado.\n\nCreo que todo desarrollador debe tener una comprensión completa del control de acceso de Cadence antes de siquiera pensar en implementar su proyecto en la red principal. ¡Conozco los altos estándares, pero estamos tratando con cosas de valor real aquí! (y la mayoría de ustedes probablemente no me escuchará de todos modos y solo copiará el código Top Shot sin pensarlo)\n\nA diferencia de la mayoría de los lenguajes, Cadence proporciona dos capas diferentes de control de acceso, ambas incorporadas en el lenguaje:\n\n*   [Control de acceso basado en palabras clave](https://docs.onflow.org/cadence/language/access-control/)\n\n*   [Control de acceso basado en capacidades](https://docs.onflow.org/cadence/language/capability-based-access-control/)\n\nRecomendaría revisar esto antes de leer más en esta publicación.\n\nNo proporcionaré una explicación detallada de los diferentes tipos de control de acceso en esta publicación, pero hablaré sobre algunas de las razones para usarlos y algunos ejemplos de cómo se pueden utilizar efectivamente en contratos inteligentes.\n\n# **Dos tipos de control de acceso en Cadence**\n\n## **Control de acceso basado en palabras clave**\n\nEl primer tipo de control de acceso en Cadence es el tipo que la mayoría de ustedes probablemente conoce: el uso de palabras clave para especificar el nivel de acceso de un campo específico.\n\nCadence proporciona cuatro palabras clave diferentes para especificar los niveles de acceso. Se requiere que cada campo, función y tipo especifique un nivel de acceso.\n\n`pub` o `access(all)` significa que la declaración es accesible / visible en todos los ámbitos. Ambos hacen lo mismo, pero `pub` es más corto, por lo que se recomienda usarlo.\n\nPor ejemplo, un campo público en un tipo&#x20;\n\npuede ser accedido utilizando la sintaxis de acceso `(object.field)` en una instancia del tipo en un ámbito externo. Esto no permite que la declaración sea públicamente modificable.\n\nPor lo tanto, si tuviera este contrato implementado en mi cuenta:\n\n```\n\npub contract HelloWorld {\n    pub let greeting: String\n    pub let greetingsByLanguage: {String: String}\n    pub fun returnGreeting(): String {\n        return self.greeting\n    }\n}\n\n\n```\n\nEn una transacción o script, cualquier persona que importe el contrato de mi cuenta puede leer el campo `greeting`, el diccionario `greetingsByLanguage` o llamar a la función `returnGreeting`, pero no pueden reemplazar todo el valor de estos campos, con una excepción.\n\nSi hay un diccionario o campo de matriz público, incluso si no se puede reemplazar por alguien como esto,\n\n```\n\nHelloWorld.greetingsByLanguage = { // No se puede\n\n```\n\nun elemento aún se puede modificar por alguien como esto.\n\n```\n\nHelloWorld.greetingsByLanguage[\"Español\"] = \"Hola\" // posible\n```\n\nPor esta razón, se recomienda encarecidamente hacer todos los campos en contratos y tipos compuestos privados, `access(self)`, de manera predeterminada. Puedes definir configuradores y getters para tus campos. Veamos cómo se ve esto en el contrato anterior.\n\n```\n\npub contract HelloWorld {\n    pub var _greeting: String\n    pub var _greetingsByLanguage: {String: String}\n\n    init() {\n        self._greeting = \"Hello, World!\"\n        self._greetingsByLanguage = {\n            \"en\": \"Hello\",\n            \"fr\": \"Bonjour\",\n            \"it\": \"Ciao\",\n            \"de\": \"Hallo\"\n        }\n    }\n\n    pub fun returnGreeting(): String {\n        return self._greeting\n    }\n\n    pub fun setGreeting(newGreeting: String) {\n        self._greeting = newGreeting\n    }\n\n    pub fun getGreetingsByLanguage(): {String: String} {\n        return self._greetingsByLanguage\n    }\n\n    pub fun setGreetingsByLanguage(newGreetingsByLanguage: {String: String}) {\n        self._greetingsByLanguage = newGreetingsByLanguage\n    }\n}\n\n```\n\nEn este ejemplo, he hecho los campos `_greeting` y `_greetingsByLanguage` privados y he definido configuradores y getters para ellos. De esta manera, puedo controlar cómo se accede y modifica cada campo.\n\n## **Control de acceso basado en capacidades**\n\nEl segundo tipo de control de acceso en Cadence es el control de acceso basado en capacidades. En lugar de utilizar palabras clave para controlar el acceso, este enfoque utiliza capacidades para restringir el acceso.\n\nEn resumen, una capacidad es un objeto que se utiliza para identificar y controlar el acceso a un recurso. Solo los objetos que tienen una capacidad para un recurso pueden acceder a él. Si un objeto no tiene una capacidad para un recurso, no puede acceder a él.\n\nPara usar el control de acceso basado en capacidades en Cadence, primero debes definir la estructura de capacidad. Esta estructura debe incluir campos para identificar el recurso y el permiso asociado con la capacidad. Por ejemplo, aquí hay una estructura de capacidad simple para controlar el acceso a una cuenta:\n\n```\n\nstruct AccountCapability {\n    let accountID: String\n    let capability: Capability<&AnyResource{Account}>\n}\n\n```\n\nEn este ejemplo, la estructura `AccountCapability` contiene dos campos públicos: \"canDeposit\" y \"canWithdraw\". Ambos campos son de tipo booleano, lo que significa que solo pueden tener dos posibles valores: verdadero o falso.\n\nEl campo \"canDeposit\" indica si el titular de la cuenta puede hacer depósitos, mientras que el campo \"canWithdraw\" indica si el titular de la cuenta puede hacer retiros. Estos campos públicos son útiles porque permiten a otros objetos interactuar con la estructura AccountCapability y determinar qué acciones son posibles para un determinado titular de cuenta.\n\nAdemás, al hacer que estos campos sean públicos, se hace más fácil el acceso a ellos desde otros objetos. En otros casos, podría ser necesario agregar métodos a la estructura para obtener o establecer los valores de estos campos, lo que agregaría una complejidad adicional.\n\nEn general, el uso de campos públicos en estructuras o clases debe ser cuidadosamente considerado. Si los campos representan información que es crítica para el correcto funcionamiento del objeto, entonces es posible que sea mejor mantenerlos como privados y proporcionar métodos para acceder a ellos. Sin embargo, en otros casos, puede ser apropiado hacer que los campos sean públicos para facilitar el acceso y la interoperabilidad con otros objetos.\n"
author: content/data/team/people/diego-fornalha.json
---
![https://miro.medium.com/max/347/1\*M7p33-EGZPFdKcX7oR6mDg.jpeg](https://miro.medium.com/max/347/1\*M7p33-EGZPFdKcX7oR6mDg.jpeg)

Isso é apenas para o administrador pressionar. Não pressione. Por favor. Pretty Please

Chegamos à segunda semana sem esquecer o blog! Pegue isso, inimigos! 🙌

Se você é novo aqui, seja bem-vindo! Este é um blog semanal sobre o Cadence, o novo idioma de ponta do Flow para contratos inteligentes. Eu recomendo começar com [meu primeiro post sobre materiais para iniciantes](https://joshuahannan.medium.com/taking-your-first-steps-with-cadence-19dde86bbd0) antes de ler isso, porque assumirei que os leitores já têm um entendimento básico de Cadence ou simplesmente apreciam meu estilo de escrita. ( Estou lisonjeado! )

# **O que é controle de acesso?**

Controle de acesso é a restrição de campos, funções e tipos para determinados escopos e usuários. É extremamente importante que os desenvolvedores considerem profundamente para garantir que seu código seja protegido contra possíveis vulnerabilidades. Tecnologia Blockchain certamente [teve seu quinhão de bugs e façanhas](https://forum.openzeppelin.com/t/list-of-ethereum-smart-contracts-post-mortems/1191) e muitos deles poderiam ter sido impedidos com um controle de acesso mais bem gerenciado.

Acredito que todo desenvolvedor deve ter um entendimento completo do controle de acesso Cadence antes mesmo de pensar em implantar seu projeto na rede principal. Altos padrões que conheço, mas estamos lidando com coisas com valor real aqui! ( e a maioria de vocês provavelmente não vai me ouvir de qualquer maneira e apenas copie o código Top Shot sem pensar nele )

Ao contrário da maioria dos idiomas, o Cadence fornece duas camadas diferentes de controle de acesso, ambas incorporadas ao idioma:

*   [Controle de acesso baseado em palavras-chave](https://docs.onflow.org/cadence/language/access-control/)
*   [Controle de acesso baseado em capacidade](https://docs.onflow.org/cadence/language/capability-based-access-control/)

Eu recomendaria conferir isso antes de ler mais desta postagem.

Não vou fornecer uma explicação detalhada dos diferentes tipos de controle de acesso neste post, mas vou falar sobre alguns dos motivos para utilizá-los, e alguns exemplos de como eles podem ser usados efetivamente em contratos inteligentes.

# **Dois tipos de controle de acesso em Cadence**

## **Controle de acesso por palavra-chave**

O primeiro tipo de controle de acesso em Cadence é o tipo com o qual a maioria de vocês provavelmente conhece: Usando palavras-chave para especificar o nível de acesso de um campo específico.

O Cadence fornece quatro palavras-chave diferentes para especificar os níveis de acesso. Cada campo, função e tipo é necessário para especificar um nível de acesso.

`pub` ou `access(all)` significa que a declaração é acessível / visível em todos os escopos. Cada um faz a mesma coisa, mas `pub` é mais curto, por isso é recomendável usar.

Por exemplo, um campo público em um tipo pode ser acessado usando a sintaxe de acesso `(`object.field`)` em uma instância do tipo em um escopo externo. Isso não permite que a declaração seja publicamente gravável.

Portanto, se eu tivesse esse contrato implantado na minha conta:

```
contrato de pub HelloWorld {    pub let saudação: Cordas    pub let saudaçõesByLanguage: { String: String }    retorno divertido do pubGreeting ( ): Corda {
        retornar self.greeting
    }}
```

Em uma transação ou script, qualquer pessoa que importe o contrato da minha conta poderá ler o `greeting` campo, `greetingsByLanguage` dicionário ou ligue para o `returnGreeting` função, mas eles não podem substituir o valor inteiro nesses campos, com uma exceção.

Se houver um dicionário público ou campo de matriz, mesmo que não possa ser substituído por alguém como este,

```
HelloWorld.greetingsByLanguage = { // Não é possível
```

um elemento ainda pode ser modificado por alguém como este.

```
HelloWorld.greetingsByLanguage [ "Español" ] = "Hola" // possível
```

Por esse motivo, é altamente recomendável tornar todos os campos em contratos e tipos compostos privados, `access(self)`, por padrão. Você pode definir configuradores e getters para seus campos. Vamos ver como isso se parece no contrato anterior.

```
contrato de pub HelloWorld {    access ( self ) let greeting: String    access ( self ) let greetingsByLanguage: { String: String }    retorno divertido do pubGreeting ( ): Corda {
        retornar self.greeting
    }    pub fun returnLanguageGreeting ( _ idioma: String ): String? {
        retornar self.greetingsByLanguage [ language ]
    }}
```

Isso usa `access(self)`, o que significa que a declaração é acessível / visível apenas nos escopos atual e interno. Por exemplo, um `access(self)` O campo só pode ser acessado por funções do tipo que fazem parte, não por código em um escopo externo. Isso permite que o desenvolvedor seja capaz de definir explicitamente como seus campos são acessados por getters e setters.

As outras duas palavras-chave de acesso são um pouco exclusivas da Cadence.

`access(contract)`significa que a declaração é acessível / visível apenas no escopo do contrato que a definiu. Isso significa que outros tipos e funções definidos no mesmo contrato podem acessá-lo, mas não outros contratos na mesma conta.

Você poderia ter algo assim:

```
contrato de pub HelloWorld {    pub struct Olá {        acesso ( contrato ) var saudação: corda    }    pub fun returnGreeting ( _ olá: Olá ): Corda {
        voltar olá.
    }}
```

Nesta situação, se você tivesse uma instância do `Hello` struct, você não seria capaz de obter diretamente o `greeting` campo usando `Hello.greeting`, mas desde o `returnGreeting` função é definida no mesmo contrato, você pode dar a ela `Hello` estruture e obtenha o `greeting` campo dessa maneira:

```
Olá, Olá, Olá, Olá, Olá, Olá, = "hola" (// inválido porque o campo é contrato de acesso
deixe saudação = helloObject.greeting// Válido: a função de contrato pode acessar o campo e
// devolvê-lo
deixe a saudação = HelloWorld.returnGreeting ( helloObject )// saudação é "hola"
```

Este é apenas um exemplo simples, mas tenho certeza de que você pode imaginar uma utilização mais sofisticada dessa capacidade.

`access(account)`significa que a declaração é acessível / visível apenas no escopo de toda a conta onde é definida. As contas de fluxo podem ter qualquer número de contratos de cadência implantados para eles, portanto, essa palavra-chave significa que quaisquer outros contratos na mesma conta podem acessá-lo.

Com este campo, você pode declarar campos em contratos como `access(account)` , sabendo que você deseja que eles sejam “ privados ” por enquanto, mas mantendo aberta a possibilidade de implantar um novo contrato posteriormente que possa interagir com o primeiro contrato de novas maneiras. Você também pode manter seus contratos mais simples, agrupando apenas funcionalidades semelhantes em um contrato, mas tendo contratos relacionados ainda na mesma conta que podem compartilhar algumas informações entre si.

Essa palavra-chave é a que tenho menos experiência em usar, mas recentemente tenho pensado em mais maneiras de usá-la. Se você tiver algum exemplo de onde o usou, deixe um comentário e me avise!

## **Controle de acesso baseado em capacidade**

A outra forma principal de controle de acesso em Cadence utiliza [Segurança baseada em capacidade](https://en.wikipedia.org/wiki/Capability-based_security), um modelo de segurança que não é usado com muita frequência. A maioria dos modelos de segurança ( e a maioria das outras linguagens de programação de contratos inteligentes ) restringem o acesso com base em *quem você é*, mas a segurança da capacidade é mais sobre *o que você possui*.

Vamos olhar para uma analogia:

![https://miro.medium.com/max/700/1\*uAtIjsm7b2QMc2f7bknWOg.png](https://miro.medium.com/max/700/1\*uAtIjsm7b2QMc2f7bknWOg.png)

tantas escolhas!

Imagem que você está projetando um dispositivo físico para o governo usar para gerenciar o acesso a importantes funcionalidades internas, como imprimir dinheiro, declarar guerra, pagar impostos etc. Todos no país precisam ter acesso a algum subconjunto dessa funcionalidade, mas a especificação de acesso de cada pessoa é diferente de muitas das outras pessoas. Por exemplo, todos precisam ter acesso à funcionalidade “ pagar impostos ”, mas apenas funcionários eleitos do governo precisam ter acesso à “ declarar guerra ” e assim por diante.

Se estivéssemos projetando esse sistema da maneira que a maioria dos contratos inteligentes gerencia o acesso, com uma lista que indica quem tem acesso a quê, então esse dispositivo físico se pareceria com uma placa de controle gigante em um local público com milhares de botões diferentes para cada funcionalidade sobre a qual o governo tem algum controle. Qualquer pessoa na Terra seria capaz de caminhar até este quadro e pressionar qualquer um dos botões, mas o botão executaria algum tipo de varredura biométrica ( como uma varredura de íris ou impressão digital ) para verificar se essa pessoa tem autoridade para executar a ação. Se eles passarem na verificação, a funcionalidade acontecerá. Existe até um botão público para alterar as regras de acesso!

Este é um exemplo artificial, mas tenho certeza de que você pode ver os problemas com isso. Se algum dos botões não foi projetado corretamente ou está com defeito, qualquer pessoa na Terra seria capaz de explorar o botão quebrado para fazer coisas que não deveria!

Uma solução mais eficaz para esse problema seria fornecer a cada cidadão um dispositivo que contenha apenas os botões de funcionalidade que eles podem acessar. Em seguida, cada cidadão armazena esse dispositivo em um local seguro em sua casa ou seguro que somente eles podem acessar. Agora, se houver uma vulnerabilidade em um dos botões, um invasor tem a difícil tarefa de invadir cada casa dos participantes e se proteger individualmente, o que é muito mais difícil e demorado.

É isso que os recursos realizam em Cadence. Em vez de criar uma lista especial de controle de acesso com regras opacas e complexas, o controle de acesso é incorporado aos fundamentos do sistema de tipos Cadence. Os usuários obtêm objetos de recursos especiais que armazenam em sua conta que definem qual funcionalidade eles podem acessar.

Usando o exemplo acima, criaríamos um `HelloAdmin` recurso que permite ao proprietário atualizar o `greeting` campo:

```
contrato de pub HelloWorld {    // Isso precisa ser um acesso ( contract ) para que o recurso definido em
    // o mesmo contrato pode acessá-lo
    acesso ( contrato ) var saudação: corda    retorno divertido do pubGreeting ( ): Corda {
        retornar self.greeting
    }    // Somente o proprietário deste objeto de recurso pode chamar essa função
    recurso de pub HelloAdmin {
        pub fun modificGreeting ( _ newGreeting: String ) {
            HelloWorld.greeting = newGreeting
        }
    }
}
```

Os atacantes nem sequer teriam a oportunidade de explorar muitos bugs em potencial, porque o código nem sequer é acessível a eles para tentar explorar em primeiro lugar!

Os recursos são um assunto complexo, e estou planejando fazer uma postagem no blog no futuro que seja completamente dedicada a eles. Por enquanto, eu recomendaria verificar [post deste blog](https://medium.com/@kleffew/what-is-capability-based-security-227c6e5483a5) sobre recursos genéricos e [Documentação de capacidade de cadência](https://docs.onflow.org/cadence/language/capability-based-access-control/).

# **Conclusão**

Espero ter deixado alguns dos recursos de controle de acesso do Cadence um pouco mais claros para você.

Compartilhe todos os usos interessantes dos recursos de controle de acesso da Cadence que você fez ou viu outros implementarem!

Se você tiver alguma dúvida, toda a equipe e comunidade do Flow está aqui para apoiá-lo! Não hesite em entrar em contato com nosso servidor Discord, o Flow Forum ou através de um problema no repo Flow Github.

Existem outros tópicos ou projetos interessantes que você sabe que seriam úteis para os recém-chegados ou sobre os quais você gostaria que eu escrevesse uma postagem no blog? Sinta-se à vontade para comentar com suas idéias e eu posso incluí-las em um post futuro!

Artigo original em inglês: https://joshuahannan.medium.com/basic-access-control-in-cadence-28c5765c6ec0
