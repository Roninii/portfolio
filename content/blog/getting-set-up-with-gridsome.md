---
title: 'Getting Set Up With Gridsome'
author: Ronnie Villarini
date: '2020-07-09'
image: /img/gridsome-logo.png
---

## Getting started

So first things first, we need to actually install Gridsome. Like most modern JS frameworks, they have a nice CLI tool we can use to get the project quickly set up.

First install the Gridsome CLI,
`npm i -g @gridsome/cli`
`yarn global add @gridsome/cli` (gridsome recommends yarn)

Then all we have to do is create a new project straight from the CLI!

`gridsome create ronini`

`cd ronini`

Now we can start the server `gridsome develop` and navigate to `localhost:8080` in your browser to view your site live. Pretty simple! 🥳

## Directory Structure

Now lets take a look around and get ourselves familiar with what Gridsome has set us up with.

```
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── components/
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── About.vue
    └── templates/
        └── BlogPost.vue
```

Now, I won't go over _everything_ because there is a lot going on here and Gridsome, like most tools in the Vue ecosystem, has pretty stellar docs, which you can find [here](https://gridsome.org/docs). I will go over some of the bigger talking points though.

### Main.js

As you'll see with most of the files and folders in your newly bootstrapped project, the Gridsome team has done a great job of trying to outline the basics for everything. If you open up `main.js` , you should see something similar to:

```js
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
}
```

A few things to note here:

-   We're importing and registering a component called `DefaultLayout` globally. This is something called.. well.. a **layout** and we will talk about them very shortly.
-   As the comments suggest, if we wanted to register components/filters/directives with the Vue instance, this is where we would do it. This is also where we would import a global css file, which we will also do in another article.
-   You can see scripts mentioned as a potential import here. This is where you would inject things into the head of your document such as font awesome, google analytics, etc. (You might also be able to find a plugin for that - another topic we will discuss in a later article.)

### /layouts

Let's go ahead and move into the layouts directory since we've already mentioned a layout component. Layouts are basically just large wrapper components that you can use to define the _layout_ of certain pages, routes, or even your whole site.

If you open up `/layouts/Default.vue`, and take a look at the code inside the `<template>` tags, you should see

```jsx
<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>
```

So we have a few cool things happening here:

