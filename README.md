![Screen Shot](https://raw.githubusercontent.com/yasaricli/electron-nes/develop/assets/img/screenshot.png)

# Development

## Clone and Npm packages install

```bash
$ git clone https://github.com/yasaricli/electron-nes.git
$ cd electron-nes
$ npm install
```

### Bower packages install 
```bash
$ cd assets
$ bower install
```

### Less watch
```bash
$ gulp watch
```

## Start application
```bash
$ npm start
```

### Build
```bash
$ electron-packager . --platform=darwin --arch=x64 --version=0.36.12 --icon=assets/img/icon.icns --ignore=node_modules
```
