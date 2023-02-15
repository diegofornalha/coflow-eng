---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
titlePt: Interagindo com Flow usando Ruby
colors: colors-d
date: '2023-01-30'
featuredImage:
  type: ImageBlock
  url: /images/23/01/CAPAS-Interagindo com Flow usando Ruby.png
  altText: Interagindo com Flow usando Ruby
  caption: Interagindo com Flow usando Ruby
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/CAPAS-Interagindo com Flow usando Ruby.png
  altText: Interagindo com Flow usando Ruby
  caption: Interagindo com Flow usando Ruby
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: >
  Ele é uma criptomoeda que usa tecnologias avançadas para criar uma rede
  descentralizada para aplicativos financeiros. E você sabe o que é incrível?
  Você pode interagir com ela usando o Ruby! Isso mesmo, você não precisa se
  preocupar em ficar limitado a linguagens específicas, com o Ruby você tem uma
  gama ainda maior de escolhas.


  Neste artigo, vamos explorar como interagir com o Flow usando a linguagem de
  programação Ruby. E o melhor de tudo, o código deste artigo está disponível no
  Github para você brincar à vontade.


  Antes de começarmos, verifique se você tem o Ruby instalado. No terminal,
  digite "ruby -v" e você verá a versão atual. Caso não tenha, você pode
  baixá-lo em [https://www.ruby-lang.org](https://www.ruby-lang.org/).


  Vamos criar uma pasta para o nosso projeto e chamá-la de "flow-ruby". Usaremos
  o gRPC e Protocol Buffers para interagir com o nó Flow. E para isso, vamos
  instalar as gems grpc, grpc-tools e json.


  Depois, vamos clonar o repositório do Flow no GitHub e gerar o código Ruby a
  partir dos arquivos .proto. Copie a pasta flow gerada para dentro da pasta
  flow-ruby.


  Agora é hora de abrir o seu editor de código favorito e criar um novo arquivo
  chamado "flow.rb". Adicione o código abaixo:


  class Flow

  def initialize(node\_address)

  @stub = Access::AccessAPI::Stub.new(node\_address,
  :this\_channel\_is\_insecure)

  end


  def ping

  req = Access::PingRequest.new

  @stub.ping(req)

  end


  def get\_account(address)

  req = Access::GetAccountAtLatestBlockRequest.new(address: to\_bytes(address))

  res = @stub.get\_account\_at\_latest\_block(req)

  res.account

  end


  def execute\_script(script, args = \[])

  req = Access::ExecuteScriptAtLatestBlockRequest.new(

  script: script,

  arguments: args

  )

  res = @stub.execute\_script\_at\_latest\_block(req)

  parse\_json(res.value)

  end


  end


  E pronto! Agora você tem uma classe Flow para interagir com a rede Flow usando
  Ruby. Lembre-se, essa é apenas uma amostra básica do que é possível fazer,
  então sinta-se livre para explorar e criar coisas incríveis!
metaDescription: null
socialImage: null
excerptBr: 'Você já ouviu falar do Flow? '
title: Interactuando con Flow usando Ruby
excerpt: ¿Has oído hablar de Flow?
---
