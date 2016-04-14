<p align="center">
  <img src="https://raw.githubusercontent.com/yasaricli/electron-nes/713fa3eb0013e7e440125dc2e0bc583435b54c70/assets/img/icon.png">
</p>


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
