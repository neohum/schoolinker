
const { ipcRenderer } = require('electron')
// close app
function closeApp(e) {
  e.preventDefault()
  
  console.log("close app");
  ipcRenderer.send('close')
}

document.getElementById("closeBtn").addEventListener("click", closeApp);