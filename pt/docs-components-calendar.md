---
lang: pt
layout: docs
permalink: /pt/docs/components/calendar
title: Calendar
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Calendar

## API

**Props**

Todas Props usadas por [https://github.com/wix/react-native-calendars#basic-parameters](https://github.com/wix/react-native-calendars#basic-parameters) são disponíveis.

Apenas a prop `onDayPress` foi foi substituída por `onValueChange`.

| Declaration  | Description  | Type  | Default  | Required |
|-------------|-------------|-------|---------|----------|
| **current** | Mês inicialmente visível | Date | Date() | false |
| **markedDates** | Coleção de datas que precisam ser marcadas | Object | {} | false |
| **markingType** | Tipo de marcação, pode ser `simple`, `period`, `multi-dot`, `custom` | String | `simple` | false |
| **onValueChange** | Função a ser chamada quando a data muda | Function | - | true |

> **Note**
> Quando definida a Prop `markingType` como `period`, a função `onValueChange` irá retornar um `Object` com as datas marcadas.

**Style names**

`Calendar` não possui style names específicos.

**Style**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **iconColor** | Cor para o ícone de seta | String | `darkColor` |
| **markedDayColor** | Cor para o dia marcado | String | `featuredColor` |

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

Em breve.
