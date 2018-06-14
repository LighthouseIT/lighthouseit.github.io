---
lang: pt
layout: docs
permalink: /pt/docs/components/form-group
title: FormGroup
section: Components
---

# FromGroup

O `FormGroup` é a maneira mais fácil de agrupar componentes de formulários.

## API

**Props**

`FormGroup` suporta todas Props disponíveis no componente `View` padrão do React Native.

| Declaration  | Description | Type | Default |
|-------------|-------------|------|---------|
| **onPress** | Função chamada quando `FromGroup` é pressionado | Function | (): void |

**Style names**

| Declaration | Description |
|-------------|-------------|
| **muted** | Define `FromGroup` `opacity` para `mutedOpacity` como definido no tema. |
| **blocked** | Adiciona uma `border` e `backgroundColor`. |
| **inline** |  Alinha os componentes filhos horizontalmente e só pode ser utilizado em conjunto de `blocked`. |
| **multiline** | Alinha os componentes filhos abaixo um dos outros e só pode ser utilizado em conjunto de `blocked`. |

## JSX Declaration

``` jsx
<FormGroup styleName="blocked inline">
  <Label>Input label</Label>
  <TextInput placeholder="Enter here" />
</FormGroup>
```

## Snack Example

Em breve.
