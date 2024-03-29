# My Portfolio Website

## Intro - [Link to Website](https://terrianx.netlify.app/)
Hi! This is my personal website that acts as a digital portfolio for all my projects, resume, and illustrations. I built this responsive multipage website from scratch using `React.js`, `HTML`, and `CSS`. Creating this was an amazing learning experience to develop my front end skills. Hosted by [Netlify](https://www.netlify.com/).


## What I Learned

### 1. React.js
* `useState` and `useEffect`
  * I use these hooks in many components and learned how they are used in different contexts
  * Splash section with random hero illustration
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

### 2. Google Lighthouse Optimizing
* Performance
  * 89 mobile / 90-100 desktop
  * Maximum performance on wide screen
  * I optimized this by using a `.webp` format for images
  * Further improvements was using throttling from `lodash.throttle` for the navigation bar using an event listener
    * Instead of updating the state for every exact change in size, updating happens every 700ms
* Accessibility
  * 100 mobile / 100 desktop
  * Added `alt` properties for all images
  * Use of semantic `HTML`
* Best Practices
  * 100 mobile / 100 desktop
* SEO
  * 100 mobile / 100 desktop

### 3. Dark Theme UI
* Use of elevation
  * Added subtle drop shadows for better contrast and distinction of elements
  * 'Higher' elements are lighter, as if closer to a light source
  * Higher priority text is lighter
* Color
  * Avoided pure whites and pure blacks for better readability
  * Reduced brightness of saturated and vibrant colors to reduce eye strain

### 4. UX Principles
* Skip to main content
  * Improves website accessibility
  * Allows for complete navigation using keyboard
* Back to top buttons
  * Improves user navigation
* Button interaction indicators
  * Lets users know exactly when something has been clicked
  * Paired with hover effects
    * Translations or appearance of auxiliary elements are used to better indicate when an element is being hovered
    * Helps users with color blindness
* Resume viewer
  * Custom built resume component vs PDF for better accessibility and responsiveness
  * Easier to view and use on mobile than embedded PDF
* Mobile design
  * Every page and component is optimized for mobile use on top of desktop use
  * Tighter spacing and appropriate font size for smaller screens
  * Landscape mode was considered and supported


## Website Pages

### Home - [Link](https://terrianx.netlify.app/)
* Features a splash section with image randomizer
  * Click on the image to change
  * All accent colors change on click
* Internal and external links to other pages and social media
* Contact section with click to copy information feature
  * Auto selects info for user on click as well in case clipboard is not available

![Screenshot of home page](./screenshots/home.png)

### Resume - [Link](https://terrianx.netlify.app/resume)
* Includes a custom viewer of my resume
  * Responsive to browser resizing
  * Accessible on any browser or device vs embedded PDF
  * View in Google Docs or download

![Screenshot of resume page](./screenshots/resume.png)

### Projects - [Link](https://terrianx.netlify.app/projects)
* Description and screenshots of my previous web projects
  * Uses custom built carousel component for project images
  * Responsive layout
  * Links to live sites and Github repository

![Screenshot of projects page](./screenshots/projects.png)

### Gallery - [Link](https://terrianx.netlify.app/gallery)
* Description and images of digital illustrations
  * Uses custom built carousel component for gallery images
  * Responsive layout

![Screenshot of gallery page](./screenshots/gallery.png)

---
© Terrian Xiao 2022. All rights reserved.  