try {
  const screen = document.getElementById("content")
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
} catch (err) {
  alert(`Error: ${err.message}`)
  console.error(err.message)
}
