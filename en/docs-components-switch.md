---
lang: en
layout: docs
permalink: /en/docs/components/switch
title: Switch
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Switch

## API

**Props**

| Declaration  | Description  | Type  | Default  | Required |
|--------------|--------------|-------|----------|----------|
| **value** | Default state value | Boolean | false | false |
| **onValueChange** | Function to be called when value changes | Function(value: Boolean) | (): void | true | 

**Style names**

`Switch` doesn't have specific style names.

> **Note**
> You can change the active `backgroundColor` by overwriting the `switchActiveColor` variable.
> You can change the inactive `backgroundColor` by overwriting the `switchInactiveColor` variable.
> You can change the thumb color by overwriting the `switchThumbColor` variable.
> [Read more about this here]({{ baseUrl }}it.github.io/en/docs/themes/overwriting-variables).

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

Coming soon.
