const electron = require('electron');

// IPC ELECTRON ON EVENTS
electron.ipcRenderer.on('version', function(sender, data) {
  alert(data.version);
});
