
const { ipcRenderer, ipcMain } = require('electron')
// close app
function closeApp(e) {
  e.preventDefault()
  
  console.log("close app");
  ipcRenderer.send('close')
}



function saveJsonFile(e) {
  e.preventDefault()
  let school_uid = document.getElementsByName("school_uid")[0].value;
  
  ipcRenderer.send('saveData', school_uid);

  //console.log(school_uid);
;

  window.Bridge.saveData(school_uid);
}

document.getElementById("closeBtn").addEventListener("click", closeApp);

document.getElementById("saveBtn").addEventListener("click", saveJsonFile);


