---
template: post
title: Integrating ESLint and Prettify with Node Projects
socialImage: /media/eslint.jpg
socialImageAlt: package.json development dependencies
slug: integrating-eslint-and-prettify-with-node-projects
draft: true
date: 2020-03-09T14:04:49.791Z
description: >-
  A quick guide to help integrate ESLint and Prettify with NodeJS projects in
  Visual Studio Code. 
category: Software Development
tags:
  - nodejs eslint prettify vscode
---


### Setting up Node version for ESLint

To set a minimum version of Node ESLint should lint for, we need to add an **engines** property to our **package.json** file. Simply replace the version with your desired version in the snippet below.

```
    "engines": {
        "node": ">=13.0.0"
    }
```
