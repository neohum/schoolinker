
const { ipcRenderer, ipcMain, app } = require('electron')
// close app

function closeApp(e) {
  e.preventDefault()
  
  console.log("close app");
  ipcRenderer.send('close1')
}


function saveJsonFile(e) {
  e.preventDefault()
  let school_uid = document.getElementsByName("school_uid")[0].value;
  if (school_uid == "") {
    alert("인증키를 입력해주세요.");
    return;
  }

  
  
  ipcRenderer.send('saveData', school_uid);

  //console.log(school_uid);


  window.Bridge.saveData(school_uid);


}





document.getElementById("saveBtn").addEventListener("click", saveJsonFile);
document.getElementById("saveBtn").addEventListener("click", closeApp);

ipcMain.on('close1', () => {
  app.quit()
})

