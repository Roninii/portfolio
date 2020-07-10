---
title: 'Rebuilding My Personal Site With Gridsome'
author: Ronnie Villarini
---

I've decided to Rebuild my personal site with Gridsome for a few reasons:

-   I've learned quite a lot since making it just a year ago.
-   It's lacking in content, and I don't feel as though it showcases everything I think is important.
-   My contact section isn't **obvious** enough.
-   I don't imagine it's SEO optimized.

I'll be documenting this process along with my train of thought and decisions along the way. I hope that at least some of you can get something out of it! If nothing else, I'll have a cool little reminder of this process that I can look back on in the future. 😃

## So Why Gridsome?

![Gridsome Logo](https://dev-to-uploads.s3.amazonaws.com/i/yeq5sadxv3265n70vody.jpeg)

---

A lot of you may not have heard of **[Gridsome](https://gridsome.org)** as it's still in it's early days (0.7.17 at the time of writing), so what is it?

To put it simply, it's **Gatsby** for **Vue**

### SSG (static site generator) Benefits

-   Straight from the [home page](https://gridsome.org):

    > Gridsome makes it easy for developers to build static generated websites & apps that are fast by default 🚀

    **Fast by default**. This is one of the main reasons for picking an SSG like Gridsome or Gatsby. They come with so many out-of-the-box optimizations that you get 90+ lighthouse scores from the start. This can be a huge timesaver, and who doesn't like fast sites?

-   SSG's allow you to work with lots of convenient tools such as templating engines, and transforming markdown files into HTML pages.
-   They're easy to deploy, and with the help of providers like [Netlify](https://netlify.com), you can even deploy them for free within minutes! Netlify even lets you connect to your github repo and it'll automatically re-build and deploy everytime you push a change!
-   Of course, they're more secure as well. Without a server, there are fewer points in which to exploit.

### Gridsome VS Gatsby

![Gridsome vs Gatsby](https://dev-to-uploads.s3.amazonaws.com/i/nbxdnr1p11esa4t80dc6.jpeg)
image from [morioh.com](https://morioh.com/p/b8b12d6aa29a)

Put your pitchforks down, I'm not here to tell you one is better than the other. Only outline the differences and explain why I chose Gridsome.

-   The most important and obvious reason - I'm a Vue developer. I fell in love with Vue a little over a year ago, starting using it for side projects, and now I use it at work! With Gatsby being a React-based SSG, I opted to stick with what I know and enjoy purely because of my personal bias. I've used React in the past, and it'll always hold a special place in my heart - but I'm just much faster and more productive in Vue.
-   Gridsome actually takes most of it's inspiration from Gatsby such as
    -   Plugins
    -   Themes (starters in Gridsome)
    -   GraphQL data layer for cool things like site metadata, images, and page queries (something we will talk more in depth about in a later post)

All of these things make it a joy to work with and really which one you choose comes down to either personal bias, or your desire to use something more mature (Gatsby being around for much longer at this point)

Our journey starts here! In the next post we'll talk more about getting started with Gridsome, along with some basic project configuration.

See you then 🖖
