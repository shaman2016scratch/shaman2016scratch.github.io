let screen = document.getElementById("content")
screen.innerHTML = `
  <a href="/tools/blockina/"><button>MAIN</button></a>
  <br><button id="startProj">Start</button><button id="stopProj">Stop</button>
  <iframe src="data:text/html," id="scene" width="360" height="480"></iframe>
  <iframe src="data:text/html,<html><head></head></html>" id="terminal" width="360" height="480"></iframe>
  <button onclick="sprite()">Sprites</button><button onclick="code()">Code</button><button onclick="costum()">Costumes</button><button onclick="extLib()">ExtLib</button>
  <div id="codeCont">
    <p>Select a section</p>
  </div>
`
let scene = document.getElementById("scene")
let terminal = document.getElementById("terminal")
let sprites = [
  "background"
]
let code = {
  "background": [
    {
      "x": 0,
      "y": 0,
      "blocks": [
        { "ext": "terminal", "blockId": "print", "elements": {} }
      ]
    }
  ]
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
let vm = {}
let termHelp = {}
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
