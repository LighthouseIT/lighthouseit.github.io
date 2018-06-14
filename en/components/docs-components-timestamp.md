---
lang: en
layout: docs
permalink: /en/docs/components/timestamp
title: Timestamp
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Timestamp

A localized timestamp component that supports [momentjs format](https://momentjs.com/docs/#/displaying/format/).

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|------------|------|---------|----------|
| **date** | Date instance | Date | Date() | true |
| **format** | [momentjs format](https://momentjs.com/docs/#/displaying/format/) | String | `DD/MM/YYYY HH:mm` | false |

**Style names**

`Timestamp` doesn't have specific style names.

## JSX Declaration

``` jsx
<Timestamp date={new Date(2018, 6, 13)} format="LLLL" />
```

## Snack Example

Coming soon.
