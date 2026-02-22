let baseApi = "https://api.micloud.website/"
let httpApi = baseApi
let screen = document.getElementById("content")
let token = document.getElementById("clientKey")
async function start() {
  screen.innerHTML = `
    <p>Please select the MiCloud part</p>
    <br><button>Files</button>
    <br><button>Repositories</button>
  `
}
async function files(res, req) {}
async function repositories(res, req) {}
