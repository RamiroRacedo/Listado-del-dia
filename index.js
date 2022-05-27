

const closeBtn = document.getElementById("closeBtn")
const minimizeBtn = document.getElementById("minimizeBtn")
const maimizeBtn = document.getElementById("maximizeBtn")

minimizeBtn.addEventListener('click', () => {
    ipcRenderer.send('minimizeApp')
})