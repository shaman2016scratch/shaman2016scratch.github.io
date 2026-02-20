const baseSender = {
  "text": "",
  "photos": [],
  "buttons": [],
  "format": "HTML",
  "apps": {
    "name": "",
    "id": 0,
    "metadata": {},
    "link": ""
  },
  "type": {
    "text": true,
    "photos": false,
    "buttons": false,
    "apps": false
  }
}
let senderParam = baseSender
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
  <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button><button onclick="creditsTbc()">Credits</button></div>
  <h1>Chats</h1>
  <div id="chats">loading...</div>
`
let integrations = {}
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
let windowBs = {
  "var": {
    "getValue": async function(v) {
      let vType = typeof v
      if (vType === "string") {
        if (v.split(".")[0] === "window") {
          if (typeof windowBs.var[v.split(".")[1]] === "function") {
            return windowBs.var[v.split(".")[1]]()
          } else {
            windowBs.var[v.split(".")[1]]
          }
        }
      }
      if (vType === "string" || vType === "number") {
        return v
      }
      if (vType === "function") {
        let vFunc = v
        return vFunc()
      }
    },
    "res.json": async function(obj) {
      return await obj.json()
    }
  },
  "token": {},
  "name": {}
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
    <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button></div>
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
        if (realMess[i].message) {
          messHead = "message"
        } else if (realMess[i].channel_post) {
          messHead = "channel_post"
        } else if (realMess[i].edited_message) {
          messHead = "edited_message"
        } else {
          messHead = "notSupport"
        }
        if (messHead !== "notSupport") {
          if (messHead !== "poll") {
            if (!chats.includes(realMess[i][messHead].chat.id)) {
              chats.push(realMess[i][messHead].chat.id)
            }
            if(!Object.keys(chatInfo).includes(String(realMess[i][messHead].chat.id))) {
              function isForum() {
                if (!realMess[i][messHead].message_thread_id) {
                  return false
                } else {
                  return true
                }
              }
              chatInfo[realMess[i][messHead].chat.id] = {
                "username": realMess[i][messHead].chat.username || "",
                "name": realMess[i][messHead].chat.title || realMess[i][messHead].chat.first_name,
                "icon": "https://placehold.co/25x25",
                "type": "private",
                "upd": lasupd,
                "isForum": isForum()
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
            if (chatInfo[realMess[i][messHead].chat.id].upd !== lasupd) {
              function isForum() {
                if (!realMess[i][messHead].message_thread_id) {
                  return false
                } else {
                  return true
                }
              }
              chatInfo[realMess[i][messHead].chat.id] = {
                "username": realMess[i][messHead].chat.username || "",
                "name": realMess[i][messHead].chat.title || realMess[i][messHead].chat.first_name,
                "icon": "https://placehold.co/25x25",
                "type": "private",
                "upd": lasupd,
                "isForum": isForum()
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
          } else {
            let myPoll = await fetch(`https://api.telegram.org/bot${token.value}/getPoll?poll_id=${realMess[i][messHead].id}`)
            myPoll = await myPoll.json()
            myPoll = myPoll.result
            if (!chats.includes(myPoll.chat.id)) {
              chats.push(myPoll.chat.id)
            }
          }
        }
      }
    }
    await getChats()
    async function addChats() {
      screen.innerHTML = `
        <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button></div>
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
      chatsList.innerHTML += `
        <h3>Send a message to another chat</h3>
        <input id="messageText"><input id="messageChatId"><button onclick="sendMessage(document.getElementById('messageChatId'))">send</button>
      `
    }
    await addChats()
}
async function Chat(id) {
    senderParam = baseSender
    members = await (await fetch(`https://api.telegram.org/bot${token.value}/getChatMembersCount?chat_id=${id}`)).json()
    members = members.result
    screen.innerHTML = `
      <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button></div>
      <div id="messages" class="messages"><h1><img src="${chatInfo[id].icon}" width="25" height="25">${chatInfo[id].name} [${members}]</h1></div>
    `
    let messList = document.getElementById("messages")
    async function getMesss() {
      let i = 0
      for(i = 0; i < realMess.length; i++) {
        if (realMess[i].message) {
          messHead = "message"
        } else if (realMess[i].channel_post) {
          messHead = "channel_post"
        } else if (realMess[i].edited_message) {
          messHead = "edited_message"
        } else {
          messHead = "notSupport"
        }
        if (messHead !== "notSupport" && realMess[i][messHead].chat.id === id) {
          if (realMess[i][messHead].poll) {
            let myPoll = realMess[i][messHead]
            if (!myPoll.reply_to_message) {
              if (!myPoll.sender_chat) {
                if (myPoll.from.is_bot) {
                  messList.innerHTML += `
                    <div class="message" id="id${myPoll.update_id}"><div id="idc${myPoll.message_id}"><h4><img src="https://placehold.co/25x25">${myPoll.from.first_name} [bot, ${realMess[i].poll.type}] <code>${myPoll.from.id}</code></h4><p id="id${myPoll.update_id}text">
                      Poll<br>
                      Anonymous: ${realMess[i][messHead].poll.is_anonymous}<br>
                      Closed? ${realMess[i][messHead].poll.is_close}<br>
                      <b>${realMess[i][messHead].poll.question}</b>
                    </p></div></div>
                  `
                  for (let i2 = 0; i2 < realMess[i][messHead].poll.options.length; i2++) {
                    document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<p><b>${realMess[i][messHead].poll.options[i2].text}</b> Votes: ${realMess[i][messHead].poll.options[i2].voter_count}</p>`
                  }
                } else {
                  messList.innerHTML += `
                    <div class="message" id="id${myPoll.update_id}"><div id="idc${myPoll.message_id}"><h4><img src="https://placehold.co/25x25">${myPoll.from.first_name} [user, ${realMess[i].poll.type}] <code>${myPoll.from.id}</code></h4><p id="id${myPoll.update_id}text">
                      Poll<br>
                      Anonymous: ${realMess[i][messHead].poll.is_anonymous}<br>
                      Closed? ${realMess[i][messHead].poll.is_close}<br>
                      <b>${realMess[i][messHead].poll.question}</b>
                    </p></div></div>
                  `
                  for (let i2 = 0; i2 < realMess[i][messHead].poll.options.length; i2++) {
                    document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<p><b>${realMess[i][messHead].poll.options[i2].text}</b> Votes: ${realMess[i][messHead].poll.options[i2].voter_count}</p>`
                  }
                }
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${myPoll.update_id}"><div id="idc${myPoll.message_id}"><h4><img src="https://placehold.co/25x25">${myPoll.sender_chat.title} [${myPoll.sender_chat.type}, ${realMess[i].poll.type}] <code>${myPoll.sender_chat.id}</code></h4><p id="id${myPoll.update_id}text">
                    Poll<br>
                    Anonymous: ${realMess[i][messHead].poll.is_anonymous}<br>
                    Closed? ${realMess[i][messHead].poll.is_close}<br>
                    <b>${realMess[i][messHead].poll.question}</b>
                  </p></div></div>
                `
                for (let i2 = 0; i2 < realMess[i][messHead].poll.options.length; i2++) {
                  document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<p><b>${realMess[i][messHead].poll.options[i2].text}</b> Votes: ${realMess[i][messHead].poll.options[i2].voter_count}</p>`
                }
              }
            }
            document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button>`
          } else if (realMess[i][messHead].text) {
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
          } else if(realMess[i][messHead].new_chat_member) {
            if(realMess[i][messHead].new_chat_member.is_bot) {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>добавила в чат ${realMess[i][messHead].new_chat_member.first_name} [bot] [${realMess[i][messHead].new_chat_member.id}]</p></div></div>
              `
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>добавила в чат ${realMess[i][messHead].new_chat_member.first_name} [user] [${realMess[i][messHead].new_chat_member.id}]</p></div></div>
              `
            }
          } else if(realMess[i][messHead].photo) {
            let image = await (await fetch(`https://api.telegram.org/bot${token.value}/getFile?file_id=${realMess[i][messHead].photo[1].file_id}`)).json()
            image = image.result.file_path
            image = `https://api.telegram.org/file/bot${token.value}/${image}`
            let fileId = realMess[i][messHead].photo
            if(!realMess[i][messHead].reply_to_message) {
              if(!realMess[i][messHead].sender_chat) {
                if(realMess[i][messHead].from.is_bot) {
                  messList.innerHTML += `
                    <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img onclick="console.log('File Ids: ${fileId}')" src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><img src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                  `
                } else {
                  messList.innerHTML += `
                    <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img onclick="console.log('File Ids: ${fileId}')" src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><img src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                  `
                }
              } else {
                messList.innerHTML += `
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img onclick="console.log('File Ids: ${fileId}')" src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><img src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                `
              }
            } else {
              if(realMess[i][messHead].reply_to_message.photo) {
                let imageOtvet = await (await fetch(`https://api.telegram.org/bot${token.value}/getFile?file_id=${realMess[i][messHead].reply_to_message.photo[1].file_id}`)).json()
                imageOtvet = imageOtvet.result.file_path
                imageOtvet = `https://api.telegram.org/file/bot${token.value}/${imageOtvet}`
                let fileOtvetId = realMess[i][messHead].reply_to_message.photo[1].file_id
                if(!realMess[i][messHead].sender_chat) {
                  if(realMess[i][messHead].from.is_bot) {
                    messList.innerHTML += `
                      <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><img src="${imageOtvet}"><p>${realMess[i][messHead].reply_to_message.caption || ""}</p></pre><img onclick="console.log('File Ids: ${fileId}')" src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                    `
                  } else {
                    messList.innerHTML += `
                      <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><img src="${imageOtvet}"><p>${realMess[i][messHead].reply_to_message.caption || ""}</p></pre><img onclick="console.log('File Ids: ${fileId}')" src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                    `
                  }
                } else {
                  messList.innerHTML += `
                    <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><img src="${imageOtvet}"><p>${realMess[i][messHead].reply_to_message.caption || ""}</p></pre><img onclick="console.log('File Ids: ${fileId}')" src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                  `
                }
              } else {
                if(!realMess[i][messHead].sender_chat) {
                  if(realMess[i][messHead].from.is_bot) {
                    messList.innerHTML += `
                      <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p>${realMess[i][messHead].reply_to_message.text}</p></pre><img onclick="console.log('File Ids: ${fileId}')" src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                    `
                  } else {
                    messList.innerHTML += `
                      <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p>${realMess[i][messHead].reply_to_message.text}</p></pre><img onclick="console.log('File Ids: ${fileId}')" src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                    `
                  }
                } else {
                  messList.innerHTML += `
                    <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><pre><b>${realMess[i][messHead].reply_to_message.from.first_name}</b><p>${realMess[i][messHead].reply_to_message.text}</p></pre><img onclick="console.log('File Ids: ${fileId}')" src="${image}"><p>${realMess[i][messHead].caption || ""}</p></div></div>
                  `
                }
              }
            }
            document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button>`
          }
        }
      } 
      screen.innerHTML += `
        <button onclick="plusSend(${id})">plus</button><input id="messageText"><button onclick="sendMessage(${id})">send</button>
      `
    }
    await getMesss()
}
async function sendMessage(chat) {
  fetch(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chat}&text=${document.getElementById("messageText").value}`)
  messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
  messages = messages.result
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
  messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
  messages = messages.result
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
  await getMess()
  Chat(chat)
}
async function botScript() {
  screen.innerHTML = `
    <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button></div>
    <textarea id="codebs" placeholder="Your code" rows="30" cols="50"></textarea>
    <button onclick="codebsRun(document.getElementById('codebs').value)">Start</button>
  `
  let code = document.getElementById("codebs").value
  if(bs.code){
    code = bs.code
  }
}
async function codebsRun(co) {
  let code = co
  let code2 = JSON.parse(code)
  code2 = code2.code
  code2 = code2.split(";\n  ")
  messages = await (await fetch(`https://api.telegram.org/bot${token.value}/getUpdates`)).json()
  messages = messages.result
  await getMess()
  for(let i = 0; i < code2.length; i++) {
    let i2 = code2[i]
    let i3 = i2.split(" ")
    if (i3[0] === "let") {
      windowBs.war[i3[1]] = null
    } else if (i3[1] === "=") {
      windowBs.war[i3[0]] = i3[2]
    } else if (i3[0] === "token") {
      windowBs.token[windowsBs.name] = windowBs.var.getValue(i3[1])
    } else if (i3[0] === "out.log") {
      console.log(windowBs.var.getValue(i3[1]))
    } else if (i3[0] === "out.warn") {
      console.warn(windowBs.var.getValue(i3[1]))
    } else if (i3[0] === "out.err") {
      console.error(windowBs.var.getValue(i3[1]))
    } else if (i3[0] === "bot") {
      if (i3[1] === "name") {
        windowBs.name = windowBs.var.getValue(i3[2]])
      }
    } else if (i3[0] === "fetch") {
      windowBs.var.response = await fetch(i3[1])
    } else if (i3[0] === "use") {
      windowBs.var[i3[1]](i3[2])
    } else if (i3[0] === "client") {
      if (i3[1] === "token") {
        token.value = windowBs.token[windowBs.name]
      }
    } else if (i2.split("|")[0] === "for") {
      let i4 = i2.split("|")
      if (i4.length === 3) {
        let i5 = i4[1]
        let i6 = i4[2]
        let i7 = true
        let i8 = {
          "code": ""
        }
        let i9 = i4[3]
        for (i7 = true; i7; i++) {
          if (code2[i] === `end${i9}`) {
            i7 = false
          } else {
            i8.code += `
              ;\n  ${code2[i]}
            `
          }
        } 
        for(windowBs.var.[i5.split[0]] = windowBs.var.getValue(i5.split[1]); windowBs.var.getValue(i6); windowBs.var.[i5.split[0]]++) {
          codebsRun(i8)
        }
      }
    }
  }
}
async function settingsTbc() {
  screen.innerHTML = `
    <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button></div>
    <h1>Settings</h1>
  `
}
async function creditsTbc() {}
async function plusSend(idChat) {
  screen.innerHTML += `
    <div id="plusSend">
      <p>Plus Send</p>
      <br><button onclick="document.getElementById('plusSend').innerHTML = ''">Close</button>
      <br><button onclick="sendPhoto(${idChat})">Photo</button><button>Apps</button><button>Buttons</button>
    </div>
  `
}
async function sendPhoto() {}
async function sendApps() {}
async function sendButtons() {}
