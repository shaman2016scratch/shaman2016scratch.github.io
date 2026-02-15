const url = new URL(window.location)
const sP = url.searchParams
let head = document.head
let body = document.body
let par = {
  "get": function() { return sP.get("id") },
  "set": function(a) { sP.set("id", a) },
  "append": function(a) { sP.append("id", a) }
}
if (!par.get()) {
  par.append("info")
}
if (par.get() === "info") {
  body.innerHTML = `
    <h1>Promo Preview</h1>
  `
} else if (par.get() === "AAA") {
  body.innerHTML = `
    <h1>MiCloud</h1>
    <p>MiCloud — Новый сервис для создания файлов</p>
    <h2>На нём можно:</h2>
    <ul>
      <li>Создавать и хранить файлы</li>
      <li>Хостить сайты¹</li>
      <li>Создавать репозитории</li>
      <li>Делится файлами</li>
    </ul>
    <p>Также присутствуют следущие удобности:</p>
    <ul>
      <li>Web-версия client.micloud.website</li>
    </ul>
    <p>¹ — бесплатно на micloud.website/userId/repoId, платно имяРепозитория.micloud.website</p>
  `
}
