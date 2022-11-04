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


function cambiarTrack(track) {
  var path =  track.getAttribute("path")
  viejo_audio = document.getElementById("reproductor")
  audio_padre = viejo_audio.parentNode
  audio_padre.removeChild(viejo_audio)
  nuevo_audio = document.createElement("audio")
  nuevo_audio.setAttribute("id","reproductor")
  nuevo_audio.setAttribute("controls", "controls")
 // nuevo_audio.setAttribute("autoplay", "autoplay")
  source = document.createElement("source")
  source.setAttribute("src", path)
  source.setAttribute("type", "audio/mpeg")
  source.setAttribute("id", "reproductorSource")
  nuevo_audio.appendChild(source)
  audio_padre.appendChild(nuevo_audio)}
function cargarReproductor() {
   var select = document.getElementById("selectTrack")
   var path = select.options[0].getAttribute("path")
  nuevo_audio = document.createElement("audio")
  nuevo_audio.setAttribute("id","reproductor")
  nuevo_audio.setAttribute("controls", "controls")       
  source = document.createElement("source")
  source.setAttribute("src", path)
  source.setAttribute("type", "audio/mpeg")
  source.setAttribute("id", "reproductorSource")
  nuevo_audio.appendChild(source)
  padre = document.getElementById("reproductorBox")
  padre.appendChild(nuevo_audio)
}
       