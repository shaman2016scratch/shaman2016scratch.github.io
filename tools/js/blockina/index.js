let screen = document.getElementById("content")
async function start() {
  screen.innerHTML = `
    <a href="editor.html"><button>EDITOR</button></a>
    <h1>Blockina</h1>
    <p>Blockina is a block programming environment inspired by Scratch, TurboWarp and Dash.</p>
  `
}
window.onload = start
