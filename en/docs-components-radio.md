---
lang: en
layout: docs
permalink: /en/docs/components/radio
title: Radio
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Radio

## API

**Props**

| Declaration  | Description  | Type  | Default | Required |
|--------------|--------------|-------|---------|---------|
| **value** | Default state value | Boolean | false | false |
| **onValueChange** | Function to be called when value changes | Function(value: Boolean) | (): void ) | true |

**Style names**

`Radio` doesn't have specific style names.

> **Note**
> You can change the active color by overwriting the `radioActiveColor` variable. [Read more about this here]({{baseUrl}}/docs/themes/overwriting-variables).

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

Coming soon.
