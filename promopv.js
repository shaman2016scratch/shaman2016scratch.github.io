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
if (par.get() === "info") {}
