let screen = document.getElementById("content")
let latsid = 0
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
        <iframe src="shaman2016scratch.github.io/tools/search.html"></iframe>
      </div>
    `
    lastid++
  },
  "del": async function(id) {},
  "set": async function(id, url) {}

}
