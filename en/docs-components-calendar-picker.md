---
lang: en
layout: docs
permalink: /en/docs/components/calendar-picker
title: CalendarPicker
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# CalendarPicker

Open the [Calendar component]({{ baseUrl }}/docs/components/calendar) inside and [Popup]({{ baseUrl }}/docs/components/popup)

## API

**Props**

All Props available on [Calendar]({{ baseUrl }}//docs/components/calendar)

**Style names**

`CalendarPicker` doesn't have specific style names.

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

Coming soon.
