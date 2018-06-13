---
lang: pt
layout: docs
permalink: /pt/docs/introduction
redirect_from: /pt/docs
title: Introdução
section: Documentação
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}
{% assign translations = site.data.translations[page.lang] %}

# Introdução

Enquanto a [Lighthouse](http://lighthouseit.com.br) continua a crescer, percebemos a necessidade criar ferramentas para acompanhar esse crescimento e também melhorar nossos produtos e serviços. Com isso, acabamos encarando o desafio de aumentar a velocidade de desenvolvimento e em paralelo aumentar a qualidade de nossos aplicativos.

> A [Lighthouse](http://lighthouseit.com.br) é uma startup focada na criação de produtos e serviços para aplicativos móveis desenvolvidos em React Native. Nosso objetivo é que cada app que criamos seja único e passe a impressão de ter sido "feito a mão" 💅

Nosso time de desenvolvedores vem trabalhando constantemente para tornar a construção de apps feito em React Native ainda mais simples e rápido e ao mesmo tempo sem restringir os mesmos de terem designs e funcionalidades únicas.

Por conta desse objetivo decidimos criar um poderoso **Toolkit para React Native** que torne esses objetivos possíveis.

Veja abaixo o que nosso toolkit tem a oferecer:
- [Lighthouse Ignite Boilerplate](#conheça-o-lighthouse-ignite-boilerplate) - Um gerador que possibilida iniciar o desenvolvimento de apps React Native em tempo recorde!
- [UI {{ translations.components }}]({{site.url}}/{{page.lang}}/docs/components) - Uma completa biblioteca de componentes 100% customizaveis.
- [Templates]({{site.url}}/{{page.lang}}/docs/templates) - Diversos templates que incluem Lista de Produtos, Galeria de Images, Carrinho de Compras, etc.
- [{{ translations.theme }}]({{site.url}}/{{page.lang}}/docs/theme) - Customize rapidamente seus aplicativos de maneira rápida e eficiente.
- [{{ translations.utility }}]({{site.url}}/{{page.lang}}/docs/utilities) - Uma biblioteca com diversos utilitários para ajudar durante o desenvolvimento.

## Conheça o Lighthouse Ignite Boilerplate

Para tornar o inicio do desenvolvimento mais eficiente, nós criamos o **Lighthouse Boilerplate**. Se trata de um gerador que utiliza a poderosa [Ignite CLI](https://github.com/infinitered/ignite) que permite a você gerar a estrutura do seu aplicativo em poucos minutos e ainda conta com diversos recursos que auxiliam durante o desenvolvimento.

[Veja todos os recursos disponíveis para você.]({{site.url}}/{{page.lang}}/docs/lighthouse-boilerplate)

## Começando com seu primeiro App

Legal! Vamos começar criando seu primeiro app usando nosso boilerplate.
Mas antes, existem alguns prerrequisitos a serem instalados antes de continuarmos.

#### Prerrequisitos

- [Nodejs and npm](https://nodejs.com)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- exp - `$ npm install -g exp` (Expo CLI)
- react-native-cli - `$ npm install -g react-native-cli`
- ignite-cli - `$ npm install -g ignite-cli`
- [yarn](https://yarnpkg.com/en/docs/getting-started) - `$ npm install -g yarn`

> **Nota**
>
> Se você está em um MacOS talvez precise executar os comandos acima usando `sudo`. Ex.: `sudo npm install -g npm`.
> Tente primeiramente sem usar o `sudo`.

#### Gerando seu App com Ignite CLI + Lighthouse Boilerplate

Em seu terminal, execute o comando `ignite new MyFirstApp --b lighthouse-boilerplate` onde `MyFirstApp` é o nome do seu aplicativo.

> **Nota**
>
> Por padrão, nós usamos o [Expo SDK](https://expo.io/) para construir nossos apps.
> Caso você não deseje usar o Expo SDK, execute o comando acima usando a flag `--skip-expo`. Ex.: `ignite new MyFirstApp --b lighthouse-boilerplate --skip-expo`.

```ShellSession
$ ignite new MyFirstApp -b lighthouse-boilerplate

-----------------------------------------------

🔥 igniting app MyFirstApp
✔ using the Lighthouse boilerplate
✔ added React Native 0.50.4 in 50.35s
✔ added ignite-lighthouse-boilerplate in 48.75s
✔ configured git
✔ ignited MyFirstApp in 80.10s

    Ignite CLI ignited MyFirstApp in 80.10s

    To get started:

      cd MyFirstApp
      exp start
      ignite --help

      Get a coffee and enjoy! ☕️
```
