---
lang: en
layout: docs
permalink: /en/docs/components/form-group
title: FormGroup
section: Components
---

# FromGroup

The `FormGroup` is the easiest way to group forms components.

## API

**Props**

`FormGroup` supports all Props available in the standard React Native `View` component.

| Declaration  | Description | Type | Default  | 
|-------------|-------------|------|---------|
| **onPress** | Function called when `FromGroup` is pressed | Function | (): void |

**Style names**

| Declaration | Description |
|-------------|-------------|
| **muted** | Sets FromGroup `opacity` to `mutedOpacity` as defined in the theme. |
| **blocked** | Add a `border` and `backgroundColor` to the FromGroup |
| **inline** |  Align child components horizontally and can only be used with `blocked`. |
| **multiline** |  Align child components below each others and can only be used with `blocked`. |

## JSX Declaration

``` jsx
<FormGroup styleName="blocked inline">
  <Label>Input label</Label>
  <TextInput placeholder="Enter here" />
</FormGroup>
```

## Snack Example

Coming soon.
