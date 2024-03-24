---
title: "Build A Dark Theme Toggle With The Composition API"
description: "Using the Vue 3 composition api to build a theme toggler"
pubDate: "Aug 17 2020"
heroImage: /theme-banner.jpg
# imageAlt: 'An amusement park at night.'
---

I recently built a theme toggle for my personal site because, well, everything has a dark theme these days right?
I've spent a lot of time with the composition api recently and after starting to impliment this with the options api,
it became pretty obvious how much code readability would improve by using the composition api and abstracting the functionality
to a separte file.

> Important note here: I am using the [vue-compositon-api-plugin](https://github.com/vuejs/composition-api) because I am adding this functionality to my gridsome site which is still using Vue 2.x.

### Composables

I'm going to start by creating a `composables` folder in my `src` directory. This is totally optional, but I assume this is going
to become the best-practice when it comes to drectory structore and code organization. I'm naming the folder `composables` because
these function abstractions are called [composition functions](https://composition-api.vuejs.org/#code-organization).

### useTheme.js

Now inside the `composables` directory, I'm going to create a new file, `useTheme.js`. `useX` is also a future best practice, and
is the [encouraged way to name](https://composition-api.vuejs.org/#code-organization) your composition functions.

> It is a recommended convention to start the function's name with `use` to indicate that it is a composition function.

Inside `useTheme` I'm going to add some boiler plate:

```javascript
import { ref } from "@vue/composition-api";

export default function useTheme() {
  const currentTheme = ref("light");

  function toggleTheme() {
    // @TODO
  }

  return {
    toggleTheme,
  };
}
```

Key things to note here:

- I'm importing `ref` from `@vue/composition-api`. In a normal Vue 3 application this would just be `vue`, but I'm using the composition api in a Vue 2 app with a plugin.
- I'm initializing a ref called `currentTheme`, which is being initialized with a default value of `light`. This will be the default theme when a user visits.
- I'm returning `currentThem` and the function `toggleTheme` from the `use` function. This is important to how this all works and I'll explain in more detail later.

### Toggling a theme

Now I'll impliment the toggle theme function:

```javascript
import { ref } from "@vue/composition-api";

export default function useTheme() {
  const currentTheme = ref("light");

  function toggleTheme() {
    if (currentTheme.value === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  return {
    currentTheme,
    toggleTheme,
  };
}
```

...That's it!

> wtf?! 😒 - you, probably

Dad jokes aside, lets impliment those two theme functions!

```javascript
function setLightTheme() {
  currentTheme.value = "light";

  document.documentElement.style.setProperty("--primary", "var(--purple)");
  document.documentElement.style.setProperty(
    "--background",
    "var(--bg--light)"
  );
  document.documentElement.style.setProperty("--text", "var(--text--light");
  document.documentElement.style.setProperty(
    "--link-text",
    "var(--link-text--light"
  );
  document.documentElement.style.setProperty(
    "--active-link-text",
    "var(--active-link-text--light"
  );
  document.documentElement.style.setProperty("--shadow", "var(--shadow--light");
  document.documentElement.style.setProperty(
    "--quote-bg",
    "var(--quote-bg--light"
  );

  process.isClient && localStorage.setItem("theme", "light");
}
```

```javascript
function setDarkTheme() {
  currentTheme.value = "dark";

  document.documentElement.style.setProperty("--primary", "var(--teal)");
  document.documentElement.style.setProperty("--background", "var(--bg--dark)");
  document.documentElement.style.setProperty("--text", "var(--text--dark");
  document.documentElement.style.setProperty(
    "--link-text",
    "var(--link-text--dark"
  );
  document.documentElement.style.setProperty(
    "--active-link-text",
    "var(--active-link-text--dark"
  );
  document.documentElement.style.setProperty("--shadow", "var(--shadow--dark");
  document.documentElement.style.setProperty(
    "--quote-bg",
    "var(--quote-bg--dark"
  );

  process.isClient && localStorage.setItem("theme", "dark");
}
```

The accompanying styles:

```css
/* variables */
:root {
  --purple: #6200ee;
  --purple-dark: #400088;
  --teal: #04dac6;

  --primary: var(--purple);
  --primary-light: hsl(265, 70%, 95%);
  --primary-dark: #5d3991;
  --secondary: #04dac6;
  --white: #fafafa;
  --off-white: #ffffffcc;
  --black: #1a1a1a;
  --darker-grey: #333;
  --dark-grey: #4e4c4c;
  --grey: #718096;
  --gray-light: #718096;

  /* Dark Theme */
  --bg--dark: #000c1d;
  --text--dark: var(--off-white);
  --link-text--dark: var(--off-white);
  --active-link-text--dark: var(--secondary);
  --shadow--dark: #121212;
  --project-border--light: var(--primary);
  --quote-bg--dark: rgb(2, 55, 81);

  /* Light Theme */
  --bg--light: var(--white);
  --text--light: var(--darker-grey);
  --link-text--light: var(--dark-grey);
  --active-link-text--light: var(--primary);
  --shadow--light: var(--grey);
  --project-border--light: transparent;
  --quote-bg--light: var(--primary-light);

  --background: var(--bg--light);
  --text: var(--text--light);
  --link-text: var(--link-text--light);
  --active-link-text: var(--primary);
  --shadow: var(--shadow--light);
  --project-border: var(--project-border--light);
  --quote-bg: var(--quote-bg--light);
}
```

So in these functions I'm:

1. Setting the value of the currentTheme, because I need to keep track of what the active theme is.
2. Using the native browser `setProperty` function, I'm finding the CSS variable that I need to change, and then passing in what I want the new valule to be.

> If this is your first time seeing `setProperty()` I **highly** recommend checking out [David Walsh's article](https://davidwalsh.name/css-variables-javascript)

The last line here is very specific to my development environment. Since I'm using Gridsome, when my site is built on Netlify it's going to run through all Vue components and turn them into static HTML. `localStorage` does not exist in Node, so trying to access it here will cause the build to fail. I'm using `process.isClient` to check if the current environment is in the browser. If it is, then it executes this line, setting the current theme in local storage. If not, the line is just skipped.

> `x && y()` is just shorthand for `if(x) { y() }`. If the first value is true, the latter is executed.

### Adding the composable to a Vue component

Now to actually _use_ this new functionality, it needs to be imported to a Vue component!

> I'm only going to show the relevant pieces here, but my personal site is open source and I definitely encourage you to check out the [here](https://github.com/Roninii/portfolio/blob/master/src/composables/useTheme.js) and [here](https://github.com/Roninii/portfolio/blob/master/src/layouts/Nav.vue).

In the template, I'll add a button with a click handler that points to the `toggleTheme` function.
This is just a regular 'ol button element with a [font awesome lightbulb icon inside](https://fontawesome.com/icons/lightbulb?style=regular)

```html
<button @click="toggleTheme" class="theme-toggle">
  <i class="far fa-lightbulb"></i>
</button>
```

In the script tag, I'll import the composable, extract the `toggleTheme` function, and return it from the `setup` function so it can be referenced in the template.

```html
<script>
  import useTheme from "~/composables/useTheme";

  export default {
    setup() {
      const { toggleTheme } = useTheme();

      return {
        toggleTheme,
      };
    },
  };
</script>
```

Notice how I'm destructuring `toggleTheme` from the **return** value of `useTheme`? This is what I mentioned earlier. Some of you that have been working with javascript
for a long time might have already recognized what's going on here. `toggleTheme` is using a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) to keep the
reference to `currentTheme` in sync!

> Closures are a huge and complicated concept that is out of the scope of this article. They're 100% worth learning though, and [this](https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/) is a great article to start with!

Now when the user clicks on the lightbulb:

1. The `toggleTheme` function will be called,
2. The value of `currentTheme` will be checked, and the appropriate theme function will be called.

This works!
![ronini.dev toggling between dark and light mode.](/gif/dark-mode-toggle.gif)

### Saving the user's preference

Some of you might've noticed that in the `set[X]Theme` functions, the current theme is being saved to local storage. This is so that the user's preference for dark or light
theme can be saved. However, as the code stands, nothing is actually _done_ with this data, and in fact, it causes a bug. So to take care of that,

```javascript
// ...
export default function useTheme() {
    const currentTheme = ref('light');

    if (process.isClient) {
        // check local storage for saved theme preference and set it
        const themePreference = localStorage.getItem('theme');
        if (themePreference) {
            currentTheme.value = themePreference;
            currentTheme.value === 'light' ? setLightTheme() : setDarkTheme();
        }
    }
//...
```

Here, `process.isClient` is being checked again so that this doesn't fail during build, as mentioned earlier.
If the code is being executed in the browser, the `themePreference` is retrieved from the user's `localStorage`. If the value
of `themePreference` is truthy, then the value of `currentTheme` is set to the retrieved value, and then the appropriate `set[X]Theme`
function is executed so that the the user's preference is now set on load!

### Conclusion

I had a blast implimenting this, and being able to pull all this logic out into a separate file and use the power of JavaScript's modularity is
an awesome feeling. Did you anything? Did you notice an implimentation detail that could be improved? Be sure to let me know on twitter!

As always, until next time 🖖🏻
