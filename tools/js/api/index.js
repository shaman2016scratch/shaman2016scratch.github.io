let out = document.getElementById("output")
const url = new URL(window.location)
const input = url.searchParams
if(input.length === 0 || input.get("page") === "main") {
  out.textContent = {
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
}
