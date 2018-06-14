---
lang: en
layout: docs
permalink: /en/docs/components/badge
title: Badge
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Badge

Small status indicator, commonly used, for example, to indicate unread notifications or messages.

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **count** | Number to be displayed | Number | null |
| **overflowCount** | Maximum number to be displayed | Number | 99 |

**Style names**

| Declaration  | Description  |
|--------------|--------------|
| **dark** | Sets `backgroundColor` to` darkColor` as defined in the theme. |
| **success** | Sets `backgroundColor` to `successColor` as defined in the theme. |
| **danger** | Sets `backgroundColor` to `dangerColor` as defined in the theme. |
| **warning** | Sets `backgroundColor` to `warningColor` as defined in the theme. |
| **info** | Sets `backgroundColor` to `infoColor` as defined in the theme. |

## JSX Declaration

``` jsx
{% raw %}
<Badge styleName="sm-gutter start" count={200}>
  <View
    styleName="rounded-corners"
    style={{ width: 40, height: 40, backgroundColor: '#ccc' }}
  />
</Badge>
{% endraw %}
```

## Snack Example

<div data-snack-id="@lighthouse/badge-example---lighthouse-ui" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>
