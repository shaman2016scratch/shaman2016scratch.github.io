try {
  let game = document.getElementById('game')
  let menu = document.getElementById('menu')
  let name = document.getElementById('username')
  class Game {
    game.innerHTML("<text x="0" y="40" font-size="36" fill="black">What is your name? This is necessary for this game.</text>")
    setTimeout(() => {}, 5000);
    game.innerHTML(`<text x="0" y="40" font-size="36" fill="black">Hello, ${name}, welcome to Part 1 of the Peng Village game!</text>`)
  }
  function start() { new Game() }
  document.addEventListener('DOMContentLoaded', start);
} catch (err) {
  alert(`Error: ${err.message}`); console.error(`Error: ${err.message}`)
}
