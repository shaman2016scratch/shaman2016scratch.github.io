let screen = document.getElementById("content")
screen.innerHTML = `
  <h1>Notes Storage</h1>
  <p>Text</p>
  <p>Id</p>
  <div id="notes" id="message">
    <p id="main">Hello, world</p>
  </div>
`
let notes = {
  "main": {
    "content": document.getElementById("main")
  }
}
notes.main.content.textContent = "Hello, world!"
let noteList = document.getElementById("notes")
async function save() {}
async function load() {}
