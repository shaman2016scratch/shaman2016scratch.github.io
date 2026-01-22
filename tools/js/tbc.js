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
      }
    }
    getChats()
    await function addChats() {
      screen.innerHTML = `
        <div id="chats"><h1>Chats</h1></div>
      `
      for(let i = 0; i < chats.length; i++) {
        let chatsList = document.getElementById("chats")
        chatsList.innerHTML = `${chatList.innerHTML}
        <h1 onclick="openChat.${i}()"><img src="${chatInfo[chats[i]].icon}">${chatInfo[chats[i]].name}</h1>`
        openChat[i] = new Function(`
          chat(chats[i])
        `)
      }
    }
    addChats()
    await function chat() {
      // Подождите...
    }
  }
} catch (err) {
  alert(`Error: ${err.message}`)
  console.error(err.message)
}
