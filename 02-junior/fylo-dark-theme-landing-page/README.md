# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](images/screenshot.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-56ecfAcox](https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-56ecfAcox)
- Live Site URL: [https://fylo-dar-mode.vercel.app/](https://fylo-dar-mode.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Not really a "new" learning, but I'm pleased with how I split the address in the footer off onto a separate column below:

```css
.footer__first-list {
  display: grid;
  grid-template-areas: "address phone" "address email";
  grid-template-columns: 1fr 1fr;
  li:nth-of-type(1) {
    grid-area: address;
  }
}
```

## Author

- Frontend Mentor - [@fraserwat](https://www.frontendmentor.io/profile/fraserwat)
- Twitter - [@fsrtweet](https://www.twitter.com/fsrtweet)
