window.screen = document.getElementById("content")
window.sitesCreatorMain = {
  "openEditor": async function() {
    window.creatorDOM.innerHTML = `
      <table>
        <tbody>
          <tr>
            <th><p><b>Внешний вид</b></p></th>
            <th>
              <button>Задать цвет фона на HEX [ввод]</button><button>Задать цвет фона на Red [ввод] Green [ввод] Blue [ввод]</button><button>Задать цвет ссылок на HEX [ввод]</button><button>Задать цвет текста на HEX [ввод]</button>
            </th>
          </tr>
        </tbody>
      </table>
    `
  },
  "openFilesList": async function() {},
  "window": {}
}
async function start() {
  window.screen.innerHTML = `
    <button onclick="window.sitesCreatorMain.openEditor()">Создавать</button>
    <button onclick="window.sitesCreatorMain.openFilesList()">Файлы</button>
    <div id="menu">
      <p>Выберите.</p>
    </div>
  `
  window.creatorDOM = document.getElementById("menu")
}
