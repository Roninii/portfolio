---
title: "What Neovim taught me about myself"
description: "A reflection on my experience learning Neovim and what I learned about myself in the process."
pubDate: "2024-04-08"
heroImage: /nvim.png
---

> Before we get started, I'm going to say "Vim" a lot in this article. My experience has actually been with Neovim, but most, if not all, of what I have to say here will be applicable to either.

So I've been using [Neovim](https://neovim.io/) for roughly a month now and it has been quite the experience. I've had several moments of almost giving up, I've learned a lot about what makes this tool so special, and, surprisingly, I've learned a lot about myself in the process. I'll get to that towards the end of the post, as it's perhaps a little more philosophical and maybe not what most people will be interested in.

## The Learning Curve

Everyone has heard about how hard Vim is to learn. The "I can't exit Vim" meme has probably been tired out at this point, and it's true, it is pretty difficult. What only those who seem to get through that learning curve talk about though, is how **worth** it is. I had heard this a handful of times throughout my career from the few Vim users I encountered, but I never really took it seriously. I do believe that keyboard shortcuts are something everyone should learn, but I didn't really think it would go much further than that.

I was wrong. I was so, so wrong.

## Vim Motions

This is the first thing that you'll really learn if you embark on this journey, and it's arguably where the biggest benefit is. The ability to do *so* much without ever leaving home row is incredible. As I said before, I've always been a fan of keyboard shortcuts, but Vim takes that to another level. Navigating code without moving my hand awkwardly to the arrow keys (or holding down a modifier key to access the layer where my arrows live on my [ZSA Voyager](https://www.zsa.io/voyager)), using `w`, `b`, or `e` to flow through words, `f` or `t` to jump to (or just before) a specific character... the list goes on. It really is not only more efficient, but also just so much more enjoyable.

> Note: Efficiency does **not** always mean speed. You may very well be fast with your mouse or however you navigate your code, but the it's undeniable that hitting `e` to go to the end of a word is just more **efficient** than holding down option/alt and tapping the right arrow key.

These motions are just the tip of the iceberg, really. There are so many more and I'm still not *quite* to the point where I **never** have to think about it, but I *am* to the point where it's comfortable and navigating in other programs feels clunky and difficult. Honestly, once you get comfortable with the Vim motions, you could probably just stop here. There are Vim modes or plugins in almost any other editing software that will allow you to use them and, like I said before, this is largely the biggest benefit.

## Enjoyment

