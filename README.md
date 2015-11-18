# WIP
This repo is currently under active development and is prone to not quite working 100%. Docs may or may not be updated :]

Apologies for the dust.

## Current issues
React 0.14 and above will not play nicely with React

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
$ npm install
```

#### Web:
```
$ npm run webpack:dev

- Open up http://localhost:8080 in your browser
```

#### IOS:
```
$ react-native start

- Load ./ios/iosApp.xcodeproj in Xcode
- Select your target device or emulator
- Push run
```

#### Android:
This one is more complicated than iOS. I highly suggest following the directions on the official react-native docs on how to get this setup properly.

Once you're up and running with an Android emulator or connected device:

```
$ react-native run-android
```

Note: The above command will trigger the default React-Native JS compiler if it's not already running via `$ react-native start`

#### Electron:
```
With webpack dev server running:

$ npm run electron:dev 
```
