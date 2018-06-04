---
lang: en
layout: docs
permalink: /en/docs/components/accordion
title: Accordion
section: Components
---

# Accordion

## API

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| onChange | Uma função opcional que é chamada quando a seção ativa é alterada | Function(key: String) | none |
| headerComponent | Renderiza um componente customizado para o `Header` | Function(title: String, isActived: Boolean) | none |
| contentComponent | Renderiza um componente customizado para o `Content` | Function(content: String, isActived: Boolean) | none |

**Style name**

`Accordion` não possui style names especificos.

**Style**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| header | Style para `View` que contém o componente `Header` padrão | Object | none |

### Accordion.Item

**Style name**

`Accordion.Item` não possui style names especificos.

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| key | Chave única para o componente | String | - |
| header | Título para o componente `Header` | String | none |

## JSX Declaration

```jsx
<Accordion>
    <Accordion.Item header="Title #1">
        <Text>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Text>
    </Accordion.Item>
    <Accordion.Item header="Title #1">
        <Text>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Text>
    </Accordion.Item>
</Accordion>
```

## Exemplo

<div data-snack-id="HJdzhQzx7" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
