const pack = require('../package.json');

module.exports = (mainWindow) => {
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
            focusedWindow.webContents.send('getVersion', pack);
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
