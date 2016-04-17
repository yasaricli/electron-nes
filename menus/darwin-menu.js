const pack = require('../package.json');

module.exports = (app, mainWindow) => {
  return [
    {
      label: 'Electron',
      submenu: [
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click() {
            app.quit()
          }
        }
      ]
    },
    
    {
      label: 'Help',
      submenu: [
        {
          label: 'Version',
          click(item, focusedWindow) {
            focusedWindow.webContents.send('version', pack);
          }
        },
        {
          label: 'Repository',
          click() {
            require('shell').openExternal('https://github.com/yasaricli/electron-nes')
          }
        }
      ]
    }
  ];
}
