---
lang: en
layout: docs
permalink: /en/docs/components/picker
title: Picker
section: Components
---

# Picker

Use to select option from a set of data.

## API

**Props**

| Declaration  | Description  | Type  | Default  | Required |
|--------------|--------------|-------|----------|--------|
| **data** | The data source | `Array<{value: String, label: String}>` | [] | true
| **selectedValue** | The currently selected value | String | null | false
| **onValueChange** | Function will be be called when value changes | Function(value: String) | (): void | true

**Style names**

`Picker` doesn't have specific style names.

## JSX Declaration

``` jsx
{% raw %}
<Picker
  selectedValue={this.state.picker}
  data={[
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
    { value: 'third', label: 'Third' },
  ]}
  onValueChange={value => console.log('Picker value', value)}
>
  <Button>
    <Text>Open picker</Text>
  </Button>
</Picker>
{% endraw %}
```

## Snack Example

Coming soon.
