const { ipcRenderer } = require("electron")

var isLeftMenuAactive = false


const closeBtn = document.getElementById("closeBtn");
const minimizeBtn = document.getElementById("minimizeBtn");
const maximizeBtn = document.getElementById("maximizeBtn");
const titlebar = document.getElementById("titlebar");

minimizeBtn.addEventListener('click', () => {
  ipcRenderer.send('minimizeApp')
})
maximizeBtn.addEventListener('click', () => {
  ipcRenderer.send('maximizeRestoreApp')
})
closeBtn.addEventListener('click', () => {
  ipcRenderer.send('closeApp')
})



function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) {
    maximizeBtn.title = 'Restore'
    maximizeBtn.classList.remove("maximizeBtn")
    maximizeBtn.classList.add("restoreBtn")
  } else {
    maximizeBtn.title = 'Maximize'
    maximizeBtn.classList.remove("restoreBtn")
    maximizeBtn.classList.add("maximizeBtn")
  }
}

ipcRenderer.on("isMaximized", () => {
  changemaximizeBtn(true)
})
ipcRenderer.on("isRestored", () => {
  changemaximizeBtn(false)
})

ipcRenderer.on("isFocus", () => {
  titlebar.classList.remove("blur")
})
ipcRenderer.on("isBlur", () => {
  titlebar.classList.add("blur")
})
