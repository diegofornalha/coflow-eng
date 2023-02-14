---
title: Home
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: full
        padding:
          - pt-0
          - pb-0
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: CtaSection
    colors: colors-b
    elementId: ''
    title: Create your World!
    titlePt: Crie seu Mundo!
    text: |
      Everything and more about Flow!
    textPt: |
      Tudo e mais um pouco sobre Flow!
    actions:
      - type: Button
        label: Contact Us
        altText: Entre em Contato
        url: 'https://wa.me/5521997806363?text=Ol%C3%A1'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
      - type: Link
        label: Join Discord
        altText: Entre no Discod
        url: 'https://discord.com/invite/hT8EpC5mUN'
        showIcon: true
        icon: chevronRight
        iconPosition: left
        elementId: ''
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
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
    backgroundImage:
      type: BackgroundImage
      url: /images/Lil Miquela flow blockchain.png
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 68
    backgroundSize: full
addTitleSuffix: true
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: website
  - type: MetaTag
    property: 'og:image:alt'
    content: CoFlow
  - type: MetaTag
    property: 'og:url'
    content: 'https://coflow.com.br'
  - type: MetaTag
    property: 'og:site_name'
    content: CoFlow
  - type: MetaTag
    property: 'twitter:site'
    content: '@diegofornalha'
---
