---
layout: docs
permalink: /docs/introduction
redirect_from: /docs/
title: Introduction
section: Documentation
---

# Introduction

Lighthouse is a Brazilian company that focuses on creating applications for consumers and businesses using React Native. Our philosophy is that every app we create be unique and looks like it was handcrafted.

Our team of developers work daily to make the construction of apps simple and at the same time not restricted in terms of design and functionality.

That's why we have decided to created a powerful toolkit for React Native that contains a fully customizable components library, an app generator to manage your project easily, etc. It's and much more was created to make the day-to-day of our developers more productive without losing the magic of creating amazing apps.

Stay with us and know all the advantages that our toolkit can offer for you and your apps.

## Welcome to the Lighthouse Ignite Boilerplate

To make the setup of your development environment more efficiently, we created a **boilerplate** to help you to start the development of your apps in few minutes.

One of our philosophies is to not "reinventing the wheel" if it's not necessary. Following this, we decided to not create our own CLI and instead use the [Ignite CLI](https://github.com/infinitered/ignite) and just create our own **Ignite Boilerplate** with plugins and generators.

> **Note**
>
>By default we use the [Expo SDK](https://expo.io/) to build our boilerplate apps, but if you don't want to use the Expo SDK just keep reading the next tutorials.

## Components and Theming
...

## Layouts
...

## Starting with your First App

Cool! Let's starting to create your first app using our boilerplate.
But first, you'll need to install some **prerequisites** before continuing with the tutorial.

#### Prerequisites

- [Nodejs and npm](https://nodejs.com)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- exp - `$ npm install -g exp` (Expo CLI)
- react-native-cli - `$ npm install -g react-native-cli`
- ignite-cli - `$ npm install -g ignite-cli`
- [yarn](https://yarnpkg.com/en/docs/getting-started) - `$ npm install -g yarn`

> **Note**
>
> If your're using a MacOS maybe you will need to run the commands above using `sudo`. e.g. `sudo npm install -g npm`.
>
> Try run without `sudo` first.

#### Generating a New App

Start by using `ignite new MyAppName --b lighthouse-boilerplate` command to generate your app.
You'll be asked for some question, just answer according your preferences.

```ShellSession
$ ignite new MyFirstApp -b lighthouse-boilerplate

-----------------------------------------------

🔥 igniting app MyFirstApp
✔ using the Lighthouse boilerplate
✔ added React Native 0.50.4 in 50.35s
✔ added ignite-lighthouse-boilerplate in 48.75s
✔ configured git
✔ ignited MyFirstApp in 80.10s

    Ignite CLI ignited MyFirstApp in 80.10s

    To get started:

      cd MyFirstApp
      exp start
      ignite --help

      Get a coffee and enjoy! ☕️
```