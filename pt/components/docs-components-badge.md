---
lang: pt
layout: docs
permalink: /pt/docs/components/badge
title: Badge
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Badge

Pequeno indicador de status, normalmente usado, por exemplo, para indicar notificações ou mensagens não lidas.

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **count** | Número a ser exibido | Number | null |
| **overflowCount** | Número máximo a ser exibido | Number | 99 |

**Style names**

| Declaration  | Description  |
|--------------|--------------|
| **dark** | Define `backgroundColor` como` darkColor` como definido no tema. |
| **success** | Define `backgroundColor` como `successColor` como definido no tema. |
| **danger** | Define `backgroundColor` como `dangerColor` como definido no tema. |
| **warning** | Define `backgroundColor` como `warningColor` como definido no tema. |
| **info** | Define `backgroundColor` como `infoColor` como definido no tema. |

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
