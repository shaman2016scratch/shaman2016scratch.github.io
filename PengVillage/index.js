let game = document.getElementById('game')
let menu = document.getElementById('menu')
let name = document.getElementById('username')
class Game {
  game.innerHTML('<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg"><text x="0" y="40" font-size="36" fill="black">What is your name? This is necessary for this game.</text></svg>')
  setTimeout(() => {}, 5000);
  game.innerHTML(`<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg"><text x="0" y="40" font-size="36" fill="black">Hello, ${name}, welcome to Part 1 of the Peng Village game!</text></svg>`)
}
function start() { new Game() }
document.addEventListener('DOMContentLoaded', start);
