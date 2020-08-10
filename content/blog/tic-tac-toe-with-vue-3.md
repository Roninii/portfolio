---
title: "Let's Build A Game With Vue 3"
author: Ronnie Villarini
date: "2020-08-08"
image: /img/vue-3-game-banner.webp
imageAlt: "Glasses in front of multiple monitors displaying code and other developer tools."
---

Today we're going to be building a tic-tac-toe clone like the one seen in the [React docs](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial). Except we're going to be using the Vue 3 Composition API.

🗣️You can check out the source code [here](https://github.com/roninii/vue3-tic-tac-toe) or the live demo [here](https://tic-tac-vue.netlify.com).

If you're totally new to the Vue 3 composition API, I recommend you check out my post on [that first](https://ronini.dev/blog/composition-api-what-is-it-and-why/).

This post will assume you have some basic understanding of the API, as well as Vue and JavaScript.

## Set up

---

I'm going to be using [Vite](https://github.com/vitejs/vite) for quick setup as well as a lightening fast dev server. I definitely recommend checking it out! It uses Vue 3 by default, so we don't have any additional set up to worry about to get going.

To create the project run:

```bash
npm init vite-app tic-tac-toe
cd tic-tac-toe
npm i
npm run dev
```

Now you should be all set up and if you open your browser to `localhost:3000` you should be looking at something like this:

![Project scaffolding with Vite](/img/vite-starter.png)

Take a moment to look around the code if you want, otherwise lets get started!

## The Board

---

First lets start creating the board. We will start by renaming the `HelloWorld.vue` component to `Board.vue`(Don't forget to change the imports!), then we will alter the template in `App.vue` along with replacing the boiler plate in the now named `Board.vue`.

```js{codeTitle: App.vue}
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board,
  },
};
```

The board and related styles:

```html{codeTitle: Board.vue}
<template>
  <div class="board">
    <span class="vertical-line-1"></span>
    <span class="vertical-line-2"></span>
    <Square />
  </div>
</template>

<script>
  import Square from "./Square.vue";

  export default {
    name: "Board",
    components: {
      Square,
    },
  };
</script>

<style scoped>
  .board {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .board::before,
  .board::after {
    background: linear-gradient(to right, #41b883, #35495e);
  }

  .vertical-line-1,
  .vertical-line-2 {
    background: linear-gradient(to right, #41b883, #35495e);
  }

  .board::before,
  .board::after {
    content: "";
    width: 100%;
    height: 5px;
    position: absolute;
    border-radius: 1rem;
  }

  .board::before {
    top: 33%;
  }

  .board::after {
    top: 66%;
  }

  .vertical-line-1,
  .vertical-line-2 {
    position: absolute;
    width: 100%;
    height: 5px;
    top: 50%;
    border-radius: 1rem;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .vertical-line-1 {
    left: 33%;
  }

  .vertical-line-2 {
    left: 66%;
  }
</style>
```

Here we are just taking care of the basic markup and styling. Using a couple spans, and the board's `before` and `after` elements to take care of the lines that make up the game board. We're also registering a `Square` component, which will be responsible for rendering the actual buttons that the user clicks to place their `X` or `O` , respectively. Let's build that now.

## The Squares

---

So before jumping into the code, let's think about what we expect from our Square component:

1. It should receive a value - When the user clicks on the button, it should receive the value of the current player, and we'll display that value in our template.
2. It should probably disable the button after it's been passed a value and/or if there is a winner.

That's ... really it! So let's build it out:

First let's take care of the template and the styles. We'll add a button with a disabled attribute which we will bind to `winner || value`, so that we can dynamically mark this button as disabled based on whether it has been clicked, or if the game is over. For accessibility reasons, we'll add a `name` attribute that we'll bind to a prop called `label`.

```html{codeTitle: Square.vue}
<template>
  <button class="square" :name="label" :disabled="winner || value">
    {{ value }}
  </button>
</template>

<style scoped>
  .square {
    border: none;
    width: 10rem;
    height: 10rem;
    background: none;
    color: inherit;
    font-size: 3rem;
    font-weight: 700;
  }

  .square:hover {
    cursor: pointer;
  }

  .square:focus {
    outline: none;
    background: #41b88330;
  }

  .square:first-child,
  .square:nth-child(2),
  .square:nth-child(3) {
    border-top: none;
  }

  .square:nth-child(3),
  .square:nth-child(6),
  .square:last-child {
    border-right: none;
  }

  .square:nth-child(7),
  .square:nth-child(8),
  .square:last-child {
    border-bottom: none;
  }

  .square:first-child,
  .square:nth-child(4),
  .square:nth-child(7) {
    border-left: none;
  }
</style>
```

Now let's add the JS! Since our component isn't in charge of maintaining any state, it'll be pretty lean. All we need is to declare our props: `label`, `value`, and `winner`.

```html
<script>
  export default {
    props: {
      label: String,
      value: {
        type: String,
        default: " ",
      },
      winner: null,
    },
  };
</script>
```

Cool! However, if you've been following along, you'll likely notice our app doesn't actually _do_ anything yet. Let's add the game logic now!

## Game Logic

Since we're using the [composition API](https://composition-api.vuejs.org/), we can organize our code in related blocks, and then initiate all of that in the `setup` function. That might sound complicated, so lets take a look at the code and see what that means.

Let's plan everything out before we start writing code. (I'm just doing this to look good. I almost always code before thinking, which you're not supposed to do 🤫)

1. We're going to keep track of the board, which we'll represent with an array. Each entry in the array will be one of the boxes on the board.
2. The board will also need to keep track of who's turn it is, and what value (`X` or `O`) that player represents.
3. When a square on the board is clicked, we should alter it's value in our array and notify the square of the change.

Cool! Now that we know how everything _should_ work, lets get to coding.

```js{codeTitle: Square.vue}
import { ref } from 'vue'

setup() {
  const board = ref(Array(9).fill(null));
  const playerValue = ref('X');

  const markSquare = (i) => {
    const boardCopy = board.value.slice();
    boardCopy[i] = playerValue.value;
    board.value = boardCopy;
    playerValue.value === 'X' ? (playerValue.value = 'O') : (playerValue.value = 'X');
   };

   return {
     board,
     playerValue,
     markSquare,
   }
};
```

Inside our setup function we're initializing two variables, `board` and `playerValue`. We're using `ref` here, a new addition from the composition api, to wrap the variable in a reactive reference. **_Reactive Reference_** is an important distinction here, because you have to remember this is an object, and you have to add `.value` to actually access the value held within. This allows us to use Vue's reactivity system, so that anywhere these variables are referenced will be updated when it changes.

Next we declare a function called `markSquare`, that takes one parameter, `i`. This is common shorthand for `index`, and you'll see why we're expecting this value shortly. The function then creates a copy of the board, assigning it to the variable `boardCopy`.

> 💡 I'm using `const` here out of personal preference. I prefer to always use const unless I _need_ to change the value, in which case I will change it to `let`. Since `ref` actually returns a reactive _object_ we can access and change `.value` without throwing errors. For more info on how that works, I recommend checking [this article over at ui.dev](https://ui.dev/var-let-const/).

We'll now access the value located in our `boardCopy` array, located at the index that was passed to our function, and change the value from `null` (the initial value) to the value of whoever's turn it is. After that has been taken care of, we will just replace our current board with the copy. Before we return from our function, we're going to check to see who's turn it is and set the appropriate value so that the next player can begin their turn.

Last step here is the explicit return object from our `setup` function.

```js
return {
  board,
  playerValue,
  markSquare,
};
```

Anything returned from the setup function becomes available in the template.

> It's Important to note that passing a `ref` to the return object gets automagically unpacked by Vue. So you'll be able to reference it in the template as `board` instead of `board.value`!

## Updating our board template

Now that we have our game logic in place, let's add the updates to the board so that we can start applying this logic and interacting with the game!

```html{1, 6-10}{codeTitle: Board.vue}
<h1 v-else>Next Up: {{ playerValue }}</h1>
<div class="board">
  <span class="vertical-line-1"></span>
  <span class="vertical-line-2"></span>
  <Square
    v-for="(square, i) in board"
    :key="`square-${i}`"
    :label="`square-${i}`"
    :value="square"
    @click="markSquare(i)"
  />
</div>
```

Alright! So we've added:

- An `h1` to show us who's turn it is.
- A loop via `v-for` to create a `Square` component for _each_ value in our `Board` array.
- A `:key` attribute so that Vue can keep track of each instance of `Square`. This helps Vue keep track of what should and should not be updated.
- We're now passing in the current index to the label prop. So our button label should read something like `square-1` .
- The `:value` of this square. We're getting this from our loop. Every square should have a value of `null` on initial render, and as the user clicks it will be updated with the current player's value.
- An `on click` handler that calls our `markSquare` function, passing in the `index` of **_this_** square so that we update the correct value in our board array.

Now if you load up the game, you should be able to click through each tile, marking each with an `x` or an `o`! We're still missing a couple features though:

1. We have no way of determining who won
2. Nothing happens when the game ends, the user would probably like to have some sort of text in the UI that tells them _who_ won, and that the game is over.

## Calculating a winner and notifying the user.

First, we'll jump back down to our `setup` function to add the logic for calculating a winner. I borrowed the majority of the below function straight from the [React Docs](https://reactjs.org/tutorial/tutorial.html#declaring-a-winner), with some modifications to Vue-ify it.

```js
const calculateWinner = computed(() => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      board.value[a] &&
      board.value[a] === board.value[b] &&
      board.value[a] === board.value[c]
    ) {
      return `${board.value[a]} Wins`;
    }
  }

  if (board.value.every((val) => val)) return "Tie!";

  return null;
});
```

So a few things are happening here:

1. We're creating an array of arrays, `lines`, that houses all the possible winning combinations.
2. We loop through each of the combos, checking to see if the current state of our board matches any of the possible conditions and declaring a winner if it does.
3. If there is no winner, and the board is full, declare the game a tie.
4. If the board isn't full and it isn't full yet, just return null.

Let's remember to declare this in our `return` object so we can use this computed function in the output.

```js{5}
return {
  board,
  playerValue,
  markSquare,
  calculateWinner,
};
```

Now we can reference this in our template to both disable all remaining squares on the board, and show a message to the user if a winner has been declared or if there is a tie.

```html{1-5, 17}
<header v-if="calculateWinner" class="header">
  <h1>
    {{ calculateWinner }}
  </h1>
</header>
<h1 v-else>Next Up: {{ playerValue }}</h1>
<span ref="boardRef" class="confetti-origin"></span>
<div class="board">
  <span class="vertical-line-1"></span>
  <span class="vertical-line-2"></span>
  <Square
    v-for="(square, i) in board"
    :key="`square-${i}`"
    :label="`square-${i}`"
    :value="square"
    @click="markSquare(i)"
    :winner="calculateWinner"
  />
</div>
```

That's it! The game is complete! We can add a little polish though. How about a reset button so the user can play again, and we can add some confetti to celebrate the winner!

## Reset and Celebrate

First let's add the reset button, as well as a the accompanying logic.

```html{5}
<header v-if="calculateWinner" class="header">
  <h1>
    {{ calculateWinner }}
  </h1>
  <button class="reset" @click="reset">Play Again</button>
</header>
<h1 v-else>Next Up: {{ playerValue }}</h1>
<span ref="boardRef" class="confetti-origin"></span>
<div class="board">
  <span class="vertical-line-1"></span>
  <span class="vertical-line-2"></span>
  <Square
    v-for="(square, i) in board"
    :key="`square-${i}`"
    :label="`square-${i}`"
    :value="square"
    @click="markSquare(i)"
    :winner="calculateWinner"
  />
</div>
```

```js{1-4, 10}
const reset = () => {
  board.value = Array(9).fill(null);
  playerValue.value = "X";
};

return {
  board,
  markSquare,
  playerValue,
  reset,
};
```

Yayyy 🎉 Now our users can play again if they want to.

As for the confetti, we'll use a small library from npm, [dom-confetti](https://www.npmjs.com/package/dom-confetti).

Install it via `npm i dom-confetti`, and then in `Board.vue` we can import it like so

```js
import { confetti } from "../../node_modules/dom-confetti/src/main.js";
```

> Note: If you're not using Vite, you could just use `'dom-confetti'` as the path. I'm using Vite, which requires you to point directly to the file in this case.

The `confetti` function takes a DOM element as it's parameter, so we'll add an element to our template just for this

```html{8}
<header v-if="calculateWinner" class="header">
  <h1>
    {{ calculateWinner }}
  </h1>
  <button class="reset" @click="reset">Play Again</button>
</header>
<h1 v-else>Next Up: {{ playerValue }}</h1>
<span ref="boardRef" class="confetti-origin"></span>
<div class="board">
  <span class="vertical-line-1"></span>
  <span class="vertical-line-2"></span>
  <Square
    v-for="(square, i) in board"
    :key="`square-${i}`"
    :label="`square-${i}`"
    :value="square"
    @click="markSquare(i)"
    :winner="calculateWinner"
  />
</div>
```

Now in the `setup` function, we'll declare a `ref` that points at this DOM node, and then in the `calculateWinner` computed property, we'll call `confetti` if there is a winner, passing in our `boardRef` as the origin of the confetti.

```js{1,25,37}
setup() {
    const boardRef = ref(null)

    // ...

    const calculateWinner = computed(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (
                board.value[a] &&
                board.value[a] === board.value[b] &&
                board.value[a] === board.value[c]
            ) {
                confetti(boardRef)
                return `${board.value[a]} Wins`
            }
        }

        if(board.value.every(val => val)) return 'Tie!'

        return null
    })

    return {
        board,
        boardRef,
        markSquare,
        playerValue,
        reset
    }
}
```

That's it! Open up your browser and try it out. (or if you haven't been following along, you can check out the live demo [here](https://tic-tac-vue.netlify.app).

> If you want you can [check out the repo](https://github.com/roninii/vue3-tic-tac-toe), where you'll find a couple extras like TS, and refactoring into composition functions! I would've liked to include that here, but that was just out of the scope for this post. If there is enough interest, I'd be happy to make a follow up post!

Hope you had fun, and hopefully you learned a thing or two about using the composition api in project setting instead of just theory and small examples!

Be sure to follow me on all the socials for more content like this! Until next time 🖖🏻
