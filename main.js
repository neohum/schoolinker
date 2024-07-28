const { app, BrowserWindow, ipcMain,  dialog } = require('electron/main')
const log = require('electron-log')
let fs = require('fs');
const { autoUpdater } = require('electron-updater');


const server = 'https://github.com/neohum/schoolinker/releases/tag/'
const url = `${server}/${app.getVersion()}`
let updateInterval = null;

setInterval(() => {
  autoUpdater.checkForUpdates()
}, 6000)

autoUpdater.on('update-avilable', (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Ok'],
    title: 'Update Available',
    message: process.platform === 'win64' ? releaseNotes : releaseName,
    detail:
      'A new version download started. The app will be restarted to install the update.'
  }

  dialog.showMessageBox(dialogOpts);
  
  updateInterval = null;
})


autoUpdater.on('update-downloaded', (_event, releaseNotes, releaseName) => {
   const dialogOpts = {
      type: 'info',
      buttons: ['Restart', 'Later'],
      title:'Application Update',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'A new version has been downloaded. Restart the application to apply the updates.'
   };
   dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall()
   });
});
autoUpdater.on('error', (message) => {
  console.error('There was a problem updating the application')
  console.error(message)
})


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



autoUpdater.on('checking-for-update', () => {
  log.info('Checking for update...')
})

autoUpdater.on('update-available', (info) => {
  log.info('Update available.')
})
autoUpdater.on('update-not-available', (info) => {
  log.info('Update not available.')
})
autoUpdater.on('error', (err) => {
  log.info('Error in auto-updater. ' + err)
})

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%'
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')'
  log.info(log_message)
})

autoUpdater.on('update-downloaded', (info) => {
  log.info('Update downloaded')
  autoUpdater.quitAndInstall()
})

app.whenReady().then(() => {
  createWindow()

  autoUpdater.checkoForUpdates()

  updateInterval = setInterval(() => autoUpdater.checkForUpdates(), 600000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
      autoUpdater.checkoForUpdates()

    }
  })
})

ipcMain.on('close', () => {
  app.quit()
})

