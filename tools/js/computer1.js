let screen = document.getElementById("content")
const keys = ["Esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","PrtSc","F11","F12","Del","Ё","OK",1,2,3,4,5,6,7,8,9,0,"-","+","=","—","{","}","Whitespace","~","Tab","Q","W","E","R","Y","U","I","O","P","[","]","|","\\","/","&","Open","`","Caps","A","S","D","F","G","X","J","K","L",":",";","\"","'","Enter","^","@","Close","Shift","Ft","Clone","X","Z","C","V","B","N","M",".",",","<",">","?","!","#","*","Exit","(",")","%","$","₽","arrow1","arrow1-2","arrow2","arrow2-3","arrow3","arrow3-4","arrow4","arrow4-1","Ctrl","Fn","Win", "Alt"]
let RAM = {
  "screen": [],
  "screenData": {
    "1line": 20,
    "lines": 12
  },
  "screenLines": [],
  "screenLine": {    
    0: 0,
    1: 20,
    2: 40,
    3: 60,
    4: 80,
    5: 100,
    6: 120,
    7: 140,
    8: 160,
    9: 180,
    10: 200,
    11: 220
  }
}
for(let i = 0; i < 20*12; i++) {
  RAM.screen.push(0)
}
const progLangs = {
  "compeScript": {
    "fileFormat": "cs"
  }
}
screen.innerHTML = `
  <div class="message" id="screen">
    Start the Computer
  </div>
  <br><button>Esc</button><button>F1</button><button>F2</button><button>F3</button><button>F4</button><button>F5</button><button>F6</button><button>F7</button><button>F8</button><button>F9</button><button>F10</button><button>PrtSc</button><button>F11</button><button>F12</button><button>Del</button>
  <br><button>Ё</button><button>OK</button><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button><button>0</button><button>-</button><button>+</button><button>=</button><button>—</button><button>{</button><button>}</button><button>Whitespace</button>
  <br><button>~</button><button>Tab</button><button>Q</button><button>W</button><button>E</button><button>R</button><button>T</button><button>Y</button><button>U</button><button>I</button><button>O</button><button>P</button><button>[</button><button>]</button><button>|</button><button>\\</button><button>/</button><button>&</button><button>Open</button><button>Sys</button>
  <br><button>\`</button><button>Caps</button><button>A</button><button>S</button><button>D</button><button>F</button><button>G</button><button>X</button><button>J</button><button>K</button><button>L</button><button>:</button><button>;</button><button>"</button><button>'</button><button>Enter</button><button>^</button><button>@</button><button>Close</button>
  <br><button>Shift</button><button>Ft</button><button>Clone</button><button>X</button><button>Z</button><button>C</button><button>V</button><button>B</button><button>N</button><button>M</button><button>,</button><button>.</button><button><</button><button>></button><button>?</button><button>!</button><button>#</button><button>*</button><button>EXIT</button>
  <br><button>(</button><button>)</button><button>%</button><button>$</button><button>₽</button><button>⬅️</button><button>↖️</button><button>⬆️</button><button>↗️</button><button>➡️</button><button>↘️</button><button>⬇️</button><button>↙️</button><button>Ctrl</button><button>Fn</button><button>Win</button><button>Alt</button>
  <br><button>Whitespace</button><button>Open</button><button>Close</button><button>EXIT</button>
`
let ecran = document.getElementById("screen")
async function start() {
  await updateScreen()
}
async function updateScreen() {
  for(let i = 0; i < RAM.screenData.lines; i++) {
    ecran.innerHTML += `
      <p id="line${i}">|</p>
    `
    RAM.screenLines[i] = document.getElementById(`line${i}`)
    for(let i2 = 0; i2 < RAM.screenData["1line"]; i2++) {
      RAM.screenLines[i].textContent = RAM.screen[RAM.screenLine[i] + i2]
    }
  }
}
async function runCompeScript() {}
