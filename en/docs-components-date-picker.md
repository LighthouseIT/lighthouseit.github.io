---
lang: en
layout: docs
permalink: /en/docs/components/date-picker
title: DatePicker
section: Components
---

# DatePicker

Use to select a date or time.

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **mode** | Mode value, can be a `date`, `time`, `datetime`, `year` or `month` | String | `datetime` |
| **date** | The currently selected date | Date | new Date() |
| **defaultDate** | Default selected date | Date | new Date() |
| **minDate** | Min Date value | Date | null |
| **maxDate** | Min Date value | Date | null |
| **use12hours** | Default state value | Boolean | true |
| **onValueChange** | Function to be called when date changes | Function(date) | - |

**Style names**

`DatePicker` doesn't have specific style names.

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

Coming soon.
