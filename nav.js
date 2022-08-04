const { ipcRenderer } = require("electron")





    // Buscamos los elementos.
   const minimizeBtn = document.getElementById("minimizeBtn");
   const maxResBtn = document.getElementById("maximizeBtn");
   const closeBtn = document.getElementById("closeBtn");
   const showHideMenus = document.getElementById("showHideMenus");
   const titlebar = document.getElementById("titlebar");


    // Añadimos los eventos para cada clic enviando desde
    // el render al proceso un evento especifico segun el boton.
    minimizeBtn.addEventListener('click', () => {
      ipcRenderer.send('minimizeApp')
    })
    maximizeResBtn.addEventListener('click', () => {
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


// Funcion para cambiar el icono de maximizar y restaurar.
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


// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isMaximized", () => {
  changeMaxResBtn(true)
})
ipcRenderer.on("isRestored", () => {
  changeMaxResBtn(false)
})


// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isFocus", () => {
  nav.classList.remove("blur")
  nav.classList.add("focus")
})
ipcRenderer.on("isBlur", () => {
  nav.classList.remove("focus")
  nav.classList.add("blur")
})