It's weird to title a section "enjoyment" a few paragraphs after talking about just how difficult or frustrating learning Vim can be. It's true though, it's an absolute blast. In fact, I'd go so far as to say that learning Vim has sparked my love for code again, something that I have really lost over the last year or so while battling chronic feelings of disinterest. Learning Vim was so much fun that I found myself somewhat addicted to it. I watched countless videos, read articles, spent time playing [vim adventures](https://vim-adventures.com), and just found myself fully immersed. Not only was I enjoying the process, but I was also enjoying the dopamine hit of *learning* and seeing evidence of my improvement as I went from stumbling through the most basic of motions to (seemingly) *flying* through my code at work.

## What I learned about myself

> This section is going to be very specific to me, my experience, and my own personal growth. If you're not interested in that, feel free to stop here. I really hope you give Vim a shot though, and if you do, please let me know how it goes for you!

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThycjI5NWNkbWljYjI3ZDl1cjgzNHFqdnY5Ym80a25mMm9jY3I3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYEwUrE0ei2BAGc/giphy.gif" alt="A man with a skull reciting the famous 'to be or not to be' line by shakespeare." class="small-img my-8"/>

So, before I speak about what I learned about myself, I want to share how I even got started on this path.

A former manager, mentor, and now good friend of mine whom you may know as [Dreams of Code](https://www.youtube.com/@dreamsofcode), absolutely blew me away when I used to pair with him. When I started to grow interested in learning, I had a few conversations with him about it and he suggested Vim Adventures. I played through the first few levels, but it wasn't really clicking for me. I was mildly interested at best. I did change the arrow keys on my keyboard to be on a layer under `h,j,k,l` as opposed to the `i,j,k,l` that I had been using, but that was about as far as I got for several months after.

Fast forward to [Zed](https://zed.dev) going open source, and I grew interested. A new editor by the folks who originally made Atom sounded cool, but also, so did something new. I had been using VS Code since I started as a dev, and other than changing my color scheme here and there, I hadn't really tried to branch out. When I launched Zed for the first time, I noticed the welcome screen had a checkbox for enabling Vim mode. That's cool, I thought, Vim mode out of the box? Sure, I'll give it a shot. So I took this as an opportunity to not only try out a new editor, but also learn Vim motions.

This actually went surprisingly well. I also watched a course on [Zero to Mastery](https://zerotomastery.io) that went into more depth on not only the motions, but also taught me advanced motions and how things like registers and marks worked. Unfortunately, I was frequently running into problems in Zed where certain things (marks, for example) weren't supported in Zed. The course was being taught using the [Vim plugin](https://github.com/VSCodeVim/Vim) for VS Code, so I decided to move back over to VSC while continuing through the course. 

This was where I had my first internal struggle. At some point I thought, this is kind of silly. Why am I using a plugin to emulate Vim when the whole point was to get away from VSC. I had also found ways to get around some of my issues in Zed, but why do that when I was still just using a crippled version of Vim? So I decided to switch over to Neovim.

> Note: I'm not in the slightest implying that there is anything *wrong* with VSC or Zed. I still think VSC is great, and I'm still very closely following Zed as I'm still **very** interested in it's direction. I was just having so much fun, and as [I've said before](https://x.com/_Ronini/status/1772286640687398965), following your curiosity is so important for growth.

### LazyVim

At the end of the above mentioned course, there was a section on Neovim, and in that section the instructor walks through the process of installing [LazyVim](https://www.lazyvim.org/). This seemed great! A fully-functioning IDE in Neovim, right out of the box? Fantastic.

In my case, this couldn't have been further from the truth. In fact, this was the first time I almost gave up on vim all together. LazyVim is actually great. It has so many useful plugins, lots of great defaults, and it saves you lots of time on configuring Neovim. For me though, it was so incredibly *overwhelming*. There was just so much, and if I wanted to change something, I was totally lost on where to go to change it. I think LazyVim actually does a good job of documenting things, but as my first experience with Neovim, a lot of it just simply didn't make sense to me.

### Kickstart

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2drOGh0MjdidDh3d2k0YTM3MXFmeWk2YmlodG1nZ3N0b2F6ZTg2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5hmmIVqBr9GJXxiikr/giphy.gif" alt="A man kickstarting a motorcycle." class="small-img my-8"/>

So I backed out and moved back to going back and forth between Zed and VSC for a week or so. Then I remembered I had seen [a video by TJ](https://www.youtube.com/watch?v=m8C0Cq9Uv9o) on [Kickstart](https://github.com/nvim-lua/kickstart.nvim), a more minimal **launch point** for your Neovim config. This resonated more with me and how I learn. 

You see, I like taking things a little slower. I do enjoy jumping in, getting my hands dirty, and learning by doing, rather than by watching/reading. However, I do think there is a line to how uncomfortable I can be before it just becomes too much. Kickstart was the perfect balance and was exactly what I was looking for. It provides some sensible defaults for various options and  keymaps, some basic plugins, and the best part? It's all in a single, well-documented file. Combine this with the video linked a above, and I quickly felt like I could get up to speed. Within a day or two, I had an editor that I felt comfortable enough with to actually use all day for work.

### The Second Time I Almost Gave Up

Things seemed to be going pretty well for a day or two, but I didn't quite have my Vue tooling set up properly. I spend most of my day working in Vue, and without getting this set up properly, I knew it was only going to be a matter of time before I was back in VSC with all the tooling that I had come to appreciate.

So I started trying to get it set up. I started with some googling, which lead to reading various forms of documentation. Here is where the problems started. Vue's official docs point to a repo that shows how to install the recommended tooling via something I had never heard of called `coc-nvim`. After talking with Dreams of Code, it sounded like that was something I should avoid as it was an older way of dealing with LSPs. 

Wait, LSPs. I've heard that before.. right?

> Yes, I had. In TJ's video I linked above and also in the documentation in the init.lua file for Kickstart. Both were just so information dense, that I forgot a lot of the information that wasn't immediately relevant.

So I kept looking and eventually found the documentation for how to set up Volar in combination with TS Server. I got this set up and it seemed to be working! I was seeing the same functionality (for the most part. The core functionality I felt was necessary at least.) that I had in VSC, and I thought everything was good to go.  Well. Not Quite.

I guess while setting this all up, browsing various files and doing basic testing, I had neglected to save any of the files I was doing my testing in. The next day, when I performed my first code change, I hit save and... everything disappeared. My entire file. All the code was replaced with blank lines, and my only option was to `q!` out of Neovim, and perform a `git checkout` on the file I had edited to recover the code. This issue was particularly annoying because I tried to just simply undo everything by hitting `u`, but then every time I saved, it would happen again. Meaning there was no way for me to save the file without losing everything and being forced to reset the file with Git.

> The more experienced Vim users will know what's going on here, and will have by no doubt figured out that I _could_ actually save without this issue. We're getting there. Settle down.

Some frustration, mild panic, and a few minutes (hours) of frantic googling later - I found my problem on a GitHub issue. I had assumed that this was related to my config, as commenting out my Volar and TS Server setup in my `init.lua` prevented this from happening. Unfortunately, I just didn't really understand _why_. Turns out, it was a bug related to TS Server and the `format on save` action. 

I fixed my issue, and was able to finish my workday without more hiccups, but at this point I was beginning to question everything. Why was I bothering to learn Vim. I had learned the motions, but I was also *very* competent with VS Code's keybindings and was still very fast ... just not as efficient. Did it matter? Did I ever even stop to ask myself _why_ I was doing this? Did I really want to move to a tool that was going to end up requiring this level of frustration?

### Difficulty Is Fun


<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5lOG10d3loMzV5eDh5a2ppNDd5dGtmMGlqamtsMDgwcTZzeTI4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49JKCSoloVTGjmWQ/giphy.gif" alt="A knight warming his hands by the famous infamous bon fire made famous by the video game series Dark Souls" class="small-img my-8"/>

This is it. This was the thing that Neovim *really* taught me about myself. Yeah, it taught me that learning you tools is important. It taught me that stopping to question whether or not you really need all those extensions or whether all those different buttons, icons, and notifications in my editor were even important. 

More than anything, it made me reflect. When I almost gave up because things were hard, I spent a couple days not only feeling bummed out, but also thinking about what went wrong. I mean, this shouldn't be that surprising right? It's a large portion of why so many of us like to code. We like solving problems. So I came back. Why? Because I *like* to do difficult things.

I get the most enjoyment out of competitive or difficult video games like League of Legends and Dark souls. I get more enjoyment out of doing things "the hard way" frequently, just because it's more engaging. No, I don't always. I'm not out here mowing my lawn with scissors, but I do find more difficult activities to be more engaging and ✨rewarding✨.

So, at least for now, I'm going to continue using Neovim. I haven't run into any other issues since that day, either. Maybe something like that will happen again, but I really think that the "I lost x amount of time on my Neovim config" comments are largely self-induced. I really think that, just like all software, you may encounter bugs, but you don't *have* to "lose" a bunch of time fiddling with your config **if you don't want to**. I've spent another handful of hours, but it's largely been because I've added a few more plugins here and there, messed with my keymaps, or I've just simply spent some time going over everything to make sure I **really** understand **my** config.

At the end of the day, that's what it really is. Yours. **That's** what makes Neovim special.

Until next time. Cya nerds. 👋
