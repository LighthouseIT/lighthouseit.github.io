---
lang: en
layout: docs
permalink: /en/docs/components/tabs
title: Tabs
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Tabs

`Tabs` make it easy to switch between different views.

## API

**Props**

| Declaration | Description | Type | Default |
|--------------|--------------|------|----------|
| **tabBarPosition** | Sets [TabBar]({{ baseUrl }}it.github.io/en/docs/components/tab-bar) position as `top` or `bottom` | String | `top` |
| **initialTab** | Index of the initial tab | Number | 0 |
| **scrollEnabled** | Whether to enable scrollable tabs  | Boolean | true |
| **renderTabBar** | Function that returns a custom React Element to be used as the tab bar | Function(props) | (): void |
| **renderIcon** | Function that returns a custom React Element to be used as a icon | Function(scene: Object) | (): void |
| **renderLabel** | Function that returns a custom React Element to be used as a label | Function(scene: Object) | (): void |
| **onTabPress** | Function that will be called on tab press, useful for things like scroll to top  | Function | (): void |
| **onChange** | Function that will be called when current tab index changes  | Function(index: Number) | (): void |

**Style name**

| Declaration  | Description |
|--------------|--------------|
| **dark** | Sets TabBar `backgroundColor` to `darkColor` and `label`, `icon` and `indicator` to `paperColor` as defined in theme |

### Tab

Component to wrap each tab content.

**Style name**

`Tab` has no specific style names.

**Props**

| Declaration  | Description  | Type  | Default  |
|--------------|--------------|-------|----------|
| **key** | Unique key for the component | String | - |
| **label** | Label text to use for a tab | String | - |
| **icon** | Icon name to use for a tab. [See the list of available icons]({{ baseUrl }}it.github.io/en/docs/components/icons) | String | - |

## JSX Declaration

```jsx
<Tabs>
  <Tab label="Tab #1">
    <Text>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </Text>
  </Tab>
  <Tab label="Tab #2">
    <Text>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </Text>
  </Tab>
</Tabs>
```

## Snack Example

Coming soon.
