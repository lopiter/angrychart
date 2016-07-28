# Angry Chart


## Getting Started
- install node
- install gulp(https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Build Type Script
- requirement
- npm install
- gulp build (window user : npm run gulp build)

## Watch
- cd angrychart
- gulp watch (window user : npm run gulp watch)

## Configuration
1. open gulpfile.js in angrychart directory
```js
var rootJsPath = '../sample/src/main/resources/static';
// set javascript root path
var baseJsPath = 'base';
// set angular2 and util javascript path
var appPath = '../sample/src/main/resources/static/app';
// set your typescript code path
```

2. open systemjs.config.js in angrychart directory
```js
// set angular2 and util javascript path
// it need to be same baseJsPath in gulpfile.js
var baseJs = 'base';

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   baseJs + '/@angular',
    'angular2-in-memory-web-api': baseJs+'/angular2-in-memory-web-api',
    'rxjs':                       baseJs+'/rxjs'
  };
```

## Let's Play
