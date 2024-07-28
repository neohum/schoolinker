const { ipcRenderer, shell } = require('electron')
const macaddress = require('macaddress');
const os = require('os');
const fs = require('fs');

let ipv4 = '';
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
    //ipv4 = all.이더넷.ipv4;
    //console.log("IP Address:", all);
    ipv4 = JSON.stringify(all, null, 2);
    if ("ipv4" in all.이더넷) {
      ipv4 = all.이더넷.ipv4;
    } else if ("ipv4" in all.이더넷1) {
      ipv4 = all.이더넷1.ipv4;
    } else if ("ipv4" in all.이더넷2) {
      ipv4 = all.이더넷2.ipv4;
    } else if ("ipv4" in all.이더넷3) {
      ipv4 = all.이더넷3.ipv4;
    } else if ("ipv4" in all.이더넷4) {
      ipv4 = all.이더넷4.ipv4;
    } else if ("ipv4" in all.이더넷5) {
      ipv4 = all.이더넷5.ipv4;
    } else if ("ipv4" in all.이더넷6) {
      ipv4 = all.이더넷6.ipv4;
    } else if ("ipv4" in all.이더넷7) {
      ipv4 = all.이더넷7.ipv4;
    } else if ("ipv4" in all.이더넷8) {
      ipv4 = all.이더넷8.ipv4;
    }
    else {
      ipv4 = "IP 주소를 찾을 수 없습니다.";
    }

    autoUpdater.on('checking-for-update', () => {
  log.info('업데이트 확인 중...');
});

    
  })
  
  memory = os.totalmem() / 1024 / 1024/ 1024;
  hostname = os.hostname();
  
 setTimeout(() => {
    document.getElementById("memory").innerHTML = "메모리: " + Math.round(memory.toFixed(2)) + "GB";
    document.getElementById("hostname").innerHTML = "컴퓨터 이름: " + hostname;
    document.getElementById("ipv4").innerHTML = "아이피: " + ipv4;
  }, 1000);
  document.getElementById("memory").innerHTML = "메모리: " + Math.round(memory.toFixed(2)) + "GB";
  document.getElementById("hostname").innerHTML = "컴퓨터 이름: " + hostname;
  document.getElementById("ipv4").innerHTML = "아이피: " + ipv4;
}

function computerInfoOff() {
  document.getElementById("memory").innerHTML = "";
  document.getElementById("hostname").innerHTML = "";
  document.getElementById("ipv4").innerHTML = "";

}

computerInfo()



document.getElementById("closeBtn").addEventListener("click", closeApp);