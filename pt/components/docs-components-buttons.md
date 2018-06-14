---
lang: pt
layout: docs
permalink: /pt/docs/components/buttons
title: Buttons
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Buttons

## API

**Props**

`Button` não possui custom Props, entretanto, todas Props disponíveis no componente `TouchableOpacity` padrão do React Native são suportadas.

**Style names**

| Declaration | Description |
|-------------|-------------|
| **clear** | Remove a borda ao redor do `Button` e define `backgroundColor` como `transparent` |
| **dark** | Define `backgroundColor` como` darkColor` e Text as `paperColor` como definido no tema. |
| **paper** | Define `backgroundColor` como` paperColor` e Text as `darkColor` como definido no tema. |
| **success** | Define `backgroundColor` como `successColor` como definido no tema. |
| **danger** | Define `backgroundColor` como `dangerColor` como definido no tema. |
| **warning** | Define `backgroundColor` como `warningColor` como definido no tema. |
| **info** | Define `backgroundColor` como `infoColor` como definido no tema. |
| **muted** | Define `Icon` e `Text` components `opacity` como `mutedOpacity` como definido no tema. |
| **shadow** | Define [baseShadow]({{ baseUrl }}) |

> **Nota**
> A cor do texto é definida como `paperColor` por padrão.

## JSX Declaration

``` jsx
{% raw %}
<Button
  onPress={() => { console.log('Button pressed') }}
>
  <Text>NORMAL</Text>
</Button>
{% endraw %}
```

## Snack Example

Em breve.
