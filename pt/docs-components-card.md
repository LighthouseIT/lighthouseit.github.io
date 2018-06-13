---
lang: pt
layout: docs
permalink: /pt/docs/components/card
title: Card
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Card

## API

**Props**

`Card` não possui custom Props, entretanto, todas Props disponíveis no componente `View` padrão do React Native são suportadas.

**Style names**

`Card` não possui style names específicos.

## JSX Declaration

``` jsx
{% raw %}
<Card>
  <Image source={{uri: 'https://user-images.githubusercontent.com/9506146/41298934-ba10255c-6e38-11e8-803a-00697a33107d.png'}} width="100%" />
  <View>
    <Subtitle>A beautiful landscape for you to enjoy!</Subtitle>
    <Caption>15 hours ago</Caption>
  </View>
</Card>
{% endraw %}
```

## Snack Example

Em breve.
