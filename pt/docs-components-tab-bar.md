---
lang: pt
layout: docs
permalink: /pt/docs/components/tab-bar
title: TabBar
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# TabBar

`TabBar` é utilizado dentro do componente `Tabs` para facilitar os usuários a alternarem rapidamente entre as telas.

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|------------|------|---------|----------|
| **onTabPress** | Função chamada ao clicar em uma aba | Function | (): void | false |
| **renderLabel** | Função que retorna um componente personalizado para ser usado como label | Function(scene: Object) | (): void | false |
| **renderIcon** | Função que retorna um componente personalizado para ser usado como icon | Function(scene: Object) | (): void | false |
| **renderIndicator** | Função que retorna um componente personalizado para ser usado como indicator | Function(scene: Object) | (): void | false |
| **scrollEnabled** | Whether to enable scrollable tabs | Boolean | true | false

**Style names**

`TabBar` doesn't have specific style names.

**Styles**

| Declaration | Description |
|-------------|------------|
| **tab** | Style object for the individual tabs in the tab bar |
| **label** | Style object for the tab item label |
| **icon** | Style object for the tab item icon |
| **indicator** | Style object for the active indicator |

> **Note**
> Ambos `label` e `icon` objetos de estilo possuem as propriedades `activeColor` e `inactiveColor` que mudam quando sua respectiva aba está em foco. Estas podem ser gerenciados atráves das [variáveis do tema]({{ baseUrl }}/docs/theme/variables) e [sobrescritas]({{ baseUrl }}/docs/theme/overwriting-variables)

## JSX Declaration

``` jsx
{% raw %}
<TabBar
  scrollEnabled={false}
  renderIcon={({ scene }) => <Icon name={scene.icon} size={30} />}
  renderLabel={({ scene }) => <Text>{scene.label}</Text>}
  onTabPress={() => console.log('Tab pressed')}
/>
{% endraw %}
```

## Snack Example

Em breve.
