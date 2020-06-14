# Adopt-A-Lpaca
Project to learn new React features and other stuff I was missing:
* Hooks
* Portals
* Effects
* Reach Router
* Proper error handling
* Refs
* Emotion (css in js)
* Code splitting
* React with Typescript
* Server Side Rendering
* Redux
* Context
* Proper testing

Styling is material from "Frontend Masters - Intermediate React v2"

## About 
Project uses React and covers most of the main features
Uses Parcel for bundling since it is extremely simple and easy to setup
Uses Reacts own Context API for handling global state across components. In this came theming
Uses Portals for rendering a modal at the root level of the DOM
Reach Router instead of React Router because it handles accesibility better and i think is simpler to use

## Development
Install packages with `npm install`
Start project with `npm run dev`

If API is down you can run `npm run dev:mock` to get some mock data to work with

If parcel is having troubles use `npm run clear-build-cache` to clean cache and dist folder

Formatting all js/ts files with `npm run lint`