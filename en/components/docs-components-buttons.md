---
lang: en
layout: docs
permalink: /en/docs/components/buttons
title: Buttons
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Buttons

## API

**Props**

`Button` doesn't have custom Props, however, all Props available in the standard React Native `TouchableOpacity` component are supported.

**Style names**

| Declaration | Description |
|-------------|-------------|
| **clear** |  Removes the border around `Button` and sets `backgroundColor` as `transparent` |
| **dark** | Sets `backgroundColor` to` darkColor` and Text as `paperColor` as defined in the theme. |
| **paper** | Sets `backgroundColor` to` paperColor` and Text as `darkColor` as defined in the theme. |
| **success** | Sets `backgroundColor` to `successColor` as defined in the theme. |
| **danger** | Sets `backgroundColor` to `dangerColor` as defined in the theme. |
| **warning** | Sets `backgroundColor` to `warningColor` as defined in the theme. |
| **info** | Sets `backgroundColor` to `infoColor` as defined in the theme. |
| **muted** | Sets Icon and Text components `opacity` to `mutedOpacity` as defined in the theme. |
| **shadow** | Sets [baseShadow]({{ baseUrl }}) |

> **Note**
> Text color is defined as `paperColor` by default.

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

Coming soon.
