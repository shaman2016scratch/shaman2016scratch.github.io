try {
  const screen = document.getElementById("content")
  const token = document.getElementById("bot")
  let chats = []
  let chat_info = {}
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
    let messages = await (await fetch(`https://api.telegram.org/bot${token}/getUpdates/`)).json().result
    async function getChats() {
      for(let i = 0; i < messages.length; i++) {
        if (chats[messages[i].chat.id]) {
          // Пока игнорим
        } else {
          chats.push(messages[i].chat.id)
        }
      }
    }
  }
} catch (err) {
  alert(`Error: ${err.message}`)
  console.error(err.message)
}
