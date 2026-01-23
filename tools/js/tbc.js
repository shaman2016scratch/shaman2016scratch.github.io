let screen = document.getElementById("content")
let token = document.getElementById("bot")
let chats = []
let chatInfo = {}
let openChat = {}
let messages = []
let messHead = ""
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
async function start() {
  //try {
    messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
    messages = messages.result
    async function getChats() {
      for(let i = 0; i < messages.length; i++) {
        if (messages[i].message) { messHead = "message" } else if (messages[i].channel_post) { messHead = "channel_post" } else if (messages[i].edited_message) { messHead = "edited_message" } else { messHead = "notSupport" }
        if (messHead !== "notSupport") {
          if (!chats.includes(messages[i][messHead].chat.id)) {
            chats.push(messages[i][messHead].chat.id)
          }
          chatInfo[messages[i][messHead].chat.id] = {
            "username": messages[i][messHead].chat.username || "",
            "name": messages[i][messHead].chat.title,
            "icon": "https://placehold.co/25x25"
          }
          let icoon = await (await fetch(`https://api.telegram.org/bot${token.value}/getChat?chat_id=${messages[i][messHead].chat.id}`)).json()
          if(icoon.result.photo) {
            icoon = icoon.result.photo.big_file_id
            icoon = await (await fetch(`https://api.telegram.org/bot${token.value}/getFile?file_id=${icoon}`)).json()
            icoon = icoon.result.file_path
            chatInfo[messages[i][messHead].chat.id].icon = `https://api.telegram.org/file/bot${token.value}/${icoon}`
          }
        }
      }
    }
    await getChats()
    async function addChats() {
      screen.innerHTML = `
        <div id="chats"><h1>Chats</h1></div>
      `
      let chatsList = document.getElementById("chats")
      for(let i = 0; i < chats.length; i++) {
        chatsList.innerHTML += `
          <h1 onclick="openChat[${i}]()"><img src="${chatInfo[chats[i]].icon}" width="25" height="25">${chatInfo[chats[i]].name}</h1>
        `
        openChat[i] = new Function(`
          chat(${chats[i]})
        `)
      }
    }
    await addChats()
  //} catch (err) {
    //alert(`Error: ${err.message}`)
    //console.error(err.message)
  //}
}
async function chat(id) {
  //try {
    screen.innerHTML = `
      <div id="messages" class="messages"><h1><img src="${chatInfo[id].icon}" width="25" height="25">${chatInfo[id].name}</h1></div>
    `
    let messList = document.getElementById("messages")
    async function getMess() {
      for(let i = 0; i < messages.length; i++) {
        if (messages[i].message) { messHead = "message" } else if (messages[i].channel_post) { messHead = "channel_post" } else if (messages[i].edited_message) { messHead = "edited_message" } else { messHead = "notSupport" }
        if(messHead !== "notSupport" && messages[i][messHead].chat.id !== id) {
          if(messages[i][messHead].from.id !== 777000) {
            if(messages[i][messHead].from.is_bot) {
              messList.innerHTML += `
                <div class="message" id="id${messages[i].update_id}"><div><img src="https://placehold.co/25x25"><div><h4>${messages[i][messHead].from.first_name} [bot] <code>${messages[i][messHead].from.id}</code></h4><br>${messages[i][messHead].text}</div></div></div>
              `
            } else {
              messList.innerHTML += `
                <div class="message" id="id${messages[i].update_id}"><div><img src="https://placehold.co/25x25"><div><h4>${messages[i][messHead].from.first_name} [user] <code>${messages[i][messHead].from.id}</code></h4><br>${messages[i][messHead].text}</div></div></div>
              `
            }
          } else {
            messList.innerHTML += `
              <div class="message" id="id${messages[i].update_id}"><div><img src="https://placehold.co/25x25"><div><h4>${messages[i][messHead].sender_chat.title} [${messages[i][messHead].sender_chat.type}] <code>${messages[i][messHead].sender_chat.id}</code></h4><br>${messages[i][messHead].text}</div></div></div>
            `
          }
        }
      }
      messList.innerHTML += `
        <input id="messageText"><button onclick="sendMessage(${messages[i][messHead].chat.id})">send</button>
      `
    }
    await getMess()
  //} catch (err) {
    //alert(`Error: ${err.message}`)
    //console.error(err.message)
  //}
}
async function sendMessage(chat) {
  fetch(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chat}&text=${document.getElementById("messageText").value}`)
}
