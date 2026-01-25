let screen = document.getElementById("content")
async function load() {}
async function save() {}
async function start() {
  screen.innerHTML = `
    <h1>Mini Browser (IFRAME)</h1>
    <button onclick="vkl.add()">add</button>
    <div id="vkladki"></div>
  `
let vkl = {
  "add": async function() {},
  "del": async function() {}
}
