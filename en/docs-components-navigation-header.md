---
lang: en
layout: docs
permalink: /en/docs/components/navigation-header
title: NavigationHeader
section: Documentation
---

# NavigationHeader

Located on top of the screen content and below of the `StatusBar`, provides to user easily navigate from screens, search, back and a serie of other functionalities.

> `NavigationHeader` works with [react-navigation](https://reactnavigation.org/) 2.0.0 or higher. If you don't use `react-navigation` as navigator in your project, we recommend to you not use this component in your project.

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|------------|------|---------|----------|
| **title** | Text that will be displayed as title of the header | String | - | false |
| **hasDrawer** | Render a sandwich `Button Icon` that call the `this.props.navigation.openDrawer()` function to open the `NavigationDrawer` | Boolean | false | false |
| **hasHistory** | Render a left arrow `Button Icon` that call the `this.props.navigation.goBack()` function and back to the previous screen. | Boolean | false | false |
| **centerComponent** | Render a custom component that replace the default `title` component | Function(screenProps: Object) | (): void | false |
| **leftComponent** | Render a custom component at the left side of the header | Function(screenProps: Object) | (): void | false |
| **rightComponent** | Render a custom component at the right side of the header | Function(screenProps: Object) | (): void | false |

> **Note**
> `hasDrawer` and `hasHistory` can't be used at the same time.

**Style names**

| Declaration  | Description  |
|--------------|--------------|
| **featured** | Sets `backgroundColor` to `featuredColor` as defined in theme. |
| **dark** | Sets `backgroundColor` to `darkColor` as defined in theme. |
| **paper** | Sets `backgroundColor` to `paperColor` as defined in theme. |

## JSX Declaration

``` jsx
<Screen headerComponent={<NavigationHeader title="SCREEN TITLE" hasDrawer />}>
  <Text>A beautiful screen</Text>
</Screen>
```

## Snack Example

Coming soon.
