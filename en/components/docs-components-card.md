---
lang: en
layout: docs
permalink: /en/docs/components/card
title: Card
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Card

## API

**Props**

`Card` doesn't have custom Props, however, all Props available in the standard React Native `View` component are supported.

**Style names**

`Card` doesn't have specific style names.

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

Coming soon.