-   You can see a component here, `g-link`, that is Gridsome's wrapper around Vue-Router's `router-link`. It really acts the same way, but with the added benefit of prefetching data from those links using intersection observers. What this means, is if the link is in view, Gridsome will make the request in the background and grab all that data for the user. This way, when the user clicks the link, the transition is almost instantaneous. This is how sites like Gridsome and Gatsby make the user experience feel so fast when they're navigating around the site.
-   You'll probably also notice the `$static.metadata.siteName`, which is a topic for another time but the basics of it is this; Gridsome uses GraphQL under the hood to organize data. This allows you to write GraphQL queries in your components to fetch relevant data and present it like so. Here, we have fetched the name of our site from the `metadata` object. Pretty cool stuff! If you want to learn more about it, you can check the docs [here](https://gridsome.org/docs/data-layer/).
-   Lastly, we have a `slot` component. If you're unfamiliar with Vue slots, they are a way to create components that can be passed children. For example:

    ```jsx
    // CoolTitleComponent.js
    <template>
    	<header class='awesomeHeader'>
    		<h1 class='awesomeHeader--text'>
    			<slot></slot>
    		</h1>
    	</header>
    </template>

    // Somewhere else in our app
    <CoolTitleComponent>
      Wassssuppppp
    </CoolTitleComponent>
    ```

    In this example, we have a component called `CoolTitleComponent` , which contains a component provided to us by Vue, called `slot`. In this component we can do whatever we want, but for example sake let's just say our component applies some cool color to the text (purple, because it's the best) placed in our `h1` tag. Then somewhere else in our app we use our component and place the text "Wassssupppppp" in between the opening and closing tags, because why not.

    When Vue renders this component, the `slot` component will be replaced with the text that we passed in, and our component will be rendered as :

    ```jsx
    <header class='awesomeHeader'>
        <h1 class='awesomeHeader--text'>Wassssuppppp</h1>
    </header>
    ```

    Slots are super powerful, and I would definitely recommend reading more about them [here](https://vuejs.org/v2/guide/components-slots.html).

    So for our `Default` component, this means that we can structure anything that is passed in the way we see fit! With the code provided to you by the CLI, you can wrap any component you make inside of the `Default` component, and it will always render with a nav bar as seen in the code, as well as some global styles! We will be editing this file in our next article, so stay tuned 📺.

### Index.html and App.vue (optional)

I'm going to group these two files together because they are both optional. Normally when creating a new Vue application you'd have `App.vue` as the root of all components, and the main entry point. Gridsome, by default, takes care of this under the hood. However, you can override the default file by creating one of your own if you just create an `App.vue` file in the root of your `src` directory. We will be doing this to apply global transition effects to our app later on.

Index.html is handled the same way by Gridsome, and can be overridden by creating an `index.html` file in the root of your `src` directory as well. This probably won't be used as often, as you can actually inject scripts and cdn links via the `main.js` file as we discussed earlier. However, if that can't be done, or you'd just rather not do it that way, you can override the `index.html` and insert the content that way instead!

### /static

This one is fairly straight forward. Any files and directories you place here will be copied straight to the `/dist` folder during build time. This is where you'd put something like a font file that you're serving yourself.

### /pages

This directory is where you put all your, you guessed it, **pages!** Here you'll create `.vue` files that are various pages in your application. Any file you put here, Gridsome will automagically create a route for! So in the generated code we have:

```jsx
    ├── pages/
    │   ├── Index.vue
    │   └── About.vue
```

This means Gridsome has generated two routes for us, `/` (index.vue, this is the root of the site), and `/about`. Now can navigate to these routes in your browser like `localhost:8080/about`.

So we can see how it works, lets go ahead and create a new file in our `/pages` directory called `Blog.vue`. We'll put this into the file,

```jsx
<template>
    <Layout>
        <div>This is my blog!!</div>
    </Layout>
</template>
```

```js
<script>
    export default {
        name: 'Blog'
    }
</script>
```

Save your changes, and navigate to `[localhost:8080/blog](http://localhost:8000/blog)` in your browser. You should see your page load!

![Blog page](https://dev-to-uploads.s3.amazonaws.com/i/a5ivlfawrjll7kqb1tda.png)

### /templates

Straight from the Gridsome docs:

> Templates are used to create single pages for nodes in a collection. Nodes need a corresponding page in order to be presented on its own URL.

Now... some of you might have understood that. I wasn't one of those people - so let me try and explain in a way that I now understand.

If you are connecting your site to an external data source, say something like Contentful, Netlify CMS, or Wordpress, You would use templates to generate pages based on the data received from those data sources.

Still doesn't make sense? That's okay! Think of it like this:

Let's pretend you have a blog. The content of that blog is written using Netlify CMS and displayed on your Gridsome site. If the data of each of your posts (the headings, text, pictures, etc.) were all different flavors of Ben & Jerry's Ice Cream (Try Netflix and Chill'd, tweet @ me when you do 😋), then the container would be the template! The content might all change from post to post, but they'll all have the same structure.

![Ben & Jerry's Ice Cream](https://dev-to-uploads.s3.amazonaws.com/i/d64nacrlghfel2e7n2la.png)

> Okay.. but didn't you say this is what `Layouts` are for..? - you, probably.

Yes.. and no. Layout do _theoretically_ do the same thing, but for different types of data. A layout is something you apply manually to your components, to structure any content inside. A **template** is **also** a way to structure content, but it is applied **automatically** to certain types of content. In this case, a blog post.

This does require some manual configuration which you can learn about [here](https://gridsome.org/docs/templates/)

This was part 2 in my series about rebuilding my personal site with Gridsome! I know this one wasn't quite as exciting, but next time we will go over plugins in Gridsome, and we will add my favorite CSS framework, Tailwind CSS! See you all next time, and be sure to follow me on [twitter](https://twitter.com/_ronini)!
