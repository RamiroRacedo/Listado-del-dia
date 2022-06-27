const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')

app.disableHardwareAcceleration()

function createWindow() {
  const win = new BrowserWindow({
    width: 780,
    height: 640,
    minWidth: 400,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true
    }
  })

  win.loadFile(`${__dirname}/index.html`);


  ipcMain.on('minimizeApp', () => {
    win.minimize()
  })

  ipcMain.on('maximizeRestoreApp', () => {
    if (win.isMaximized()) win.unmaximize()
    else win.maximize()
  })

  ipcMain.on('closeApp', () => {
    win.close()
  })


  win.on("maximize", () => {
    win.webContents.send("isMaximized")
  })
  win.on("unmaximize", () => {
    win.webContents.send("isRestored")
  })


  win.on("focus", () => {
    win.webContents.send("isFocus")
  })
  win.on("blur", () => {
    win.webContents.send("isBlur")
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

