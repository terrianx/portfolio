# My Portfolio Website

## Intro - [Link to Website](https://yu-xiao-portfolio.netlify.app/)
Hi! This is my personal website that acts as a digital portfolio for all my projects, resume, and illustrations. I built this responsive multipage website from scratch using `React.js`, `HTML`, and `CSS`. Creating this was an amazing learning experience to develop my front end skills.


## What I Learned

### React.js
* `useState` and `useEffect`
  * I use these hooks in many components and learned how they are used in different contexts
  * Header section with random hero illustration
    * An integer tracks which illustration is live and accent colors change accordingly
    * A mapping of image number to the main hsl values is used
  * Mobile navigation bar
    * The state of the navigation bar is set and tracked using an event listener
    * Another state handles if the menu is open or closed
    * A hamburger menu appears when the screen width is below a certain threshold
  * Projects and Gallery page carousels
    * These pages use a custom carousel component I created to display different images
    * Which image being displayed is handled by an integer
    * The back and next button use arithmetic to function and modify the image number
* `useRef`
  * I used this for the click to copy contact info feature and learned about how React handles DOM manipulation
* `Router`, `Switch`, `Route`, and `HashLink`
  * I wanted to have a multipage website and learned how to use `Router`, `Switch`, and `Route` to link internal pages
  * `HashLink` is built into my custom button component for easy internal linking
* Components
  * I created many custom components to develop my website efficiently and effectively
  * I learned about exporting and importing different components - both custom and open source
  * Sometimes using an open source component did not have the customization that I wanted, leading me to create my own original ones

### Google Lighthouse Optimizing
* Throttling

### Dark Theme UI
* Use of elevation
* Color on dark backgrounds

### UX Principles
* Back to top buttons
* `alt` properties for images
* PDF viewer incompatability messages


## Pages

### Home - [Link](https://yu-xiao-portfolio.netlify.app/)
* Features a header section with image randomizer
  * Click on the image to change
  * All accent colors change on click
* Internal and external links to other pages and social media
* Contact section with click to copy information feature

### Resume - [Link](https://yu-xiao-portfolio.netlify.app/resume)
* Includes a PDF viewer of my resume
  * Responsive to browser resizing
  * View in Google Docs or download

### Projects - [Link](https://yu-xiao-portfolio.netlify.app/projects)
* Description and screenshots of my previous web projects
  * Uses custom built carousel component for project images
  * Responsive layout

### Gallery - [Link](https://yu-xiao-portfolio.netlify.app/gallery)
* Description and images of digital illustrations
  * Uses custom built carousel component for gallery images
  * Responsive layout

---
© Yu Xiao 2022. All rights reserved.