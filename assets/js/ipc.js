const ipcRenderer = require('electron').ipcRenderer;


// IPC ELECTRON ON EVENTS
ipcRenderer.on('getVersion', function(sender, pack) {
  alert(pack.version);
});
