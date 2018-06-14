---
lang: pt
layout: docs
permalink: /pt/docs/components/switch
title: Switch
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Switch

## API

**Props**

| Declaration  | Description  | Type  | Default | Required |
|--------------|--------------|-------|---------|----------|
| **value** | Valor do estado padrão | Boolean | false | false |
| **onValueChange** | Função a ser chamada quando o valor mudar | Function(value: Boolean) | (): void | true |

**Style names**

`Switch` não possui style names específicos.

> **Note**
> Você pode alterar a cor do `backgroundColor` quando ativado sobrescrevendo a variável `switchActiveColor`.
> Você pode alterar a cor do `backgroundColor` quando inativo sobrescrevendo a variável `switchInactiveColor`.
> Você pode alterar a cor do thumb sobrescrevendo a variável `switchThumbColor`.
> [Entenda como neste guia]({{ baseUrl }}/docs/themes/overwriting-variables).

## JSX Declaration

``` jsx
{% raw %}
<Switch
  value={this.state.switch}
  onValueChange={(value) => console.log('Switch value', value) }
/>
{% endraw %}
```

## Snack Example

Em breve.
