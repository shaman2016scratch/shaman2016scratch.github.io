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
          <tr>
            <th><p><b>События</b></p></th>
            <th>Категория пуста.</th>
          </tr>
          <tr>
            <th><p><b>Управление</b></p></th>
            <th>Категория пуста.</th>
          </tr>
          <tr>
            <th><p><b>Операторы</b></p></th>
            <th>Категория пуста.</th>
          </tr>
          <tr>
            <th><p><b>Сенсоры</b></p></th>
            <th>Категория пуста.</th>
          </tr>
          <tr>
            <th><p><b>Контент</b></p></th>
            <th>Категория пуста.</th>
          </tr>
          <tr>
            <th><p><b>Данные</b></p></th>
            <th>Категория пуста.</th>
          </tr>
          <tr>
            <th><p><b>Информация</b></p></th>
            <th>Категория пуста.</th>
          </tr>
        </tbody>
      </table>
    `
  },
  "openFilesList": async function() {},
  "window": {},
  "openAboutService": async function() {
    window.creatorDOM.innerHTML = `
      <p>SitesCreator — сервис для создания сайтов без навыков HTML, JS, CSS.</p>
      <p>Сервис является конструктором сайтов</p>
    `
  }
}
async function start() {
  window.screen.innerHTML = `
    <button onclick="window.sitesCreatorMain.openEditor()">Создавать</button>
    <button onclick="window.sitesCreatorMain.openFilesList()">Файлы</button>
    <button onclick="window.sitesCreatorMain.openAboutService()">О сервисе</button>
    <div id="menu">
      <p>Выберите.</p>
    </div>
  `
  window.creatorDOM = document.getElementById("menu")
}
