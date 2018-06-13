---
lang: pt
layout: docs
permalink: /pt/docs/components/tabs
title: Tabs
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Tabs

`Tabs` torna fácil a transição entre views sem a necessidade de navegar para uma nova tela.

## API

**Props**

| Declaration | Description | Type | Default |
|--------------|--------------|------|----------|
| **tabBarPosition** | Define a posição do [TabBar]({{ baseUrl }}/docs/components/tab-bar) como `top` ou `bottom` | String | `top` |
| **initialTab** | Index da aba inicial | Number | 0 |
| **scrollEnabled** | Whether to enable scrollable tabs | Boolean | true |
| **renderTabBar** | Função que retorna um componente personalizado para a `TabBar` | Function(props) | (): void |
| **renderIcon** | Função que retorna um componente personalizado para o icone da aba | Function(scene: Object) | (): void |
| **renderLabel** | Função que retorna um componente personalizado para o label da aba | Function(scene: Object) | (): void |
| **onTabPress** | Função chamada ao clicar em uma aba | Function | (): void |
| **onChange** | Função chamada quando a aba atual for alterada | Function(index: Number) | (): void |

**Style name**

| Declaration  | Description |
|--------------|--------------|
| **dark** | Altera o estilo do componente `TabBar` para um tema escuro. Defne `backgroundColor` para `darkColor`, cor do `label`, `icon` e `indicator` para `paperColor` como definido no tema. |

### Tab

Componente que envolve o conteúdo de cada aba.

**Style name**

`Tab` não possui style names específicos.

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **key** | Chave única para o componente | String | - |
| **label** | Label da aba | String | - |
| **icon** | Icone da aba [Lista de icones disponíveis]({{ baseUrl }}/docs/components/icons) | String | - |

## JSX Declaration

```jsx
<Tabs>
  <Tab label="Tab #1">
    <Text>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </Text>
  </Tab>
  <Tab label="Tab #2">
    <Text>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </Text>
  </Tab>
</Tabs>
```

## Snack Example

Em breve.
