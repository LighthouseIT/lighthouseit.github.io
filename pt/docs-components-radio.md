---
lang: pt
layout: docs
permalink: /pt/docs/components/radio
title: Radio
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Radio

## API

**Props**

| Declaration  | Description  | Type  | Default | Required |
|--------------|--------------|-------|---------|----------|
| **value** | Valor do estado padrão | Boolean | false | false |
| **onValueChange** | Função a ser chamada quando o valor mudar | Function(value: Boolean) | (): void | true |

**Style names**

`Radio` não possui style names específicos.

> **Note**
> Você pode alterar a cor da borda ativa sobrescrevendo a variável `radioActiveColor`. [Entenda como neste guia]({{baseUrl}}/docs/themes/overwriting-variables).

## JSX Declaration

``` jsx
{% raw %}
<Radio
  value={this.state.radio}
  onValueChange={(value) => console.log('Radio value', value) }
/>
{% endraw %}
```

## Snack Example

Em breve.
