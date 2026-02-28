let screen = document.body
let langs = [
  "RU",
  "EN"
]
let data = {
  "lastUpd": "28.02.2026 10:25 UTC+3",
  "created": "28.02.2026 00:19 UTC+3"
}
let pages = {
  "main": {
    "contentRu": `
      <h1>Оглавление</h1>
      <p><button>Методы</button></p>
      <p><button>Cors</button></p>
      <h1>Документация по серверу Dash (Неофициально)</h1>
      <p>Сервер Dash появился в конце февраля 2026 года</p>
      <p>Он захосчен на Vercel и хранит данные в Telegram</p>
      <h2>Методы</h2>
      <h3>POST /save-project</h3>
      <h3>GET /get-project/{id}</h3>
      <h3>GET /projects/{id}</h3>
      <h3>POST /projects/{id}/upload-thumbnail</h3>
      <h3>GET /projects/thumbnails/{id}</h3>
      <h3>POST /auth/register</h3>
      <h3>POST /auth/login</h3>
      <h3>GET /users/{id}</h3>
      <h3>POST /users/upload-avatar</h3>
      <h3>GET /users/avatars/</h3>
      <h3>GET /session</h3>
      <h3>GET /auth/logout</h3>
      <h3>POST /admin/manage-user [ADMIN METHOD]</h3>
      <h3>/featured-projects/{id} [ADMIN METHOD]</h3>
      <h3>GET /featured-projects</h3>
      <h2>Cors</h2>
    `,
    "contentEn": `
      <h1>Table of contents</h1>
      <p><button>Methods</button></p>
      <p><button>Cors</button></p>
      <h1>Dash Server Documentation (Unofficial)</h1>
      <p>The Dash server appeared at the end of February 2026</p>
      <p>It is hosted on Vercel and stores data in Telegram</p>
      <h2>Methods</h2>
      <h3>POST /save-project</h3>
      <h3>GET /get-project/{id}</h3>
      <h3>GET /projects/{id}</h3>
      <h3>POST /projects/{id}/upload-thumbnail</h3>
      <h3>GET /projects/thumbnails/{id}</h3>
      <h3>POST /auth/register</h3>
      <h3>POST /auth/login</h3>
      <h3>GET /users/{id}</h3>
      <h3>POST /users/upload-avatar</h3>
      <h3>GET /users/avatars/</h3>
      <h3>GET /session</h3>
      <h3>GET /auth/logout</h3>
      <h3>POST /admin/manage-user [ADMIN METHOD]</h3>
      <h3>/featured-projects/{id} [ADMIN METHOD]</h3>
      <h3>GET /featured-projects</h3>
      <h2>Cors</h2>
    `
  }
}
