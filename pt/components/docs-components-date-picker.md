---
lang: pt
layout: docs
permalink: /pt/docs/components/date-picker
title: DatePicker
section: Components
---

# DatePicker

Usado para selecionar uma data ou hora.

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **mode** | Mode, pode ser um `date`, `time`, `datetime`, `year` or `month` | String | `datetime` |
| **date** | A data atualmente selecionada | Date | new Date() |
| **defaultDate** | Data selecionada padrão | Date | new Date() |
| **minDate** | Data mínima que pode ser selecionada | Date | null |
| **maxDate** | Data máxima que pode ser selecionada | Date | null |
| **use12hours** | Usa o formato de 12h em vez de 24h | Boolean | true |
| **onValueChange** | Função a ser chamada quando a data muda | Function(date) | - |

**Style names**

`DatePicker` não possui style names específicos.

## JSX Declaration

``` jsx
{% raw %}
<DatePicker
  date={this.state.datepicker}
  onValueChange={value => console.log('datepicker value', value)}
>
  <Button>
    <Text>Open DatePicker</Text>
  </Button>
</DatePicker>
{% endraw %}
```

## Snack Example

Em breve.
