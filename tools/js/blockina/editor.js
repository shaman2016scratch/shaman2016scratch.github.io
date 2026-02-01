let screen = document.getElementById("content")
screen.innerHTML = `
  <a href="/tools/blockina/"><button>MAIN</button></a>
  <iframe src="text/html"></iframe>
  <button onclick="sprite()">Sprites</button><button onclick="code()">Code</button><button onclick="costum()">Costumes</button><button onclick="extLib()">ExtLib</button>
  <div id="codeCont">
    <p>Select a section</p>
  </div>
`
async function start() {}
async function sprite() {}
async function code() {}
async function costum() {}
async function extLib() {}
window.onload = start
