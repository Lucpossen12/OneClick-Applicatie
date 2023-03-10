const { app, BrowserWindow } = require('electron')


function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 800,
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
