---
lang: pt
layout: docs
permalink: /pt/docs/components/picker
title: Picker
section: Components
---

# Picker

Usado para selecionar uma opção a partir de um conjunto de opções.

## API

**Props**

| Declaration  | Description  | Type  | Default  | Required |
|--------------|--------------|-------|----------|--------|
| **data** | Array de opções | `Array<{value: String, label: String}>` | [] | true
| **selectedValue** | O valor atualmente selecionado | String | null | false
| **onValueChange** | Função que será chamada quando o valor for alterado | Function(value: String) | (): void | true

**Style names**

`Picker` não possui style names específicos.

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

Em breve.
