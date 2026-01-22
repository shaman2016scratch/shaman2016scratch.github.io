try {
  const screen = document.getElementById("content")
  const token = document.getElementById("bot")
  let chats = []
  let chatInfo = {}
  let openChat = {}
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
        chatInfo[messages[i].chat.id] = {
          "username": messages[i].chat.username,
          "name": messages[i].chat.title,
          "icon": "https://placehold.co/100x100"
        }
      }
    }
    getChats()
    async function addChats() {
      screen.innerHTML = `
        <div id="chats"><h1>Chats</h1></div>
      `
      let chatsList = document.getElementById("chats")
      for(let i = 0; i < chats.length; i++) {
        chatsList.innerHTML = `${chatList.innerHTML}
        <h1 onclick="openChat.${i}()"><img src="${chatInfo[chats[i]].icon}">${chatInfo[chats[i]].name}</h1>`
        openChat[i] = new Function(`
          chat(chats[i])
        `)
      }
    }
    addChats()
    async function chat(id) {
      screen.innerHTML = `
        <h1><img src="${chatInfo[id].icon}">${chatInfo[id].name}</h1>
        <div id="messages">Loading...</div>
      `
      let messList = document.getElementById("messages")
    }
  }
} catch (err) {
  alert(`Error: ${err.message}`)
  console.error(err.message)
}
