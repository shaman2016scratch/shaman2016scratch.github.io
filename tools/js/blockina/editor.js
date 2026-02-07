let screen = document.getElementById("content")
screen.innerHTML = `
  <a href="/tools/blockina/"><button>MAIN</button></a>
  <iframe src="text/html"></iframe>
  <button onclick="sprite()">Sprites</button><button onclick="code()">Code</button><button onclick="costum()">Costumes</button><button onclick="extLib()">ExtLib</button>
  <div id="codeCont">
    <p>Select a section</p>
  </div>
`
let sprites = [
  "background"
]
let code = {
  "background": []
}
let costumes = {
  "background": []
}
let extensions = {
  "mowe": {},
  "myView": {},
  "management": {},
  "events": {},
  "operators": {},
  "sensors": {},
  "data": {}
}
let blockina = {
  "blockType": {
    "COMMAND": "com",
    "REPORTER": "return",
    "BOOLEAN": "return.bool",
    "ARRAY": "return.json.array",
    "OBJECT": "return.json.object",
    "HAT": "com.hat",
    "LABEL": "ui.label",
    "BUTTON": "ui.button"
  },
  "elementType": {
    "TEXT": "txt",
    "BOOLEAN": "logic.bool",
    "JSON": "logic.json",
    "INPUT": "inp"
  }
}
let variables = {
  "sysValues": {},
  "lists": {}
}
let blocks = {}
let events = {
  "sys": {
    "projStart": false,
    "projStop": false
  },
  "messages": {}
}
const startButton = document.querySelector('#startProj');
startButton.addEventListener('mousedown', () => {
  events.sys.projStart = true;
})
startButton.addEventListener('mouseup', () => {
  events.sys.projStart = false;
})
const stopButton = document.querySelector('#stopProj');
stopButton.addEventListener('mousedown', () => {
  events.sys.projStop = true;
})
stopButton.addEventListener('mouseup', () => {
  events.sys.projStop = false;
})
async function start() {}
async function sprite() {}
async function code() {}
async function costum() {}
async function extLib() {}
window.onload = start
