---
lang: pt
layout: docs
permalink: /pt/docs/components/screen
title: Screen
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Screen

`Screen` é utilizado para envolver o conteúdo de telas de navegação. Ele fornece o uso de `NavigationHeaders` e `ScrollView`, como adicional, implementa o componente `KeyboardAvoidingView` por padrão.

## API

**Props**

| Declaration  | Description  | Type  | Default
|--------------|--------------|-------|----------|
| **headerComponent** | Renderiza o componente [NavigationHeader]({{ baseUrl }}/docs/components/navigation-header) | `React.element` | null |
| **scrollEnable** | Quando `false`, a tela não pode ser rolada por meio de interação por toque | Boolean | true |

**Style names**

| Declaration | Description |
|-------------|-------------|
| **transparent** | Define o `backgroundColor` como `transparent` |

## JSX Declaration

``` jsx
{% raw %}
<Screen
  headerComponent={<NavigationHeader title="Screen Title" />}
>
  <Text>Screen content</Text>
</Screen>
{% endraw %}
```

## Snack Example

Em breve.
