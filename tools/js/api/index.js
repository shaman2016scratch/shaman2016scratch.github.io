let out = document.getElementById("output")
const url = new URL(window.location)
const input = url.searchParams
if(!input.get("page") || input.get("page") === "main") {
  ouut = {
    "ok": true,
    "result": {
      "pagesCount": 3,
      "pages": [
        "tbc.html",
        "mini-brow.html",
        "search.html"
      ],
      "code": "https://github.com/shaman2016scratch/shaman2016scratch.github.io/tree/main/tools"
    }
  }
  out.textContent = `${JSON.stringify(ouut)}`
}
