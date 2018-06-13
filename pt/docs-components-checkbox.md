---
lang: pt
layout: docs
permalink: /pt/docs/components/checkbox
title: Checkbox
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Checkbox

## API

**Props**

| Declaration  | Description  | Type  | Default | Required |
|--------------|--------------|-------|---------|----------|
| **value** | Valor do estado padrão | Boolean | false | false |
| **onValueChange** | Função a ser chamada quando o valor mudar | Function(value: Boolean) | (): void | true |

**Style names**

`Checkbox` não possui style names específicos.

> **Note**
> Você pode alterar a cor da borda ativa sobrescrevendo a variável `checkboxActiveColor`. [Entenda como neste guia]({{baseUrl}}/docs/themes/overwriting-variables).

## JSX Declaration

``` jsx
{% raw %}
<Checkbox
  value={this.state.checkbox}
  onValueChange={(value) => console.log('Checkbox value', value) }
/>
{% endraw %}
```

## Snack Example

Em breve.
