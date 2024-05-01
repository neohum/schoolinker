const { app, BrowserWindow, ipcMain } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 798,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on('close', () => {
  app.quit()
})

