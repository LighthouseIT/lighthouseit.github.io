---
lang: pt
layout: docs
permalink: /pt/docs/components/navigation-header
title: NavigationHeader
section: Documentation
---

# NavigationHeader

Localizado no topo do conteúdo da tela e abaixo do `StatusBar`, fornece ao usuário a possibilidade de navegar entre telas, pesquisar, voltar e uma série de outras funcionalidades.

> `NavigationHeader` funciona em conjunto do [react-navigation](https://reactnavigation.org/) 2.0.0 ou superior. Se você não utiliza o `react-navigation` como biblioteca de navegação em seu projeto, nós recomendamos que não utilize esse componente em seu projeto.

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|------------|------|---------|----------|
| **title** | Texto que será exibido como título do cabeçalho | String | - | false |
| **hasDrawer** | Renderiza um `Button Icon` (sanduiche) que chama a função `this.props.navigation.openDrawer()` para abrir o `NavigationDrawer` | Boolean | false | false |
| **hasHistory** | Renderiza uma `Button Icon` (seta para equerda) que chama a função `this.props.navigation.goBack()` e volta para a tela anterior. | Boolean | false | false |
| **centerComponent** | Renderiza um componente personalizado que substitui o componente `title` default | Function(screenProps: Object) | (): void | false |
| **leftComponent** | Renderiza um componente personalizado no lado esquerdo do cabeçalho | Function(screenProps: Object) | (): void | false |
| **rightComponent** | Renderiza um componente personalizado no lado direito do cabeçalho | Function(screenProps: Object) | (): void | false |

> **Note**
> `hasDrawer` e `hasHistory` não podem ser utilizados ao mesmo tempo.

**Style names**

| Declaration  | Description  |
|--------------|--------------|
| **featured** | Define o `backgroundColor` para `featuredColor` como definido no tema. |
| **dark** | Define o `backgroundColor` para `darkColor` como definido no tema. |
| **paper** | Define o `backgroundColor` para `paperColor` como definido no tema. |

## JSX Declaration

``` jsx
<Screen headerComponent={<NavigationHeader title="SCREEN TITLE" hasDrawer />}>
  <Text>A beautiful screen</Text>
</Screen>
```

## Snack Example

Em breve.
