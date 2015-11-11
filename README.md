## Overview
Shared React &amp; React-Native codebase for use on the web, Electron (OSX\Win\Linux), iOS, and Android. 

## Supported Platforms
* **Web:** React
* **iOS & Android:** React-Native
* **OSX & Windows:** Electron

## Other Tools
* **Builds**: Webpack & Gulp
* **Testing**: Karma, Mocha, Chai, Sinon, and PhantomJS
* **Styling**: CSSModules, PostCSS, CSSNext
* **Data Handling & State Management**: Redux

## Getting Started
```
git clone https://github.com/TylerK/react-multi-platform.git
npm install
```

#### Web:
```
npm start
http://localhost:8080
```

#### IOS:
Load `./ios/iosApp.xcodeproj` in Xcode

#### Android:
TODO

#### Electron:
With `npm start` running, execute `electron ./desktop` in the root of the project. 
