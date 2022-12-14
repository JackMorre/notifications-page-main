# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot%202022-12-14%20at%2022-21-21%20Frontend%20Mentor%20Notifications%20page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Design

### What I learned

I feel like I learned a lot about CSS with this and how selectors work. I was try to figure out to select the last child of a an element and then relaised after about an hour that they need to have the same class in order for :last-child to work.

It was a good experience for me to figure out new things with CSS and touching on little thing with JS.

This is the follow code I but in to allow me to select the last element to get me to and

```CSS
.new-notification .text-container .main-line .select:last-child::after {
	content: "";
	position: absolute;
	display: block;
	top: 0px;
	right: -8px;
	bottom: 0;
	background-color: hsl(1, 90%, 64%);
	width: 5px;
	height: 5px;
	border-radius: 50%;
	margin: auto 0;
}
```

Now that i look at this again, probably would have been easier to just create a div in HTML rather than try to make a Pseudo element work. BUt hey, I learnt more doing it the hard way.

I also touch on a little bit of JS in this one and I feel like I cam getting better and deconstructing what is wrong and figuring out bug. A lot of the time, I just like to do a hard reset and hide the previous code so I can see how I can make it better with a different try.

### Continued development

I still struggle with JS but my understanding of different elements of the language is coming together. I also feel that I have developed better problem solving skills and the correct things to look up to make things work.

## Author

- Frontend Mentor - [@JackMorre](https://www.frontendmentor.io/profile/JackMorre
- Twitter - [@dollywob](https://www.twitter.com/dollywob)
