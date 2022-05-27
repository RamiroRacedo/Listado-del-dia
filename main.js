const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    const win = new BrowserWindow ({
        width:1200,
        height: 600,
        minWidth: 600,
        minHeight: 480,
        frame:false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile("index.html")


    ipcMain.on('minimizeApp', () => {
        win.minimize()
    })
}

app.whenReady(). then() => {
    createWindow()
})