---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
titlePt: >-
  Gerenciamento de recursos e controle de acesso para contratos inteligentes
  seguros
colors: colors-d
date: '2023-01-29'
featuredImage:
  type: ImageBlock
  url: >-
    /images/23/01/CAPAS-Gerenciamento de recursos e controle de acesso para
    contratos inteligentes seguros.png
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
    /images/23/01/CAPAS-Gerenciamento de recursos e controle de acesso para
    contratos inteligentes seguros.png
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
  É uma linguagem de programação que acelera e simplifica o desenvolvimento de
  contratos inteligentes seguros, introduzindo recursos e capacidades avançadas,
  como composição e aninhamento de recursos. Ao mesmo tempo, o Cadence também é
  responsável por transações e consultas no Flow.


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
author: content/data/team/people/diego-fornalha.json
excerpt: ¿Has oído hablar de Cadence?
title: Gestión de recursos y control de acceso para contratos inteligentes seguros
excerptBr: 'Você já ouviu falar do Cadence? '
---
Es un lenguaje de programación que acelera y simplifica el desarrollo de contratos inteligentes seguros, introduciendo recursos y capacidades avanzadas, como la composición y el anidamiento de recursos. Al mismo tiempo, Cadence también es responsable de transacciones y consultas en Flow.

Gestión de la propiedad
Cadence es fácil de aprender ya que tiene muchas similitudes con otros lenguajes de programación como Rust, TypeScript y Swift. La gran diferencia es que Cadence se trata de recursos.

Los recursos son fáciles de entender porque son la cosa real: un cofre de tokens, un momento NBA Topshot, y porque se almacenan directamente en la cuenta de su propietario. Es por eso que el código Cadence es fácil de leer, mantener y discutir.

Los tipos de recursos son similares a las clases, representan una colección de datos y funciones. Sin embargo, introducen reglas estrictas sobre cómo un desarrollador puede manejarlos:

*   Los recursos solo pueden existir en un lugar exacto y en un momento exacto

*   Los recursos no se pueden copiar

*   Los recursos deben ser destruidos explícitamente

Esto impide la duplicación perjudicial y la eliminación accidental de un recurso, lo que los convierte en una buena opción para aplicaciones de blockchain. El operador "move", un operador especial para transferir recursos, proporciona un indicador visual al manejar recursos.

Capacidades para el control de acceso
Las capacidades son similares a los permisos: controlan las acciones que un usuario puede realizar en un recurso determinado. Si desea llamar a un método de recurso, necesita tener una capacidad válida.

Las capacidades son la puerta de entrada a los recursos. Como una API REST, las capacidades tienen una ruta. Si esa ruta está en el dominio público de una cuenta, cualquier persona puede obtener la capacidad; las capacidades en el dominio privado solo son accesibles por el propietario de la cuenta.

Independientemente de estar en el dominio público o privado, las capacidades siempre se relacionan con un objetivo. Este objetivo puede ser un recurso completo o solo un subconjunto de sus métodos. Para el último caso, las interfaces pueden actuar como objetivo para la capacidad. Así es como las capacidades permiten un control de acceso preciso y legible para los humanos.

Para interactuar con un recurso, debe obtener la capacidad específica antes de tomar prestado su recurso subyacente. Esto se puede hacer dentro de las transacciones.

account.getCapability<...>(/public/MyCapability).borrow()

Interacción con transacciones y scripts
Las transacciones permiten cambiar los datos en la cadena. En Flow, las transacciones se escriben en Cadence. Por lo general, constan de dos pasos: preparar y ejecutar.

transaction {
prepare(acct: AuthAccount) {
...
}
execute {
...
}
}

Para cada suscriptor de la transacción, se pasa la cuenta AuthAccount correspondiente a la fase de preparación de la transacción, proporcionando acceso completo al almacenamiento, así como a los dominios público y privado de la cuenta de suscripción.

Si solo desea consultar datos en la cadena sin modificarlos, puede ejecutar un script. En Cadence, los scripts constan de una función pública principal que se ejecuta en la ejecución:

pub fun main()

() {
log("¡Hola mundo!")
}

[Lecturas adicionales](https://developers.flow.com/cadence/tutorial/01-first-steps)

Si deseas empezar a construir rápidamente con Cadence, revisa la serie oficial de tutoriales en la que crearás un mercado completo con integraciones para tokens fungibles y no fungibles.

[Serie de tutoriales de Cadence](https://developers.flow.com/cadence/language)

Si en algún momento estás buscando una documentación más completa y detallada del lenguaje, consulta la documentación completa de Cadence:

[Referencia del lenguaje de Cadence](https://docs.onflow.org/cadence/language)

En cualquier momento en que quieras experimentar con Cadence sin tener que configurar un entorno de desarrollo local, echa un vistazo al Cadence Playground:

[Playground de Cadence](https://play.onflow.org/)

¡Anímate a probar Cadence para un desarrollo de contratos inteligentes más seguro y eficiente!



