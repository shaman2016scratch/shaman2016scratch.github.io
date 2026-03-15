window.screen = document.getElementById("content")
window.sitesCreatorsMain = {
  "openEditor": async function() {},
  "openFilesList": async function() {},
  "window": {}
}
async function start() {
  window.screen.innerHTML = `
    <button onclick="window.sitesCreatorsMain.openEditor()">Creator</button>
    <button onclick="window.sitesCreatorsMain.openFilesList()">Files</button>
    <div id="menu">
      <p>Choose.</p>
    </div>
  `
  window.creatorDOM = document.getElementById("menu")
}
