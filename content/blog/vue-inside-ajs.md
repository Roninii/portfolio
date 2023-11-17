---
title: "Vue Inside AJS?!"
description: "How we migrated an AJS app to Vue at Winning Streak."
author: Ronnie Villarini
date: "2020-08-03"
image: /img/inception.jpg
imageAlt: "A camera with a repeating image on the screen"
---

At Winning Streak, we recently began our transition of migrating our biggest project from AngularJS to Vue. This is the why and the how!

<!--more-->

## Why Vue?

---

First and foremost - AJS is reaching EOL. It was announced that on [July 1st, 2018, AJS would enter into a three year LTS period.](https://blog.angular.io/stable-angularjs-and-long-term-support-7e077635ee9c) The Angular team has moved onto Angular 2+ (simply named _Angular_), and has since stopped development on AJS.

So... Why [Vue](https://vuejs.org)? Firstly, [it's loved by nearly everyone who has used it](https://blog.angular.io/stable-angularjs-and-long-term-support-7e077635ee9c). Secondly, it's arguably one of the easiest frontend frameworks to get up and running with. Lastly, I have lots of experience with it, and so does the [other developer on my team](https://twitter.com/CSchliesser)! Vue recognizes that AJS got a lot of things right, and builds on those features while eliminating some of the pain points and poor decisions made.

## Methodology

---

Since Vue promotes incremental adoption, we chose to take that idea and run with it, but how? I found this _[amazing_ pen](https://codepen.io/al-the-x/pen/MBMLOZ) - we saw an approach that we knew would work for us.

The app in question is fairly large, and an integral part of day-to-day operations within the company. This means that a rewrite wouldn't be a great use of time since there are only two of us, and there are still plenty of new features and various fixes/enhancements to work on. We also had to ensure that whatever path we took, it had to live alongside the current implementations without breaking anything.

> Okay, cool - but where does the pen come in, and when are you going to get to the point? - you, probably

So here is the plan:

- Refactor _everything_ and get the codebase prepped for a modern approach to old solutions.
- Replace our build tool, gulp, with Parcel (I'll explain this decision in the next section)
- Use AJS components as an entry point for Vue components, acting as a wrapper until Vue becomes the larger portion of the app, in which case we could sprint to finally make the swap.

## Phase 1 - The Refactor

---

### Step 1: Refactoring components & their templates to model Vue SFC

I have to admit, this part was a little intimidating. There is a _lot_ of code, and due to the nature of how quickly everything had to be built - there are not a lot of tests - In fact, there aren't _any_... So we had to take baby steps, carefully performing reviews along the way.

First up, refactor the components to more closely model Vue's [SFC approach](https://vuejs.org/v2/guide/single-file-components.html). Not only did we love how easy SFCs are to work with and reason about, but refactoring AJS into a close clone of this would make it really easy to transition them into Vue components later on. So we moved all the separate template files into es6 string templates, and packaged them up inside the respective AJS template option.

From this:

```html [example.html]
<div>
  <h1>This is my component template!</h1>
</div>
```

```js [example.js]
angular.module("app").component("example", {
  controller: function ($scope) {
    // ... component logic ...
  },
});
```

To this:

```js [example.js]
angular
  .module('app')
  .component('example', {
    controller: function($scope) {
      // ... component logic ...
    }

    template: `
       <div>
         <h1>This is my component template!</h1>
       </div>
    `
  })
```

This is obviously a trivial example, but it illustrate the point. This refactored component looks _very_ similar to a Vue SFC, and will take just a few minutes to refactor to Vue syntax down the road.

### Step 2 : Replace Gulp with Parcel

Let me start by saying,

> There is absolutely nothing wrong with Gulp.

Pitchforks down? Okay, lets move on.

We chose Parcel for a couple reasons:

- No on _really_ enjoys working with Webpack.
- It echos Vue's "easy to get up and running" approach.

On top of those points, since it uses Babel under the hood, we also got access to extra javascript features without any extra configuration. A huge benefit, is Parcel's support of Vue SFCs [right out of the box](https://parceljs.org/vue.html).

Since there is no complicated setup or configuration required for Parcel, there isn't much to go over here. All we had to do was eliminate the gulp file that took care of concatenation, bundling, building, etc. Then we created an Index.html file, and an Index.js file that contained the bootstrap logic for the app. Parcel takes care of the rest!

🔗[Check out the official Parcel docs for more info](https://parceljs.org/getting_started.html)

### Step 3: Refactor components to default exports

This was the simplest part of the refactor, at was the last step. In ES6, we have support for import/export syntax like so:

```js
import MyComponent from "../components/MyComponent";

// MyComponent.js
export default {
  // ... component logic ...
};
```

Now if we refactor all our angular components to this syntax, we can simplify how register them with Angular, and this will again make the transition to Vue much simpler.

now in our `index.js` file, we can register our components like so:

```js{codeTitle: index.js}
// first mass import all the components
import * as components from './components/*.js';

// loop through all the components and register them
for (component in components) {
    angular.component(component, components[component].default);
}
```

Let's break this down just to clarify what is happening:

- First we're mass importing everything that ends in `.js` in our components directory, and giving this object that contains them all the name of `components`.
- Then we loop through each property in `components`, which each of which is a component object.
- Then we register this component with Angular. `Component` is the first argument which is the component's name. `components[component].default` is the actual component _object_. It's important to note the `.default` here, because the object contains a property, default, which is the default export declared in each component file.

Now instead of registering each component with Angular in each module, they're all being declared and registered in one location in our app. Even more importantly, this won't break when some of them get refactored to Vue components, because the import loop only imports `.js` files, not `.vue`!

## Phase 2 - Adding Vue

Now the fun part, and the part I've been dreaming of since I joined the company and started maintaining the AJS code. As previously discussed, this addition of Vue had to be just that - an addition. It needs to work _alongside_ the existing code, in a [symbiotic](https://africansunroad.com/symbiotic-relationships/#:~:text=Symbiotic%20relationships%201%20Parasitism%20This%20is%20one%20of,by%20a%20second%20species.%20...%20More%20items...%20) relationship.

Thankfully, I discovered the codepen mentioned earlier in the article that showcases using AJS to mount our Vue components. This works because Vue, like most SPAs, attaches itself to a part of the DOM, and controls everything within it. This is why most SPA boilerplate just has a single div with an id of "app".

> Great. Code please?

Calm down, I'm getting there.

```js{codeTitle: login.js}
import Login from './Login.vue'

export default {
  controller: function($element) {
		this.vue = new Vue({
      el: $element.find('Login')[0]
    })
	}

	template: `<Login ng-non-bindable></Login>`
}
```

> WTF?!

Yeah, those were my thoughts exactly.

So we're importing our Vue component and using Angular to find the custom tag in the DOM, and mount our Vue instance. This works... surprisingly well. Using this method, you can even pass data into the component from Angular! Now our Angular component is actually just a transparent wrapper. It is still _registered_ with Angular, so we can use any data we need from the Angular layer and still route to this component using our Angular router.

> Notice the use of `ng-non-bindable` here. Its required so that Angular doesn't try to apply Angular specific bindings to the Vue component.

This approach becomes _really_ cool when you start passing data between the layers.

```js
import Login from './Login.vue'

export default {
  controller: function($element, $stateParams) {
    this.vue = new Vue({
      el: $element.find('Login')[0]
      data() {
        return {
          userId: $stateParams,
        }
      }
    })
  },
  template: `<Login :userId='userId'></Login>`
```

In the example above, we're using the Angular router to gather the `userID`from the \$stateParams (url params), and passing it to the Vue instance. This works the other way too, allowing you to emit an event from the Vue instance that actually calls a method in the Angular instance. You might need to do this for a component that uses an Angular specific third party library, like Angular Bootstrap and modals.

The best part of this whole set up, is we can author Vue SFCs thanks to the built-in support from Parcel. Then we can import those components and reference them in the Angular instance. Done right, this whole system allows you to slowly replace Angular from the inside out, using Vue to control everything about the app. We will eventually get to a point where Angular is just providing the router and wrapping Vue components, in which case we will just replace it with the Vue router, and remove the Angular components!

## Conclusion

So this is how we converted our AJS app to Vue without a total rewrite, and without breaking anything in the process. We planned it for months, but it took only a couple days to sprint on the Parcel conversion, and now all we have to do is author new features in Vue and continue to replace bits and pieces with Vue. Hopefully you learned something, or at least discovered something interesting out of all this! If nothing else, at least it'll be a cool way to document this process 😃. Be sure to follow me on [Twitter](https://twitter.com/_ronini), and let me know what you think!

Until next time! 🖖🏻
