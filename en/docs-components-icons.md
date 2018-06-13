---
lang: en
layout: docs
permalink: /en/docs/components/icons
title: Icons
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Icons

SVG icons that uses the open source [Feather](https://feathericons.com/) as icon library.

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|-------------|------|---------|----------|
| **name** | Name of the icon | String | - | true
| **size** | Size of the icon | Number | 24 | false
| **color** | Color of the icon | `paperColor` | false

**Style names**

`Icon` doesn't have specific style names.

## JSX Declaration

``` jsx
<Icon name="alert-circle" size={30} color="#20bf6b" />
<Icon name="alert-octagon" size={30} color="#3867d6" />
<Icon name="alert-triangle" size={30} color="#f7b731" />
```

## Snack Example

Coming soon.
