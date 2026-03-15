window.screen = document.getElementById("content")
window.sitesCreatorMain = {
  "openEditor": async function() {
    window.creatorDOM.innerHTML = `
      <table>
        <tbody></tbody>
      </table>
    `
  },
  "openFilesList": async function() {},
  "window": {}
}
async function start() {
  window.screen.innerHTML = `
    <button onclick="window.sitesCreatorMain.openEditor()">Creator</button>
    <button onclick="window.sitesCreatorMain.openFilesList()">Files</button>
    <div id="menu">
      <p>Choose.</p>
    </div>
  `
  window.creatorDOM = document.getElementById("menu")
}
