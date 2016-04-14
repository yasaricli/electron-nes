![Nes Logo](https://raw.githubusercontent.com/yasaricli/electron-nes/master/assets/img/icon.png)

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
$ electron-packager . Nes --platform=darwin --arch=x64 --version=0.36.9 --icon=assets/img/icon.icns
```
