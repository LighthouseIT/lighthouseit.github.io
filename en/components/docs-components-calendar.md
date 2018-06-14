---
lang: en
layout: docs
permalink: /en/docs/components/calendar
title: Calendar
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Calendar

## API

**Props**

All Props used by [https://github.com/wix/react-native-calendars#basic-parameters](https://github.com/wix/react-native-calendars#basic-parameters) are available.

Only the prop `onDayPress` was replaced by `onValueChange`

| Declaration  | Description  | Type  | Default  | Required |
|-------------|-------------|-------|---------|----------|
| **current** | Initially visible month | Date | new Date() | false |
| **markedDates** | Collection of dates that have to be marked | Object | {} | false |
| **markingType** | Marking type, can be a `simple`, `period`, `multi-dot`, `custom` | String | `simple` | false |
| **onValueChange** | Function to be called when Date changes | Function | (): void | true |

> **Note**
> When use Prop `markingType` as `period`, the `onValueChange` will return an `Object` with the marked days

**Style names**

`Calendar` doesn't have specific style names.

**Style**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| iconColor | Color for the arrow icon | String | `darkColor` |
| markedDayColor | Color for the marked day | String | `featuredColor` |

## JSX Declaration

``` jsx
{% raw %}
<Calendar
  markingType="simple"
  current="2018-06-12"
  onValueChange={(day) => { console.log('selected day', day) }}
/>
{% endraw %}
```

## Snack Example

Coming soon.
