# HerTechTrail Assignment - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). 
## Table of contents

- Overview
  - The challenge
  - Screenshot
  - Links
- My process
  - Built with
  - What I learned
  - Continued development
  - Useful resources
- Author
- Acknowledgments

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted
- Toggle light mode and dark mode

### Screenshot

![](./images/solution.png)


### Links

- Solution URL: https://github.com/janeAnezi/Age-Calculator
- Live Site URL: https://janeanezi.github.io/Age-Calculator/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- https://styled-components.com/ - For styles


### What I learned


```html
<h1>Some HTML code I'm proud of</h1>
```
```css
tailwind css animation animate
placeholder styling placeholder:font-bold

customising css theme
exports.theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'display': ['Oswald'],
      'body': ['"poppins"'],
    }}
```
```js
how to Convert milliseconds to years, months, and days
    Math.floor(dateDifference / (365.25 * 24 * 60 * 60 * 1000));
```
* storing data in the local storage
* writing condition statements 
* function declaration vs function expressions



### Continued development

While completing this challenge, I became more comfortable with JavaScript and its interactions with HTML and CSS. To further enhance my skills, I plan to explore more advanced JavaScript concepts, improve the user interface, and ensure the application is responsive across various devices. 

### Useful resources
https://developer.mozilla.org/ - A comprehensive resource for web developers.
https://www.w3schools.com/ - A simplified and interactive learning resourse for web developers.
Frontend Mentor - A platform to practice coding by building realistic projects.
## Author

- Website - http://janeanezi.github.io/Portfolio/
- Frontend Mentor - https://www.frontendmentor.io/profile/janeAnezi
- Twitter - https://twitter.com/AhnnieA


## Acknowledgments

I would like to express my deepest gratitude to herTechTrail academy for providing this challenging project, helping me improve my coding skills. Special thanks to my coaches.
