---
lang: en
layout: docs
permalink: /en/docs/components/accordion
title: Accordion
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Accordion

## API

**Props**

| Declaration  | Description  | Type  | Default  | Required |
|--------------|--------------|-------|----------|----------|
| **onChange** | Function that will be called when currently active section is changed | Function(key: String) | (): void | false |
| **headerComponent** | Render a custom component for the `Header` | Function(title: String, isActived: Boolean) | (): void | false |
| **contentComponent** | Render a custom component for the `Content` | Function(content: String, isActived: Boolean) | (): void | false |
| **multiCollapse** | Allow to expanding all contents | Boolean | false |

**Style name**

`Accordion` doesn't have specific style names.

**Style**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **header** | Style for `View` that holds the default `Header` component | Object | {} |

### Accordion.Item

**Style name**

`Accordion.Item` doesn't have specific style names.

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **key** | Unique key for the component | String | - |
| **header** | Title for the `Header` component | String | - |

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
