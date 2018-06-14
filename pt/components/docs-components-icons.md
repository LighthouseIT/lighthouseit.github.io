---
lang: pt
layout: docs
permalink: /pt/docs/components/icons
title: Icons
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Icons

SVG icones que utiliza a biblioteca de código aberto [Feather](https://feathericons.com/).

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|-------------|------|---------|----------|
| **name** | Nome do icone | String | - | true |
| **size** | Tamanho do icone | Number | 24 | false |
| **color** | Cor do icone | `paperColor` | false |

**Style names**

`Icon` não possui style names especifico.

## JSX Declaration

``` jsx
<Icon name="alert-circle" size={30} color="#20bf6b" />
<Icon name="alert-octagon" size={30} color="#3867d6" />
<Icon name="alert-triangle" size={30} color="#f7b731" />
```

## Snack Example

Em breve.
