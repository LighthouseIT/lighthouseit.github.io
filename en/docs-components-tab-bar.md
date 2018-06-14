---
lang: en
layout: docs
permalink: /en/docs/components/tab-bar
title: TabBar
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# TabBar

`TabBar` is used within `Tabs` component to facilitate users to quickly switch between screens.

## API

**Props**

| Declaration | Description | Type | Default | Required |
|-------------|------------|------|---------|----------|
| **onTabPress** | Function that will be called on tab press | Function | (): void | false |
| **renderLabel** | Function that returns a custom React Element to be used as a label | Function(scene: Object) | (): void | false |
| **renderIcon** | Function that returns a custom React Element to be used as a icon | Function(scene: Object) | (): void | false |
| **renderIndicator** | Function that returns a custom React Element to be used as a indicator | Function(scene: Object) | (): void | false |
| **scrollEnabled** | Whether to enable scrollable tabs | Boolean | true | false

**Style names**

`TabBar` doesn't have specific style names.

**Styles**

| Declaration | Description |
|-------------|------------|
| **tab** | Style object for the individual tabs in the tab bar |
| **label** | Style object for the tab item label |
| **icon** | Style object for the tab item icon |
| **indicator** | Style object for the active indicator |

> **Note**
> Both `label` and `icon` Style object have `activeColor` and `inactiveColor` that changes when its respective tab is focused. Its can be managed by [theme variables]({{ baseUrl }}/docs/theme/variables) and [overwritten]({{ baseUrl }}/docs/theme/overwriting-variables)

## JSX Declaration

``` jsx
{% raw %}
<TabBar
  scrollEnabled={false}
  renderIcon={({ scene }) => <Icon name={scene.icon} size={30} />}
  renderLabel={({ scene }) => <Text>{scene.label}</Text>}
  onTabPress={() => console.log('Tab pressed')}
/>
{% endraw %}
```

## Snack Example

Coming soon.