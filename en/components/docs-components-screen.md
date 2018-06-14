---
lang: en
layout: docs
permalink: /en/docs/components/screen
title: Screen
section: Components
---
{% assign baseUrl = site.baseurl | append: '/' | append: page.lang %}

# Screen

`Screen` is used to wrap the content of a navigation screen. It's provides to use `NavigationHeaders`, `ScrollView` and in addition implements the `KeyboardAvoidingView` by default.

## API

**Props**

| Declaration  | Description  | Type  | Default
|--------------|--------------|-------|----------|
| **headerComponent** | Render the [NavigationHeader]({{ baseUrl }}it.github.io/en/docs/components/navigation-header) component | `React.element` | null
| **scrollEnable** | When false, the view cannot be scrolled via touch interaction | Boolean | true |

**Style names**

| Declaration | Description |
|-------------|-------------|
| **transparent** | Sets `backgroundColor` to `transparent` |

## JSX Declaration

``` jsx
{% raw %}
<Screen
  headerComponent={<NavigationHeader title="Screen Title" />}
>
  <Text>Screen content</Text>
</Screen>
{% endraw %}
```

## Snack Example

Coming soon.
