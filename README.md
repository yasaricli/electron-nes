# Nes Emulator

> NES emulator written in javascript. Its applicable to all systems; such as windows,linux, macos.

<p align="center">
  <img src="https://raw.githubusercontent.com/yasaricli/electron-nes/develop/assets/img/screen.gif">
</p>


# Development
After repo is cloned,install bower packages and run Gulp from within CSS. 

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
$ electron-packager . --platform=<platform> --arch=all --version=0.36.12 --icon=assets/img/icons/icon.icns --ignore=node_modules
```

#### Required options

platform           all, or one or more of: darwin, linux, mas, win32 (comma-delimited if multiple)
arch               all, ia32, x64

### THANKS
JavaScript NES emulator and emulation library [@jpikl](https://github.com/jpikl) - [cfxnes](https://github.com/jpikl/cfxnes)
