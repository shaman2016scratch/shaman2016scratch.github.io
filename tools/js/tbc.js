let screen = document.getElementById("content")
let token = document.getElementById("bot")
let chats = []
let chatInfo = {}
let openChat = {}
let messages = []
let messHead = ""
let realMessList = []
let realMess = []
screen.innerHTML = `
  <h1>Chats</h1>
  <div id="chats">loading...</div>
`
function save() {
  alert("Log in to the console and copy the latest log.")
  console.log({
    "token": token.value,
    "chats": chats,
    "chatInfo": chatInfo,
    "openChat": openChat,
    "messList": realMessList,
    "mess": realMess
  })
}
function load() {
  let vosdCode = `
    conf = document.getElementById("vostCode").value
    token.value = conf.token
    chatInfo = conf.chatInfo
    openChat = conf.openChat
    realMessList = conf.messList
    realMess = conf.mess
  `
  screen.innerHTML = `
    <h3>Please enter the save object in the input field below and click on the button.</h3>
    <textarea id="vostCode"></textarea>
    <br><button onclick="${vosdCode}">Load</button>
  `
}
async function start() {
  //try {
    messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
    messages = messages.result
    await getMess()
    async function getChats() {
      for(let i = 0; i < realMess.length; i++) {
        if (realMess[i].message) { messHead = "message" } else if (realMess[i].channel_post) { messHead = "channel_post" } else if (realMess[i].edited_message) { messHead = "edited_message" } else { messHead = "notSupport" }
        if (messHead !== "notSupport") {
          if (!chats.includes(realMess[i][messHead].chat.id)) {
            chats.push(realMess[i][messHead].chat.id)
          }
          chatInfo[realMess[i][messHead].chat.id] = {
            "username": realMess[i][messHead].chat.username || "",
            "name": realMess[i][messHead].chat.title || realMess[i][messHead].chat.first_name,
            "icon": "https://placehold.co/25x25",
            "type": "private"
          }
          let icoon = await (await fetch(`https://api.telegram.org/bot${token.value}/getChat?chat_id=${realMess[i][messHead].chat.id}`)).json()
          if(icoon.result.photo) {
            icoon = icoon.result.photo.big_file_id
            icoon = await (await fetch(`https://api.telegram.org/bot${token.value}/getFile?file_id=${icoon}`)).json()
            icoon = icoon.result.file_path
            chatInfo[realMess[i][messHead].chat.id].icon = `https://api.telegram.org/file/bot${token.value}/${icoon}`
            chatInfo[realMess[i][messHead].chat.id].type = realMess[i][messHead].chat.type
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
          <h1 onclick="openChat[${i}]()"><img src="${chatInfo[chats[i]].icon}" width="25" height="25">${chatInfo[chats[i]].name} [${chatInfo[chats[i]].type}]</h1>
        `
        openChat[i] = new Function(`
          Chat(${chats[i]})
        `)
      }
    }
    await addChats()
  //} catch (err) {
    //alert(`Error: ${err.message}`)
    //console.error(err.message)
  //}
}
async function Chat(id) {
  //try {
    members = await (await fetch(`https://api.telegram.org/bot${token.value}/getChatMembersCount?chat_id=${id}`)).json()
    members = members.result
    screen.innerHTML = `
      <div id="messages" class="messages"><h1><img src="${chatInfo[id].icon}" width="25" height="25">${chatInfo[id].name} [${members}]</h1></div>
    `
    let messList = document.getElementById("messages")
    async function getMess() {
      let i = 0
      for(i = 0; i < realMess.length; i++) {
        if (realMess[i].message) { messHead = "message" } else if (realMess[i].channel_post) { messHead = "channel_post" } else if (realMess[i].edited_message) { messHead = "edited_message" } else { messHead = "notSupport" }
        if(messHead !== "notSupport" && realMess[i][messHead].chat.id === id) {
          if(!realMess[i][messHead].reply_to_message) {
            if(!realMess[i][messHead].sender_chat) {
              if(realMess[i][messHead].from.is_bot) {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><p id="id${realMess[i].update_id}text">[error]</p></div></div></div>
                `
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><p id="id${realMess[i].update_id}text">[error]</p></div></div></div>
                `
              }
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><br><p id="id${realMess[i].update_id}text">[error]</p></div></div></div>
              `
            }
            document.getElementById(`id${realMess[i].update_id}text`).textContent = realMess[i][messHead].text
          } else {
            if(!realMess[i][messHead].sender_chat) {
              if(realMess[i][messHead].from.is_bot) {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4></div><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p id="id${realMess[i].update_id}text_answer">[error]</p></pre><p id="id${realMess[i].update_id}text">[error]</p></div></div></div>
                `
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4></div><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p id="id${realMess[i].update_id}text_answer">[error]</p><a href="#idc${realMess[i][messHead].reply_to_message.message_id}">[message]</a></pre><p id="id${realMess[i].update_id}text">[error]</p></div></div></div>
                `
              }
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4></div><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p id="id${realMess[i].update_id}text_answer">[error]</p></pre><p id="id${realMess[i].update_id}text">[error]</p></div></div></div>
              `
            }
            document.getElementById(`id${realMess[i].update_id}text`).textContent = realMess[i][messHead].text
            document.getElementById(`id${realMess[i].update_id}text_answer`).textContent = realMess[i][messHead].reply_to_message.text
          }
        }
      } 
      screen.innerHTML += `
        <input id="messageText"><button onclick="sendMessage(${id})">send</button>
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
  messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
  messages = messages.result
  await getMess()
  Chat(chat)
}
async function getMess() {
  for(let i = 0; i < messages.length; i++) {
    if(!realMessList.includes(messages[i].update_id)) {
      realMessList.push(messages[i].update_id)
      realMess.push(messages[i])
    }
  }
}
