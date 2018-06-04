---
lang: en
layout: docs
permalink: /en/docs/components/badge
title: Badge
section: Components
---

# Badge

Pequeno indicador de status, normalmente utilizado, por exemplo, para indicar que existem notificações ou mensagens não lidas.

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **count** | Número a ser exibido | Number | null |
| **overflowCount** | Número máximo a ser exibido | Number | 99 |

**Style names**

| Declaration  | Description  |
|--------------|--------------|
| **dark** | Define o `backgroundColor` como `darkColor` conforme definido no tema. |
| **success** | Define o `backgroundColor` como `successColor` conforme definido no tema. |
| **danger** | Define o `backgroundColor` como `dangerColor` conforme definido no tema. |
| **warning** | Define o `backgroundColor` como `warningColor` conforme definido no tema. |
| **info** | Define o `backgroundColor` como `infoColor` conforme definido no tema. |

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

## Exemplo

<div data-snack-id="HyNkAQfgX" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>