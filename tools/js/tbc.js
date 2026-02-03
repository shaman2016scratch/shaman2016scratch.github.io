let ToolsApi = {}
let toolsApiUrlMain = ""
async function toolsApiUrlMainGet() {
  toolsApiUrlMain = await fetch("https://api-shaman2016.vercel.app/tools/")
  console.log(toolsApiUrlMain)
  toolsApiUrlMain = await toolsApiUrlMain.json()
  console.log(toolsApiUrlMain)
}
console.log(toolsApiUrlMain)
async function ToolsApiInstall() {
  await toolsApiUrlMainGet()
  ToolsApi = {
    "pagesNum": function() { return toolsApiUrlMain.result.pagesCount },
    "pageUrl": function(a) { return `https://shaman2016scratch.github.io/tools/${toolsApiUrlMain.result.pages[a]}` },
    "vApi": function() { return toolsApiUrlMain.result.version.api.main },
    "versionTools": function() { return toolsApiUrlMain.result.version.pages }
  }
}
async function SetVersion() {
  await ToolsApiInstall()
  document.getElementById("v").textContent = `Version: ${ToolsApi.versionTools().tbc}`
}
SetVersion()
let screen = document.getElementById("content")
let token = document.getElementById("bot")
let botn = document.getElementById("botname")
let chats = []
let chatInfo = {}
let openChat = {}
let messages = []
let messHead = ""
let realMessList = []
let realMess = []
let idlastbot = 0
let boteto = ""
let lasupd = 0
let bs = {}
screen.innerHTML = `
  <h1>Chats</h1>
  <div id="chats">loading...</div>
`
let vosdCode = function() {
  let conf = document.getElementById("vostCode").value
  conf = JSON.parse(conf)
  chats = conf.chats
  token.value = conf.token
  chatInfo = conf.chatInfo
  openChat = conf.openChat
  realMessList = conf.messList
  realMess = conf.mess
  idlastbot = conf.ilb
  lasupd = conf.upd
  console.log(conf.upd)
  lasupd++
  bs = conf.bs
}
let vosdCodeLoc = function() {
  let conf = localStorage.get("tools-tbc")
  conf = JSON.parse(conf)
  token.value = conf.token
  chatInfo = conf.chatInfo
  openChat = conf.openChat
  realMessList = conf.messList
  realMess = conf.mess
  idlastbot = conf.ilb
  lasupd = conf.upd
  lasupd++
  bs = conf.bs
}
function save() {
  alert("Log in to the console and copy the latest log.")
  console.log({
    "token": token.value,
    "chats": chats,
    "chatInfo": chatInfo,
    "openChat": openChat,
    "messList": realMessList,
    "mess": realMess,
    "ilb": idlastbot,
    "upd": lasupd,
    "bs": bs
  })
}
function load() {
  screen.innerHTML = `
    <h3>Please enter the save object in the input field below and click on the button.</h3>
    <textarea id="vostCode"></textarea>
    <br><button onclick="vosdCode()">Load</button>
  `
}
function saveLoc() {
  localStorage.set("tools-tbc", toString({
    "token": token.value,
    "chats": chats,
    "chatInfo": chatInfo,
    "openChat": openChat,
    "messList": realMessList,
    "mess": realMess,
    "ilb": idlastbot,
    "upd": lasupd,
    "bs": bs
  }))
}
function loadLoc() {
  vosdCodeLoc()
}
async function start() {
    boteto = await (await fetch(`https://api.telegram.org/bot${token.value}/getMe`)).json()
    boteto = boteto.result
    botn.innerHTML = boteto.name
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
          if(chatInfo[realMess[i][messHead].chat.id].upd !== lasupd) {
            chatInfo[realMess[i][messHead].chat.id] = {
              "username": realMess[i][messHead].chat.username || "",
              "name": realMess[i][messHead].chat.title || realMess[i][messHead].chat.first_name,
              "icon": "https://placehold.co/25x25",
              "type": "private",
              "upd": lasupd
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
    }
    await getChats()
    async function addChats() {
      screen.innerHTML = `
        <div class="message"><button onclick="botScript()">botScript</button></div>
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
}
async function Chat(id) {
    members = await (await fetch(`https://api.telegram.org/bot${token.value}/getChatMembersCount?chat_id=${id}`)).json()
    members = members.result
    screen.innerHTML = `
      <div id="messages" class="messages"><h1><img src="${chatInfo[id].icon}" width="25" height="25">${chatInfo[id].name} [${members}]</h1></div>
    `
    let messList = document.getElementById("messages")
    async function getMesss() {
      let i = 0
      for(i = 0; i < realMess.length; i++) {
        if (realMess[i].message) { messHead = "message" } else if (realMess[i].channel_post) { messHead = "channel_post" } else if (realMess[i].edited_message) { messHead = "edited_message" } else { messHead = "notSupport" }
        if(messHead !== "notSupport" && realMess[i][messHead].chat.id === id && realMess[i][messHead].text) {
          if(!realMess[i][messHead].reply_to_message) {
            if(!realMess[i][messHead].sender_chat) {
              if(realMess[i][messHead].from.is_bot) {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><p id="id${realMess[i].update_id}text">[error]</p></div></div>
                `
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><p id="id${realMess[i].update_id}text">[error]</p></div></div>
                `
              }
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><br><p id="id${realMess[i].update_id}text">[error]</p></div></div>
              `
            }
            document.getElementById(`id${realMess[i].update_id}text`).textContent = realMess[i][messHead].text
            document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button>`
          } else {
            if(!realMess[i][messHead].sender_chat) {
              if(realMess[i][messHead].from.is_bot) {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p id="id${realMess[i].update_id}text_answer">[error]</p></pre><p id="id${realMess[i].update_id}text">[error]</p></div></div>
                `
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p id="id${realMess[i].update_id}text_answer">[error]</p><a href="#idc${realMess[i][messHead].reply_to_message.message_id}">[message]</a></pre><p id="id${realMess[i].update_id}text">[error]</p></div></div>
                `
              }
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p id="id${realMess[i].update_id}text_answer">[error]</p></pre><p id="id${realMess[i].update_id}text">[error]</p></div></div>
              `
            }
            document.getElementById(`id${realMess[i].update_id}text`).textContent = realMess[i][messHead].text || realMess[i][messHead].caption
            document.getElementById(`id${realMess[i].update_id}text_answer`).textContent = realMess[i][messHead].reply_to_message.text || realMess[i][messHead].reply_to_message.caption
            document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button>`
          }
        } else if(realMess[i][messHead].new_chat_member && messHead !== "notSupport" && realMess[i][messHead].chat.id === id) {
          if(realMess[i][messHead].new_chat_member.is_bot) {
            messList.innerHTML += `
              <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>добавила в чат ${realMess[i][messHead].new_chat_member.first_name} [bot] [${realMess[i][messHead].new_chat_member.id}]</p></div></div>
            `
          } else {
            messList.innerHTML += `
              <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>добавила в чат ${realMess[i][messHead].new_chat_member.first_name} [user] [${realMess[i][messHead].new_chat_member.id}]</p></div></div>
            `
          }
        } else if(realMess[i][messHead].photo && messHead !== "notSupport" && realMess[i][messHead].chat.id === id) {
          let image = await (await fetch(`https://api.telegram.org/bot${token.value}/getFile?file_id=${realMess[i][messHead].photo[1].file_id}`)).json()
          image = image.result.file_path
          image = `https://api.telegram.org/file/bot${token.value}/${image}`
          if(!realMess[i][messHead].reply_to_message || realMess[i][messHead].reply_to_message) {
            if(!realMess[i][messHead].sender_chat) {
              if(realMess[i][messHead].from.is_bot) {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><img src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                `
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><img src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                `
              }
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><img src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
              `
            }
          }
        }
      } 
      screen.innerHTML += `
        <input id="messageText"><button onclick="sendMessage(${id})">send</button>
      `
    }
    await getMesss()
}
async function sendMessage(chat) {
  fetch(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chat}&text=${document.getElementById("messageText").value}`)
  idlastbot++
  realMessList.push(`-544${idlastbot}`)
  realMess.push({
    "update_id": `-544${idlastbot}`,
    "message": {
      "message_id": "bot",
      "from": {
        "id": boteto.id,
        "is_bot": true,
        "first_name": boteto.first_name
      },
      "chat": {
        "id": chat,
        "name": chatInfo[chat].name,
        "type": chatInfo[chat].type
      },
      "date": null,
      "text": document.getElementById("messageText").value
    }
  })
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
async function sendReply(chat, mess) {
  fetch(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chat}&text=${document.getElementById("messageText").value}&reply_to_message_id=${mess}`)
  idlastbot++
  realMessList.push(`-544${idlastbot}`)
  realMess.push({
    "update_id": `-544${idlastbot}`,
    "message": {
      "message_id": "bot",
      "from": {
        "id": boteto.id,
        "is_bot": true,
        "first_name": boteto.first_name
      },
      "chat": {
        "id": chat,
        "name": chatInfo[chat].name,
        "type": chatInfo[chat].type
      },
      "date": null,
      "text": document.getElementById("messageText").value
    }
  })
  messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
  messages = messages.result
  await getMess()
  Chat(chat)
}
async function botScript() {
  screen.innerHTML = `
    <textarea id="codebs" placeholder="Your code" rows="30" cols="50"></textarea>
    <button onclick="codebsRun()">Start</button>
  `
  let code = document.getElementById("codebs").value
  if(bs.code){
    code = bs.code
  }
}
async function codebsRun() {
  let code = document.getElementById("codebs").value
  bs.code = JSON.parse(code)
  code2 = code.code
  code2 = code2.split(";\n  ")
  messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
  messages = messages.result
  await getMess()
  for(let i = 0; i < code2.length; i++) {
    let i2 = code2[i]
  }
}
