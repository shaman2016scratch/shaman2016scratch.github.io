try {
  let game = document.getElementById('game')
  let menu = document.getElementById('menu')
  let name = document.getElementById('username')
  class Game {}
  function start() { new Game() }
  document.addEventListener('DOMContentLoaded', start);
} catch (err) {
  alert(`Error: ${err.message}`); console.error(`Error: ${err.message}`)
}
