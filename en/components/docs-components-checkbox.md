---
lang: en
layout: docs
permalink: /en/docs/components/checkbox
title: Checkbox
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Checkbox

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **value** | Default state value | Boolean | false |
| **onValueChange** | Function to be called when value changes | Function(value: Boolean) | - |

**Style names**

`Checkbox` doesn't have specific style names.

> **Note**
> You can change the active border color by overwriting the `checkboxActiveColor` variable. [Read more about this here]({{ baseUrl }}/docs/themes/overwriting-variables).

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

Coming soon.
