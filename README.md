# WIP
This repo is currently under active development and is prone to not quite working 100%. Docs may or may not be updated.

Apologies for the dust. Pull requests\issues\et. al. are extremely welcomed :]

## Current issues
React-Native 0.14.0 and above is not currently playing nicely with React in the same project as evidenced by: 

* React-Native [#4022](https://github.com/facebook/react-native/issues/4022)
* React-Native [#2985](https://github.com/facebook/react-native/issues/2985)

React-Native 0.13.2 is being utilized until there is a resolution or work around. Upgrade at your own risk. 

## Overview
Shared React &amp; React-Native codebase for use on the web, Desktop, iOS, and Android.  

## Supported Platforms
* **Web:** Via React
* **iOS & Android:** Via React-Native
* **OSX & Windows:** Via Electron

Note: Would love someone with Linux to let me know how it's working over there. 

## Other Tools
* **Builds**: Webpack (Perhaps Gulp at a later point)
* **Testing**: Karma, Mocha, Chai, Sinon, and PhantomJS
* **Styling**: Currently just JS as CSS for mobile, CSSNext for web. 
* **Data Handling & State Management**: Redux

## Getting Started
```
git clone https://github.com/TylerK/react-multi-platform.git
$ npm install
```

## Web:
```
$ npm run webpack:dev

- Open up http://localhost:8080 in your browser
```

## iOS:
```
$ react-native start

- Load ./ios/iosApp.xcodeproj in Xcode
- Select your target device or emulator
- Push run
```

## Android:
This one is more complicated than iOS. I highly suggest following the directions on the official react-native docs on how to get this setup properly.

Once you're up and running with an Android emulator or connected device:

```
$ react-native run-android
```

Note: The above command will trigger the default React-Native JS compiler if it's not already running via `$ react-native start`

## Electron:
```
With webpack dev server running:

$ npm run electron:dev 
```

## Unit tests:
`$ npm test` will look for and run tests from all files suffixed with `.test.js` in the `./src` directory. 

## TODO's:
* [ ] Finish building the TODO app on top of this stack. #irony 
* [ ] Write more robust tests for testing purposes. 
* [ ] Demo videos, links.
* [ ] Write up all associated docs.
