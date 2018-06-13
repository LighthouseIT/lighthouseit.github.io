---
lang: en
layout: docs
permalink: /en/docs/components/view
title: View
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# View

React Native's `View` with custom style names.

## API

**Props**

`View` doesn't have custom Props, however, all Props available in the standard React Native `View` component are supported.

**Style names**

| Declaration  | Description  | Type  |
|--------------|--------------|-------|
| **horizontal** | Align child components horizontally and support [horizontalFlexAlignment]({{ baseUrl }}it.github.io/en/docs/themes/common-variants#horizontal-flex-alignment) variants | String |
| **vertical** | Align child components horizontally and support [verticalFlexAlignment]({{ baseUrl }}it.github.io/en/docs/themes/common-variants#vertical-flex-alignment) variants | String |
| **wrap** | `flexWrap` child components | String |
| **muted** | Sets View `opacity` to `mutedOpacity` as defined in the theme | String |
| **featured** | Sets View `backgroundColor` to `featuredColor` as defined in the theme | String |
| **center** | Align self View to center | String |

## JSX Declaration

``` jsx
<View styleName="md-gutter">
  <Text>Content</Text>
</View>
```

## Snack Example

Coming soon.
