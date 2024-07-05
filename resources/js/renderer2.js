const { ipcRenderer, shell } = require('electron')
const macaddress = require('macaddress');
const os = require('os');
const fs = require('fs');

let ipv4_1 = '';
let memory = 0;
let hostname = '';

fs.readFile('school_uid.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  
  
})

function openLinkerTest() {
  fs.readFile('school_uid.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    shell.openExternal(`https://neohum775.mycafe24.com/www/linker_test/${data}`)
  })

}

function openLinkerMake() {
  fs.readFile('school_uid.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    shell.openExternal(`https://neohum775.mycafe24.com/www/linker_make/${data}`)
  })

}

function openLink() {
  shell.openExternal('https://neohum775.mycafe24.com/')
}

function closeApp(e) {
  e.preventDefault()
  
  console.log("close app");
  ipcRenderer.send('close')
}

function computerInfo() {
  
  macaddress.all().then(function (all) {
    ipv4 = all.이더넷.ipv4;
    console.log("IP Address:", ipv4);
    ipv4_1 = ipv4;
  })
  memory = os.totalmem() / 1024 / 1024/ 1024;
  hostname = os.hostname();
 setTimeout(() => {
    document.getElementById("memory").innerHTML = "메모리: " + memory.toFixed(2) + "GB";
    document.getElementById("hostname").innerHTML = "컴퓨터 이름: " + hostname;
    document.getElementById("ipv4").innerHTML = "아이피: " + ipv4_1;
  }, 1000);
  document.getElementById("memory").innerHTML = "메모리: " + memory.toFixed(2) + "GB";
  document.getElementById("hostname").innerHTML = "컴퓨터 이름: " + hostname;
  document.getElementById("ipv4").innerHTML = "아이피: " + ipv4_1;
}

computerInfo();

document.getElementById("closeBtn").addEventListener("click", closeApp);