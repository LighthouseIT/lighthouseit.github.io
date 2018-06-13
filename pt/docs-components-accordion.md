---
lang: pt
layout: docs
permalink: /pt/docs/components/accordion
title: Accordion
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Accordion

## API

**Props**

| Declaration  | Description  | Type  | Default | Required |
|--------------|--------------|-------|----------|----------|
| **onChange** | Função que será chamada quando a seção ativa no momento for alterada | Function(key: String) | (): void | false |
| **headerComponent** | Renderiza um componente personalizado para o `Header` | Function(title: String, isActived: Boolean) | (): void | false |
| **contentComponent** | Renderiza um componente personalizado para o `Content` | Function(content: String, isActived: Boolean) | (): void | false |
| **multiCollapse** | Permite a abertura de todos os conteúdos | Boolean | false |

**Style name**

`Accordion` não possui style names especificos.

**Style**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **header** | Estilo para `View` que envolve o componente` Header` | Object | {} |

### Accordion.Item

**Style name**

`Accordion.Item` não possui style names especificos.

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **key** | Chave única para o componente | String | - |
| **header** | Título para o componente `Header` | String | - |

## JSX Declaration

```jsx
<Accordion>
    <Accordion.Item header="Accordion #1">
      <View styleName="featured md-gutter">
        <Text>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Text>
      </View>
    </Accordion.Item>
</Accordion>
```

## Snack Example

<div data-snack-id="@lighthouse/accordion-example---lighthouse-ui" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>
