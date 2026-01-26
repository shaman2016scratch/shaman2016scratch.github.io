let screen = document.getElementById("content")
const site = {
  "https://yandex.ru": {},
  "https://google.com": {},
  "https://scratch.mit.edu": {},
  "https://github.com": {},
  "https://shaman2016scratch.github.io": {}
}
const page = {
  "https://yandex.ru/": {},
  "https://google.com/": {},
  "https://scratch.mit.edu/": {},
  "https://github.com/": {},
  "https://shaman2016scratch.github.io/": {}
}
screen.innerHTML = `
  <input placeholder="your request" id="req"></input><button onclick="search()">Search</button>
`
async function save() {}
async function load() {}
async function start() {}
async function search() {}
