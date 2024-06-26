const { ipcRenderer, shell } = require('electron')

var linker_test = document.getElementById("linker_test")
var linker_make = document.getElementById("linker_make")
let fs = require('fs');
fs.readFile('school_uid.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
  if (linker_test == null){
    console.log("linker_make is null")
  } else {
    shell.openExternal(`https://neohum775.mycafe24.com/www/linker_test/${data}`)
  }
  linker_make.setAttribute("href", `https://neohum775.mycafe24.com/www/linker_make/${data}`)
  linker_test.setAttribute("href", `https://neohum775.mycafe24.com/www/linker_test/${data}`)
})

function closeApp(e) {
  e.preventDefault()
  
  console.log("close app");
  ipcRenderer.send('close')
}

document.getElementById("closeBtn").addEventListener("click", closeApp);