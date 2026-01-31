let screen = document.getElementById("content")
fetch("https://api-shaman2016.vercel.app/tools/search/vhod/")
const site = {
  "https://yandex.ru": {
    "title": "Yandex"
  },
  "https://google.com": {
    "title": "Google"
  },
  "https://scratch.mit.edu": {
    "title": "Scratch"
  },
  "https://github.com": {
    "title": "Github"
  },
  "https://shaman2016scratch.github.io": {
    "title": "SHAMAN2016 official website"
  },
  "https://tagir-scratch.github.io": {
    "title": "Tagir14012014 || Оффициальный сайт"
  },
  "https://dashblocks.github.io": {
    "title": "Dash — Scratch Modification"
  }
}
const page = {
  "https://yandex.ru/": {
    "searches": ["Yandex", "Яндекс"],
    "title": "Яндекс — российский поисковик"
  },
  "https://google.com/": {
    "searches": ["Google", "гугл"],
    "title": "Google"
  },
  "https://scratch.mit.edu/": {
    "searches": ["Scratch", "Скретч", "Скратч"],
    "title": "Scratch — create, program, explore!"
  },
  "https://github.com/": {
    "searches": ["гитхаб", "github"],
    "title": "Github is a convenient service for storing code"
  },
  "https://shaman2016scratch.github.io/": {
    "searches": ["shaman2016", "polzovatel_8787"],
    "title": "Official Site SHAMAN2016"
  },
  "https://shaman2016scratch.github.io/Shaman2016News/": {
    "searches": ["Новости", "news", "источники", "shaman2016", "Shaman2016News"],
    "title": "Shaman2016News",
    "description": "Новостной источник от SHAMAN2016"
  },
  "https://tagir-scratch.github.io/": {
    "searches": ["Тагир", "Tagir", "Tagir-Scratch", "Tagir14012014"],
    "title": "Tagir14012014 || Оффициальный сайт Скретчера",
    "description": "Я Tagir14012014. Увлеченный скретчер, который любит программировать! Узнать больше."
  },
  "https://dashblocks.github.io/": {
    "searches": ["Scratch", "Dash", "Dashblocks"],
    "title": "Dash — More Blocks, Extensions and other",
    "description": "Dash is the best Scratch modification"
  }
}
screen.innerHTML = `
  <input placeholder="your request" id="req"></input><button onclick="search()">Search</button>
  <div id="results">
    <h2>Results</h2>
  </div>
`
async function save() {}
async function load() {}
async function start() {}
async function search() {
  let zapros = document.getElementById("req").value
  let results = Object.keys(page)
  let result = document.getElementById("relusts").innerHTML
  result = `
    <h2>Results</h2>
  `
  fetch(`https://api-shaman2016.vercel.app/tools/search/zapros?text=${zapros}`)
  for(let i = 0; i < results.length; i++) {
    if(page[results[i]].searches.include(zapros)) {
      result += `
        <div class="result">
          <h1>${page[results[i]].title}</h1>
          <p>${page[results[i]].description || "Без описания"}</p>
          <a href="${results[i]}">Open</a>
        </div>
      `
    }
  }
}
