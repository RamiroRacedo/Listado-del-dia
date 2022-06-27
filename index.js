const { ipcRenderer } = require("electron")

var isLeftMenuAactive = false

var minimizeBtn = null;
var maxResBtn = null;
var closeBtn = null;
var showHideMenus = null;
var nav = null;


fetch('components/nav.html')
  .then(res => res.text())
  .then(htmlNav => {

    let oldElement = document.querySelector("script#replace_with_navbar");
    let newElement = document.createElement("div");
    newElement.innerHTML = htmlNav;
    oldElement.parentNode.replaceChild(newElement, oldElement);

    const closeBtn = document.getElementById("closeBtn");
    const minimizeBtn = document.getElementById("minimizeBtn");
    const maimizeBtn = document.getElementById("maximizeBtn");
    const showHideMenus = document.getElementById("showHideMenus");
    const nav = document.getElementById("nav");

    minimizeBtn.addEventListener('click', () => {
      ipcRenderer.send('minimizeApp')
    })
    maxResBtn.addEventListener('click', () => {
      ipcRenderer.send('maximizeRestoreApp')
    })
    closeBtn.addEventListener('click', () => {
      ipcRenderer.send('closeApp')
    })
    showHideMenus.addEventListener('click', () => {
      if (isLeftMenuAactive) {
        mySidebar.style.width = '0px'
        isLeftMenuAactive = false
      } else {
        mySidebar.style.width = '280px'
        isLeftMenuAactive = true
      }
    })
  })


function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) {
    maxResBtn.title = 'Restore'
    maxResBtn.classList.remove("maximizeBtn")
    maxResBtn.classList.add("restoreBtn")
  } else {
    maxResBtn.title = 'Maximize'
    maxResBtn.classList.remove("restoreBtn")
    maxResBtn.classList.add("maximizeBtn")
  }
}

ipcRenderer.on("isMaximized", () => {
  changeMaxResBtn(true)
})
ipcRenderer.on("isRestored", () => {
  changeMaxResBtn(false)
})

ipcRenderer.on("isFocus", () => {
  nav.classList.remove("blur")
})
ipcRenderer.on("isBlur", () => {
  nav.classList.add("blur")
})