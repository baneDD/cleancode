---
title: About this blog
date: '2019-11-26T23:46:37.121Z'
template: 'post'
draft: false
slug: 'about-this-blog/'
category: 'Technology'
tags:
  - 'Gatsby'
  - 'React'
  - 'Styled Components'
  - 'Storybook'
  - 'React-Tag-Cloud'
  - 'Javascript'
  - 'Node'
  - 'Reading Time'
  - 'Netlify CMS'
  - 'Algolia'
  - 'Toronto'
description: "This blog is a work in progress. As I work to add more functionality to the blog and the site in general, I will transition into producing real content. Once I've thoroughly tested the functionality I will publish the code as a Gatsby starter template."
socialImage: '/media/toronto-nathan-phillips.jpg'
---

A quick note about this site and the blog as I work to expand the functionality and style it to my satisfaction. When I decided to create this website the choice of platform was fairly clear: I was going to use [Gatsby](https://www.gatsbyjs.org/) for the site because it's a fast static site generator built with Node and React. It didn't hurt that I was already familiar with Gatsby and had experience working with it.

![Photo by Scott Webb on Unsplash](/media/toronto-nathan-phillips.jpg)

<image-caption>Photo by <a href="https://unsplash.com/@scottwebb">Scott Webb</a> on <a href="https://unsplash.com">Unsplash</a></image-caption>

Once the decision to use Gatsby was made it was onto selecting a headless CMS to use. Since I was going to host the blog on the excellent [Netlify](https://www.netlify.com/) platform, I wanted to try out the [Netlify CMS](https://www.netlifycms.org/). It's very cool, using plain Markdown for content and the content is stored in a GIT repository. In my case, the code is stored along with the Gatsby source code for the site.

With the basics sorted out, I headed over to pick a Gatsby starter template to use. Unfortunately, there aren't many using Netlify CMS and even less that eschew Flow or Typescript. I also knew I wanted to use [Styled Components](https://www.styled-components.com/) to style the pages and [Storybook](https://storybook.js.org/) for developing and viewing components in isolation. After some searching, I decided to use [Marko Radak's awesome Gatsby + Storybook starter](https://github.com/markoradak/gatsby-starter-storybook). This gave me Storybook + Styled Components and didn't burden me with things I didn't need.

Since the Gatsby starter I used was fairly basic, I added in the code to integrate Netlify CMS to the site. I used [Alexander Shelepenok's Gatsby Lumen Starter](https://github.com/alxshelepenok/gatsby-starter-lumen) as a rough guide for my site and went from there. Some of the features I wanted to add in were time required to read the posts (similar to Medium), a tag cloud that could be used to filter articles by tags and a fast text search to search the articles. The first two are done and I will be working to integrate [Algolia](https://www.algolia.com) search with the site.

Please have patience as I'm continuously working to improve this site and will be adding a few more interesting features as I go along. Hopefully I will move to adding real content to the site in the next couple of weeks.
