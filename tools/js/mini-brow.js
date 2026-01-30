let screen = document.getElementById("content")
let lastid = 0
async function load() {}
async function save() {}
async function start() {
  screen.innerHTML = `
    <h1>Mini Browser (IFRAME)</h1>
    <button onclick="vkl.add()">add</button>
    <div id="vkladki"></div>
  `
}
let vkl = {
  "add": async function() {
    screen.innerHTML += `
      <div class="messages" id="vkl${lastid}">
        <button onclick="vkl.del(${lastid})">Delete</button>
        <button onclick="vkl.set(${lastid}, prompt('url'))">Update Url</button>
        <button onclick="alert(document.getElementById('vkl${lastid}S').src)"></button>
        <iframe src="shaman2016scratch.github.io/tools/search.html" id="vkl${lastid}S"></iframe>
      </div>
    `
    lastid++
  },
  "del": async function(id) {
    document.getElementById(`vkl${id}`).innerHTML = ""
  },
  "set": async function(id, url) {
    document.getElementById(`vkl${id}S`).src = url
  }
}
