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
    "COMMAND": "com"
  },
  "elementType": {
    "TEXT": "txt"
  }
}
async function start() {}
async function sprite() {}
async function code() {}
async function costum() {}
async function extLib() {}
window.onload = start
