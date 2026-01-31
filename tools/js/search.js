let screen = document.getElementById("content")
fetch("https://api-shaman2016.vercel.app/tools/search/vhod/")
const site = {
  "yandex.ru": {
    "title": "Yandex",
    "host": "yandex.ru"
  },
  "google.com": {
    "title": "Google",
    "host": "google.com"
  },
  "scratch.mit.edu": {
    "title": "Scratch",
    "host": "scratch.mit.edu"
  },
  "github.com": {
    "title": "Github",
    "host": "github.com"
  },
  "shaman2016scratch.github.io": {
    "title": "SHAMAN2016 official website",
    "Verified": {
      "official": true,
      "comment": "This site is the Official resource of the creator of this search engine."
    },
    "host": "github.com"
  },
  "tagir-scratch.github.io": {
    "title": "Tagir14012014 || Оффициальный сайт",
    "Verified": {
      "official": true,
      "comment": "Оффициальный сайт"
    },
    "host": "github.com"
  },
  "dashblocks.github.io": {
    "title": "Dash — Scratch Modification",
    "host": "github.com"
  },
  "daimondcat1234567.github.io": {
    "title": "DiamondCat1234567 Site",
    "Verified": {
      "official": true,
      "comment": "Оффициальный сайт Скретчера DiamondCat1234567"
    },
    "host": "github"
  },
  "scrajang-studios.github.io": {
    "title": "ScraJang Web Site",
    "Verified": {
      "official": true,
      "comment": "Official Website"
    },
    "host": "github.com"
  },
  "turbowarp.org": {
    "title": "TurboWarp",
    "host": "turbowarp.org"
  },
  "kiros-scratch.github.io": {
    "title": "KirOS Website",
    "Verified": {
      "official": true,
      "comment": "Official"
    },
    "host": "github.com"
  },
  "telegram.org": {
    "title": "Telegram",
    "Verified": {
      "official": true,
      "comment": "Official Telegram Website"
    },
    "host": "telegram.org"
  }
}
const page = {
  "https://yandex.ru/": {
    "searches": ["Yandex", "Яндекс"],
    "title": "Яндекс — российский поисковик",
    "site": "yandex.ru"
  },
  "https://google.com/": {
    "searches": ["Google", "гугл"],
    "title": "Google",
    "site": "google.com"
  },
  "https://scratch.mit.edu/": {
    "searches": ["Scratch", "Скретч", "Скратч"],
    "title": "Scratch — create, program, explore!",
    "site": "scratch.mit.edu"
  },
  "https://github.com/": {
    "searches": ["гитхаб", "github"],
    "title": "Github is a convenient service for storing code",
    "site": "github.com"
  },
  "https://shaman2016scratch.github.io/": {
    "searches": ["shaman2016", "polzovatel_8787"],
    "title": "Official Site SHAMAN2016",
    "site": "shaman2016scratch.github.io"
  },
  "https://shaman2016scratch.github.io/Shaman2016News/": {
    "searches": ["Новости", "news", "источники", "shaman2016", "Shaman2016News"],
    "title": "Shaman2016News",
    "description": "Новостной источник от SHAMAN2016",
    "site": "shaman2016scratch.github.io"
  },
  "https://tagir-scratch.github.io/": {
    "searches": ["Тагир", "Tagir", "Tagir-Scratch", "Tagir14012014"],
    "title": "Tagir14012014 || Оффициальный сайт Скретчера",
    "description": "Я Tagir14012014. Увлеченный скретчер, который любит программировать! Узнать больше.",
    "site": "tagir-scratch.github.io"
  },
  "https://dashblocks.github.io/": {
    "searches": ["Scratch", "Dash", "Dashblocks"],
    "title": "Dash — More Blocks, Extensions and other",
    "description": "Dash is the best Scratch modification",
    "site": "dashblocks.github.io"
  },
  "https://turbowarp.org/": {
    "searches": ["Scratch", "TurboWarp"],
    "title": "TurboWarp Studio",
    "site": "turbowarp.org"
  },
  "https://telegram.org/": {
    "searches": ["Telegram", "Телеграм", "Телега", "тг", "мессенджер", "общение"],
    "title": "Telegram",
    "site": "telegram.org"
  },
  "https://telegram.org/api/": {
    "searches": ["Telegram Bot Api", "Bot", "tba"],
    "title": "Telegram",
    "site": "telegram.org"
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
      if (!site[page[results[i]].site].Verified) {
        result += `
          <div class="result" id="i${i}">
            <h1>${page[results[i]].title}</h1>
            <p>${page[results[i]].description || "Без описания"}</p>
            <a href="${results[i]}">Open</a>
          </div>
        `
      } else {
        result += `
          <div class="result" id="i${i}">
            <h1>${page[results[i]].title}</h1>
            <p>${page[results[i]].description || "Без описания"}</p>
            <a href="${results[i]}">Open</a>
            <p>${site[page[results[i]].site].Verified.comment}, official: ${site[page[results[i]].site].Verified.official}</p>
          </div>
        `
      }
    }
  }
}
