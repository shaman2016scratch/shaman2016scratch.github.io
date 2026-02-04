let root = {}
root.doc = document.getElementById('root')
strans = {
  1: `
    <h1>Введение в RussiaScript, урок 1</h1>
    <p>Страница 1/1</p>
    <p>Это Оффициальный курс по введению в RussiaScript.</p>
  `
}
root.stran = 1
function root() {
  root.doc.innerHTML = strans[root.stran]
}
