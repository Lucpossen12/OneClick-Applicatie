const { app, BrowserWindow } = require('electron')
app.commandLine.appendSwitch('in-process-gpu');

function createWindow () {
  const win = new BrowserWindow({
    width: 850,
    height: 650,
    transparent: true, 
    frame: false,
    resizable:false,
    maximizable:false,
    webPreferences: {
      nodeIntegration: true, // enable Node.js integration
      contextIsolation: false, 
      devTools: false, //,

    }
  })

  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
