---
lang: pt
layout: docs
permalink: /pt/docs/components/calendar-picker
title: CalendarPicker
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# CalendarPicker

Abre o componente [Calendar]({{ baseUrl }}/docs/components/calendar) dentro de um [Popup]({{ baseUrl }}/docs/components/popup)

## API

**Props**

Todas Props disponíveis no componente [Calendar]({{ baseUrl }}/docs/components/calendar).

**Style names**

`CalendarPicker` não possui style names especificos.

## JSX Declaration

``` jsx
{% raw %}
<CalendarPicker
  markingType="simple"
  onValueChange={(day) => { console.log('selected day', day) }}
>
  <Button>
    <Text>Open CalendarPicker</Text>
  </Button>
</CalendarPicker>
{% endraw %}
```

## Snack Example

<div data-snack-id="@lighthouse/calendarpicker-example---lighthouse-ui" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>
