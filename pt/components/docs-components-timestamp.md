---
lang: pt
layout: docs
permalink: /pt/docs/components/timestamp
title: Timestamp
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Timestamp

Um componente de timestamp que suporta [momentjs format](https://momentjs.com/docs/#/displaying/format/).

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|------------|------|---------|----------|
| **date** | Date instance | Date | Date() | true |
| **format** | [momentjs format](https://momentjs.com/docs/#/displaying/format/) | String | `DD/MM/YYYY HH:mm` | false |

**Style names**

`Timestamp` não possui style names especificos.

## JSX Declaration

``` jsx
<Timestamp date={new Date(2018, 6, 13)} format="LLLL" />
```

## Snack Example

Em breve.
