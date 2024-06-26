const { app, BrowserWindow, ipcMain } = require('electron/main')
let fs = require('fs');
const createWindow = () => {
  if (fs.existsSync('school_uid.txt')) {
    const win = new BrowserWindow({
      width: 400,
      height: 798,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })

    win.loadFile('next.html')
    return;
  }
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

ipcMain.on('saveData', (event, data) => {
  let fs = require('fs');
  console.log(data);
  if (fs.existsSync('school_uid.txt')) {
    fs.unlink('school_uid.txt', (err) => {
      if (err) throw err;
      console.log('File deleted!');
    });
  }
  fs.writeFile('school_uid.txt', data, (err) => {
    if (err) throw err;
    console.log('Data saved');
  });

  const win = new BrowserWindow({
    width: 400,
    height: 798,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.loadFile('next.html')
  
})

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

