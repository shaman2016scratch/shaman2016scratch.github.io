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
        <div id="messages" class="messages"><h1><img src="${chatInfo[id].icon}">${chatInfo[id].name}</h1></div>
      `
      let messList = document.getElementById("messages")
      async function getMess() {
        for(let i = 0; i < messages.length; i++) {
          if(!messages[i].message.from.id === 777000) {
            if(messages[i].message.from.is_bot) {
              messList.innerHTML `${messList.innerHTML}
                <div class="message" id="id${messages[i].update_id}"><p><img src="https://placehold.co/100x100"><p><h4>${messages[i].message.from.first_name} [bot] <code>${messages[i].message.from.id}</code></h4><br>${messages[i].message.text}</p></p></div>
              `
            } else {
              messList.innerHTML `${messList.innerHTML}
                <div class="message" id="id${messages[i].update_id}"><p><img src="https://placehold.co/100x100"><p><h4>${messages[i].message.from.first_name} [user] <code>${messages[i].message.from.id}</code></h4><br>${messages[i].message.text}</p></p></div>
              `
            }
          } else {
            messList.innerHTML `${messList.innerHTML}
              <div class="message" id="id${messages[i].update_id}"><p><img src="https://placehold.co/100x100"><p><h4>${messages[i].message.sender_chat.title} [${messages[i].message.sender_chat.type}] <code>${messages[i].message.sender_chat.id}</code></h4><br>${messages[i].message.text}</p></p></div>
            `
          }
        }
      }
    }
  }
} catch (err) {
  alert(`Error: ${err.message}`)
  console.error(err.message)
}
