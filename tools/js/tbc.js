try {
  const screen = document.getElementById("content")
  const token = document.getElementById("bot")
  let chats = []
  screen.innerHTML = `
    <h1>Chats</h1>
    <div id="chats">loading...</div>
  `
  function save() {
    // Не готово
  }
  function load() {
    // Не готово
  }
  function start() {
    let messages = fetch(`https://api.telegram.org/bot${token}/getUpdates/`)
  }
} catch (err) {
  alert(`Error: ${err.message}`)
  console.error(err.message)
}
