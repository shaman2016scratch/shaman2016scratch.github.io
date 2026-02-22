let screen = document.getElementById("content")
let progLang = {
  "list": [
    "binMWVM1"
  ],
  "info": {
    "binMWVM1": {}
  }
}
async function start() {}
async function save() {}
async function load() {}
async function runLang1(c) {
  // binMWVM1
  let ncode = c.split(";")
  let code = ""
  for(let i = 0; i < ncode.length; i++) {
    code = fromBytes(ncode[i])
  }
}
