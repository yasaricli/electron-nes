const { ipcRenderer, dialog }  = require('electron');

// IPC ELECTRON ON EVENTS
ipcRenderer.on('version', function(sender, data) {
  alert(data.version);
});
