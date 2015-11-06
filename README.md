## Overview
Shared React &amp; React-Native codebase for use on the web, Electron (OSX\Win\Linux), iOS, and Android. 

## Supported Platforms
* **Web:** React
* **iOS & Android:** React-Native
* **OSX & Windows:** Electron

## Other Tools
* **Builds**: Webpack & Gulp
* **Testing**: Karma, Jest, and PhantomJS
* **Styling**: PostCSS with CSSNext
* **Data Handling & State Management**: Redux

## Getting Started
```
git clone https://github.com/TylerK/react-multi-platform.git
npm install
npm start
```

This will do the following:
* Install all necessary dependencies
* Spin up `webpack-dev-server` for hot module reloading
* Launch a browser to `localhost:8080`
* Launch Electron with devtools open
* Build the .xcodeproj file 
    * TODO: Is there a way to launch this automatically? 
* Build the Android file(s) 
    * TODO: look into this

## Deploying
TODO: Write this.
