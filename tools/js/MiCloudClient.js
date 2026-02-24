let auth = ""
let baseApi = "https://api.micloud.website"
let httpApi = baseApi
let screen = document.getElementById("content")
let token = document.getElementById("clientKey")
async function start() {
  auth = await reqMiCloud("/api/v1/me", {
    method: "GET",
    headers: {
      "X-API-Key": token.value
    }
  })
  auth = await auth.json()
  screen.innerHTML = `
    <p>Please select the MiCloud part</p>
    <br><button>Profile</button>
    <br><button>Files</button>
    <br><button>Repositories</button>
  `
}
async function profile() {}
async function files() {
  let miFiles = await reqMiCloud("/api/v1/tree", {
    method: "GET",
    headers: {
      "X-API-Key": token.value
    }
  })
  miFiles = await miFiles.json()
  let fil = miFiles.tree
}
async function repositories() {
  let miRepos = await reqMiCloud("/api/v1/repos", {
    method: "GET",
    headers: {
      "X-API-Key": token.value
    }
  })
  miRepos = await miRepos.json()
}
async function reqMiCloud(path, params) {
  return await fetch(`${httpApi}${path}`, params)
}
