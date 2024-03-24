---
title: "Composition API - what is it, and why?"
description: "Everything you need to know about the upcoming Vue Composition API"
pubDate: "2020-07-11"
heroImage: /img/composition-api-banner.webp
# imageAlt: "Glasses in front of multiple monitors displaying code and other developer tools."
---

## Before we even start...

Let's talk about a couple of things that should be noted that the composition API is **purely additive**. It is **not** required, nor is the old API **in any way** being deprecated. This was a huge misunderstanding and a pain point for many Vue developers.

## So.. Why a new API?

It boils down to a few major pain points that can be encountered when building larger scale Vue apps:

- TypeScript support is.. not great. Vue does some magic behind the scenes, and therefore type inference just doesn't work the way that one might hope. Now that TypeScript has seemingly taken the JavaScript community under its wing, it has become apparent that better type support is necessary.
- The organization of component logic. If you've ever worked with a large component file, you might know how hard it can be to figure out... just... wtf is going on. Everything is organized by the options API which works great most of the time, but once a component becomes complex you might find yourself jumping back and forth between the different options just to try and follow along with the logic.
- Mixins can be confusing. They are the best way to abstract and share certain logic between components as of right now, but they come with a host of their own problems including namespace collisions, and a lack of context about where certain properties are coming from.

## Okay so... What is it?

From the RFC summary:

> A set of additive, function-based APIs that allow flexible composition of component logic.

Let's break that down and see how it relates to our earlier points.

## TypeScript support

This one is **huge** for a lot of people. There is no denying that TypeScript is here to stay, and it has plenty of people willing to die on a hill to show how important it is. Regardless of how you feel about it, the IDE support and safety it provides is outstanding for the developer experience.

Along with the API change the Vue codebase has been rewritten with TypeScript in mind which is something you couldn't say about previous versions. What really makes this easier though, is the removal of the magical `this`.

> If you're unfamiliar with `this` in JavaScript or you still struggle with it, I highly recommend [this article at ui.dev](https://ui.dev/this-keyword-call-apply-bind-javascript/)

In Vue, there is a lot of magic happening behind the scenes, and one of those spells that they are casting is the way that `this` is automagically bound to the component instance for you. Those of you who used React in the early days may remember how painful keeping track of the scope of `this` could be. Vue made this easy by taking care of the scope for you. Ensuring that referencing `this` in your methods, computed properties, or even lifecycle hooks, was always bound to the component instance. This was great, as it greatly reduced cognitive overhead when working inside a component and it really lowered the barrier to entry for more inexperienced devs.

```js
export default {
  name: "MyComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++; // WHAT?! In normal JS "this" would not be what you think it is
      // but Vue takes care of that for you
    },
  },
};
```

The drawback of course to all of this was the extra work that had to be done to add proper type inference. Plugin authors had to jump through extra hoops, and TypeScript devs using Vue often resorted to using a [community package](https://class-component.vuejs.org/) that added decorators to classes and properties. Now, if you opt to use the composition API, there is no need for this extra legwork since you're working with more natural and type-friendly Javascript.

```js
import { ref } from 'vue'

export default {
    const count = ref(0)

    function increment() {
         count.value++  // note, you have to use ".value" to access it now
                        // but you no longer have to worry about what "this" actually is!
    }
}
```

## Organization of code logic

This is a huge one for me, as I've seen just how out of control a component can get at scale.

> Well, that shouldn't have ever happened. If you were using components correctly, you would've abstracted more of the logic into separate components to keep the original component simple.

Shut up, Karen. No one asked you.

Really though, sometimes things happen and components get huge. Like [this one](https://github.com/vuejs/vue-cli/blob/a09407dd5b9f18ace7501ddb603b95e31d6d93c0/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404), referenced in the Composition API overview.
When components do inevitably get out of control like this, it gets _really_ hard to understand what is going on. Logic can become fragmented because you have your data being declared at the top, but the method that uses that data is _all the way_ at the bottom, and maybe that method references a computed property somewhere in the middle.. you see where I'm going with this.
The more you have to navigate up and down a file, the more cognitive load you're enduring. [If users shouldn't have to think](https://smile.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/ref=sr_1_1?dchild=1&keywords=don%27t+make+me+think&qid=1594500153&sr=8-1), why should we willingly endure such strain when we're just trying to understand wtf is going on?!

Since the composition API doesn't rely on organization by component options, you're free to organize your code by logic. For example:

```js{codeTitle: Options API}
export default {
    name: 'MyComponent',
    data() {
        return {
            count: 0,
        };
    },
    computed: {
        prevCount() {
            return this.count > 0 ? this.count - 1 : this.count;
        },
    },
    methods: {
        increment() {
            this.count++;
        },
    },
};
```

```js{codeTitle: Composition API}
import { ref, computed } from 'vue'

export default {
    const count = ref(0)

    const prevCount = computed(() => count.value > 0 ? count.value - 1 : count.value)
    function increment () {
        count.value++
    }
}
```

Obviously, this is a small example, but you can see how this would really help clear things up. You can group your code into blocks based on what they're doing and you can focus all your attention on the block you're currently working in. It's like would you rather:

- Declare a variable right before the function that is going to use it
- Declare all variables at the top of a file and then all functions at the bottom.

If you chose the latter, then.. well. Sorry 'bout ya. 😜

## Code reuse

Lastly, there is code reuse. For a while now, the best way to share code among various components were mixins. Essentially, a mixin is a Vue object that exposes all the component lifecycle hooks and properties you might need, but it can be merged with another component.

This is really cool because if you have the same type of initialization logic, or perhaps several functions that you'd like to share between components, all you have to do is apply a mixin and you've got it! Of course, though, there were downsides.

- If the mixin happens to have the same data property or method name as the component using it, the mixin's options would be overwritten during the merge.
- If you're a new developer, or just a different member of the team looking at a component that someone else wrote, it might not really be clear where some of the properties and methods are coming from.

The composition API solves spectacularly solves this. Since you're essentially writing basic JavaScript, you can simply export your data as a function and import it elsewhere! Now if you're calling a method, `unicornPoop()`, somewhere in your component - you won't be confused as to where it came from, because you'll have an import statement at the top of the file. :chefs-kiss:

## Conclusion

The composition API looks to be an exciting new way for experienced Vue developers to write their components, and I really look forward to using it.

What about you? Are you planning to use it? Will they pry the options API from your cold, dead, hands? Are you going to use them both? (yes, that's possible.)

I'd love to hear about it! Be sure to follow me on twitter [@\_ronini](https://twitter.com/_ronini) and @ me all you want!

Until next time 🖖🏻
