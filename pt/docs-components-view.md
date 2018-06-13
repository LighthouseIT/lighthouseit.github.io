---
lang: pt
layout: docs
permalink: /pt/docs/components/view
title: View
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# View

Extende o componente `View` padrão do React Native e adiciona style names customizados.

## API

**Props**

`View` não possui custom Props, entretanto, todas Props disponíveis no componente `View` padrão do React Native são suportadas.

**Style names**

| Declaration  | Description  | Type  |
|--------------|--------------|-------|
| **horizontal** | Alinha os componentes filhos horizontalmente e suporta as variações disponíveis em [horizontalFlexAlignment]({{ baseUrl }}/docs/themes/common-variants#horizontal-flex-alignment). | String |
| **vertical** | Alinha os componentes filhos verticalmente suporta as variações disponíveis em [verticalFlexAlignment]({{ baseUrl }}/docs/themes/common-variants#vertical-flex-alignment). | String |
| **wrap** | Forção a quebra dos componentes filhos. | String |
| **muted** | Define `View` `opacity` para `mutedOpacity` como definido no tema. | String |
| **featured** | Define `View` `backgroundColor` para `featuredColor` como definido no tema. | String |
| **center** | Alinha a si próprio ao centro | String |

## JSX Declaration

``` jsx
<View styleName="md-gutter">
  <Text>Content</Text>
</View>
```

## Snack Example

Em breve.
