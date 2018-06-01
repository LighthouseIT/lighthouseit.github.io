---
lang: en
layout: docs
permalink: /en/docs/components/typography
redirect_from: /en/docs/components
title: Typography
section: Components
---

# Typography

Typography components with predefined styles that will give a better presentation overall to the app.

The available components are:

```
<Heading></Heading>
<Title></Title>
<Subtitle></Subtitle>
<Text></Text>
<Caption></Caption>
<Label></Label>
```

## API

**Props**

- All supported Props by the standard React Native `Text` component. [Veja a lista completa das Props suportadas.](https://facebook.github.io/react-native/docs/text.html#props)

**Style names**

{% include_relative gutters-margin.md %}
- **bold** - Sets text as bold
- **muted** - Sets text with opacity `0.5`
- **line-through** - Defines a line through the text
- **multiline** - Increases line-height to allow text to wrap
- **h-center** - Aligns text to the center
- **h-left** - Aligns text to the left
- **h-right** - Aligns text to the right

## Examples

{% include_relative examples-expo.md %}
