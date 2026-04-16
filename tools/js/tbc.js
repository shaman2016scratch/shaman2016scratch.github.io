let screen = document.getElementById("content")
let version = null
const baseProxy = "https://shaman2016-trampline.vercel.app/tg/"
const baseImageProxy = "https://shaman2016-trampline.vercel.app/tgImg/"
let proxyHttp = baseProxy
let proxyImageHttp = baseImageProxy
const baseSender = {
  "text": "",
  "photos": [],
  "buttons": [],
  "format": "HTML",
  "apps": {
    "name": "",
    "id": 0,
    "metadata": {},
    "link": "",
  },
  "type": {
    "text": true,
    "photos": false,
    "buttons": false,
    "apps": false,
  },
  'isReply': false,
  'replyData': {}
}
let verified = {
  users: {
    6049462351: 'OFFICIAL. CREATOR TBC'
  },
  chats: {}
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
  version = ToolsApi.versionTools().tbc
  document.getElementById("v").textContent = `Version: ${ToolsApi.versionTools().tbc}`
}
SetVersion()
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
  <h1>Mini documentation</h1>
  <h2>How do I get a bot token?</h2>
  <p>1. go to t.me/botfather<br>2. Write to him /newbot, come up with a name for the bot, enter a username (without @, only letters and numbers and _, it should end in '_bot' or 'bot')<br>3. Copy the received token.</p>
  <h2>Telegram doesn't work for me.</h2>
  <p>Use the MTProto proxy. MTProto is the protocol on which all telegram works, all traffic passes through the MTProto telegram server. If it stops working in a particular region, you need another MTProto proxy that will receive all traffic and send it through the server functions to the official proxy server. But this proxy should be located where telegram works. Attention: The MTProto proxy only helps telegram work, it does not help other services work.</p>
  <h2>A little bit about this tool</h2>
  <p>Why is everything in English? Because the tool is designed for an audience from all over the world. The author is not a native English speaker, all translations are made through Yandex Translator</p>
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
async function loadBoteto() {
  boteto = await (await fetch(`${proxyHttp}bot${token.value}/getMe`)).json()
  boteto = boteto.result
}
loadBoteto()
async function start() {
  await loadBoteto()
  botn.textContent = `Name: ${boteto.first_name}`
  messages = await (await fetch(`${proxyHttp}bot${token.value}/getUpdates`)).json()
  messages = messages.result
  await getMess()
  if (messages[99]) {
    messages = await (await fetch(`${proxyHttp}bot${token.value}/getUpdates?offset=${messages[99].update_id + 1}`)).json()
    messages = messages.result
    await getMess()
  }
  if (messages[99]) {
    messages = await (await fetch(`${proxyHttp}bot${token.value}/getUpdates?offset=${messages[99].update_id + 1}`)).json()
    messages = messages.result
    await getMess()
  }
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
            let icoon = await (await fetch(`${proxyHttp}bot${token.value}/getChat?chat_id=${realMess[i][messHead].chat.id}`)).json()
            if(icoon.result.photo) {
              icoon = icoon.result.photo.big_file_id
              icoon = await (await fetch(`${proxyHttp}bot${token.value}/getFile?file_id=${icoon}`)).json()
              icoon = icoon.result.file_path
              chatInfo[realMess[i][messHead].chat.id].icon = `${proxyImageHttp}file/bot${token.value}/${icoon}`
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
            let icoon = await (await fetch(`${proxyHttp}bot${token.value}/getChat?chat_id=${realMess[i][messHead].chat.id}`)).json()
            if(icoon.result.photo) {
              icoon = icoon.result.photo.big_file_id
              icoon = await (await fetch(`${proxyHttp}bot${token.value}/getFile?file_id=${icoon}`)).json()
              icoon = icoon.result.file_path
              chatInfo[realMess[i][messHead].chat.id].icon = `${proxyImageHttp}file/bot${token.value}/${icoon}`
              chatInfo[realMess[i][messHead].chat.id].type = realMess[i][messHead].chat.type
            }
          }
        } else {
          let myPoll = await fetch(`${proxyHttp}bot${token.value}/getPoll?poll_id=${realMess[i][messHead].id}`)
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
  members = await (await fetch(`${proxyHttp}bot${token.value}/getChatMembersCount?chat_id=${id}`)).json()
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
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${myPoll.message_id}"><h4><img src="https://placehold.co/25x25">${myPoll.from.first_name} <b>${myPoll.sender_tag || '<i>Unknown</i>'}</b> [bot, poll:${myPoll.poll.type}] <code>${myPoll.from.id}</code></h4><p id="id${myPoll.update_id}text">
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
                  <div class="message" id="id${realMess[i].update_id}"><div id="idc${myPoll.message_id}"><h4><img src="https://placehold.co/25x25">${myPoll.from.first_name} <b>${myPoll.sender_tag || '<i>Unknown</i>'}</b> [user, ${myPoll.poll.type}] <code>${myPoll.from.id}</code></h4><p id="id${myPoll.update_id}text">
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
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${myPoll.message_id}"><h4><img src="https://placehold.co/25x25">${myPoll.sender_chat.title} <b>${myPoll.sender_tag || '<i>Unknown</i>'}</b> [${myPoll.sender_chat.type}, ${myPoll.poll.type}] <code>${myPoll.sender_chat.id}</code></h4><p id="id${myPoll.update_id}text">
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
            document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button>`
          }
        } else if (realMess[i][messHead].text) {
          if(!realMess[i][messHead].sender_chat) {
            if(realMess[i][messHead].from.is_bot) {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} <b>${realMess[i][messHead].sender_tag || '<i>Unknown</i>'}</b> [bot] <code>${realMess[i][messHead].from.id}</code></h4><p id="id${realMess[i].update_id}text">[error]</p></div></div>
              `
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} <b>${realMess[i][messHead].sender_tag || '<i>Unknown</i>'}</b> [user] <code>${realMess[i][messHead].from.id}</code></h4><p id="id${realMess[i].update_id}text">[error]</p></div></div>
              `
            }
          } else {
            messList.innerHTML += `
              <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} <b>${realMess[i][messHead].sender_tag || '<i>Unknown</i>'}</b> [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><br><p id="id${realMess[i].update_id}text">[error]</p></div></div>
            `
          }
          document.getElementById(`id${realMess[i].update_id}text`).textContent = realMess[i][messHead].text
          document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button>`
        } else if(realMess[i][messHead].new_chat_member) {
          if(realMess[i][messHead].new_chat_member.is_bot) {
            if (!realMess[i][messHead].new_chat_member.id === realMess[i][messHead].from.id) {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>добавила в чат ${realMess[i][messHead].new_chat_member.first_name} [bot] [${realMess[i][messHead].new_chat_member.id}]</p></div></div>
              `
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>вступила в чат</p></div></div>
              `
            }
          } else {
            if (!realMess[i][messHead].new_chat_member.id === realMess[i][messHead].from.id) {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>добавила в чат ${realMess[i][messHead].new_chat_member.first_name} [user] [${realMess[i][messHead].new_chat_member.id}]</p></div></div>
              `
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>вступила в чат</p></div></div>
              `
            }
          }
        } else if(realMess[i][messHead].photo) {
          let image = await (await fetch(`${proxyHttp}bot${token.value}/getFile?file_id=${realMess[i][messHead].photo[1].file_id}`)).json()
          image = image.result.file_path
          image = `${proxyImageHttp}file/bot${token.value}/${image}`
          let { file_id } = realMess[i][messHead].photo[1]
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
          document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button><a href='${image}'><button>Copy file</button></a><button onclick='console.log(\`file_id: ${file_id}, file_url: ${image}\`); alert("in console")'>Get file metadata</button>`
        } else if (realMess[i][messHead].video) {
          let video = await (await fetch(`${proxyHttp}bot${token.value}/getFile?file_id=${realMess[i][messHead].video.file_id}`)).json()
          video = video.result.file_path
          video = `${proxyImageHttp}file/bot${token.value}/${video}`
          let { file_id } = realMess[i][messHead].video
          if(!realMess[i][messHead].sender_chat) {
            if(realMess[i][messHead].from.is_bot) {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot] <code>${realMess[i][messHead].from.id}</code></h4><video src="${video}" height='${realMess[i][messHead].video.height}' width='${realMess[i][messHead].video.width}' controls></video><p>${realMess[i][messHead].caption || ""}</p></div></div>
              `
            } else {
              messList.innerHTML += `
                <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user] <code>${realMess[i][messHead].from.id}</code></h4><video src="${video}" height='${realMess[i][messHead].video.height}' width='${realMess[i][messHead].video.width}' controls></video><p>${realMess[i][messHead].caption || ""}</p></div></div>
              `
            }
          } else {
            messList.innerHTML += `
              <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><img src="https://placehold.co/25x25"><div><h4>${realMess[i][messHead].sender_chat.title} [${realMess[i][messHead].sender_chat.type}] <code>${realMess[i][messHead].sender_chat.id}</code></h4><video src="${video}" height='${realMess[i][messHead].video.height}' width='${realMess[i][messHead].video.width}' controls></video><p>${realMess[i][messHead].caption || ""}</p></div></div>
            `
          }
          document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<button onclick="sendReply(${id}, ${realMess[i][messHead].message_id})">To answer</button><a href='${video}'><button>Copy file</button></a><button onclick='console.log(\`file_id: ${file_id}, file_url: ${video}\`); alert("in console")'>Get file metadata</button>`
        } else if (realMess[i][messHead].left_chat_member) {
          if(realMess[i][messHead].from.is_bot) {
            messList.innerHTML += `
              <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [bot, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>покинула группу</p></div></div>
            `
          } else {
            messList.innerHTML += `
              <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><h4><img src="https://placehold.co/25x25">${realMess[i][messHead].from.first_name} [user, sys message] <code>${realMess[i][messHead].from.id}</code></h4><p>покинула группу</p></div></div>
            `
          }
        } else if (realMess[i][messHead].new_chat_photo) {
          messList.innerHTML += `
            <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}">Фотография чата обновлена</div></div>
          `
        } else {
          messList.innerHTML += `
            <div class="message" id="id${realMess[i].update_id}"><div id="idc${realMess[i][messHead].message_id}"><i>Сообщение не поддерживается</i></div></div>
          `
          console.log('DEBUG (for developers):')
          console.log(realMess[i][messHead])
        }
        console.log(`doc ${document.getElementById(`id${realMess[i].update_id}`)}, value 'id${realMess[i].update_id}'`)
        document.getElementById(`id${realMess[i].update_id}`).innerHTML += `<br><i>DATE: ${new Date(realMess[i].data)}<i>`
      }
    } 
    screen.innerHTML += `
      <button onclick="plusSend(${id})">plus</button><input id="messageText"><button onclick="sendMessage(${id})">send</button>
    `
  }
  async function getAnswer(ansData) {
    if (typeof ansData === "undefined") {
      return ansData
    }
    if (typeof ansData === "object") {
      // The blank for the new function
    } else {
      return "ERROR: The Answer Data is not of the 'Object' type"
    }
  }
  await getMesss()
}
async function setSender() {}
async function sendMessage(chat) {
  let getRes = await fetch('https://api-shaman2016.vercel.app/getMe')
  getRes = await getRes.json()
  getRes = getRes.result
  let text = document.getElementById("messageText").value
  if (text === '.botFetch' && addons[0].enabled) {
    text = `
      <b>botFetch</b>
      Client: Telegram Bot Chats
      Author: SHAMAN2016/polzovatel_8787
      Version: ${version}
      Site: ${getRes.headers.origin}
    `
  }
  fetch(`${proxyHttp}bot${token.value}/sendMessage?text=${text}&chat_id=${chat}&parse_mode=HTML`)
  messages = await (await fetch(`${proxyHttp}bot${token.value}/getUpdates`)).json()
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
      "date": Date.now(),
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
  fetch(`${proxyHttp}bot${token.value}/sendMessage?chat_id=${chat}&text=${document.getElementById("messageText").value}&reply_to_message_id=${mess}&parse_mode=HTML`)
  messages = await (await fetch(`${proxyHttp}bot${token.value}/getUpdates`)).json()
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
      "date": Date.now(),
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
  messages = await (await fetch(`${proxyHttp}bot${token.value}/getUpdates`)).json()
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
        windowBs.name = windowBs.var.getValue(i3[2])
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
        for(windowBs.var[i5.split[0]] = windowBs.var.getValue(i5.split[1]); windowBs.var.getValue(i6); windowBs.var[i5.split[0]]++) {
          codebsRun(i8)
        }
      }
    } else if (i2.split("|")[0] === "if") {
      let i4 = i2.split("|")
      if (i4.length === 2) {
        let i5 = i4[1]
        let i6 = true
        let i7 = {
          "code": ""
        }
        let i8 = i4[2]
        for (i6 = true; i6; i++) {
          if (code2[i] === `end${i8}`) {
            i6 = false
          } else {
            i7.code += `
              ;\n  ${code2[i]}
            `
          }
        }
        if (windowBs.var.getValue(i5)) {
          codebsRun(i7)
        }
      }
    }
  }
}
async function settingsTbc() {
  screen.innerHTML = `
    <div class="message"><button onclick="botScript()">botScript</button><button onclick="settingsTbc()">Settings</button></div>
    <h1>Settings</h1>
    <p><button onclick='tbc.settings.utilites.index()'>Utilities</button></p>
    <p><button onclick='tbc.settings.data()'>Data and memory</button></p>
    <p><button onclick='tbc.settings.privacy()'>Privacy</button></p>
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
async function proxySettings() {
  screen.innerHTML = `
    <h1><div onclick='settingsTbc()'>Settings</div> > Proxy settings</h1>
    <p><button onclick='proxySettingsComponents.main.index()'>MAIN PROXY</button><button onclick='proxySettingsComponents.filesProxy.index()'>FILES PROXY</button></p>
  `
}
let proxySettingsComponents = {
  'main': {
    'index': async function() {
      const tgPingStart = new Date().getTime()
      let tgPing = 0
      fetch('https://api.telegram.org/')
        .then(response => {
          const endTime = new Date().getTime()
          tgPing = endTime - tgPingStart;
        })
        .catch(error => tgPing = `ERROR: ${error.message}`);
      const basePingStart = new Date().getTime()
      let basePing = 0
      fetch(baseProxy)
        .then(response => {
          const endTime = new Date().getTime()
          basePing = endTime - basePingStart;
        })
        .catch(error => basePing = `ERROR: ${error.message}`);
      const mainPingStart = new Date()
      let mainPing = 0
      fetch(proxyHttp)
        .then(response => {
          const endTime = new Date().getTime()
          mainPing = endTime - mainPingStart;
        })
        .catch(error => mainPing = `ERROR: ${error.message}`);
      screen.innerHTML = `
        <h1><div onclick='settingsTbc()'>Settings</div> > Proxy settings > MAIN PROXY</h1>
        <p>PROXY URL: <input id='proxyUrl'><button onclick='proxySettingsComponents.main.add.http()'>ADD HTTP PROXY</button></p>
        <p>Telegram Proxy ping: ${tgPing}</p>
        <p>Base Proxy ping: ${basePing}</p>
        <p>Proxy ping: ${mainPing}</p>
      `
    },
    'add': {
      'http': async function() {
        proxyHttp = document.getElementById('proxyUrl').value
      }
    },
  },
  'filesProxy': {
    'index': async function() {
      screen.innerHTML = `
        <h1><div onclick='settingsTbc()'>Settings</div> > Proxy settings > FILES PROXY</h1>
        <p>PROXY URL: <input id='proxyUrl'><button onclick='proxySettingsComponents.filesProxy.add.http()'>ADD HTTP PROXY</button></p>
      `
    },
    'add': {
      'http': async function() {
        proxyImageHttp = document.getElementById('proxyUrl').value
      }
    },
  },
}
async function pluginSettings() {
  screen.innerHTML = `
    <h1><div onclick='settingsTbc()'>Settings</div> > Plugin settings</h1>
    <p><button onclick='pluginSettingsComponents.list.add()'>ADD</button><button onclick='pluginSettingsComponents.list.open()'>OPEN LIST</button></p>
    <p>Warning: the author and developers of Telegram Bot Client do not bear any responsibility for what plugins can do, plugins can do bad things, it is better to install only proven plugins.</p>
    <div id='plugMenu'>Choose something.</div>
  `
}
let plugList = []
let plugObj = {}
let pluginSettingsComponents = {
  'list': {
    'add': async function() {
      let plugMenu = document.getElementById('plugMenu')
      plugMenu.innerHTML = `
        <h2>NEW PLUGIN</h2>
        <label for='plugName'>NAME</label>
        <input id='plugName' name='plugName'>
        <label for='plugUrl'>URL</label>
        <input id='plugUrl' name='plugUrl'>
        <button onclick='plugAddListSumbut()'>ADD</button>
      `
    },
    'open': async function() {
      let plugMenu = document.getElementById('plugMenu')
      plugMenu.innerHTML = `
        <h2>Plugins</h2>
      `
      for(let i = 0; i < plugList.length; i++) {
        plugMenu.innerHTML += `
          <div class='message' id='${plugList[i].id}'>
            <h4>${plugList[i].plugName || 'unknown'} [${plugList[i].name}]</h4>
            <p class='message'>${plugList[i].description || 'unknown'}</p>
            <br><a href='https://t.me/${plugList[i].creatorTg}'>Telegram creator's</a>|<a href='https://t.me/${plugList[i].creatorTgChannel}'>Telegram channel creator's</a>
            <br><a href='${plugList[i].code}'><button>View Code</button></a><button onclick='openLogsPlugin("${plugList[i].name}")'>View Logs</button><button onclick='onoffPlug("${plugList[i].name}")'>on/off</button>
          </div>
        `
      }
    },
  },
}
async function plugAddListSumbut() {
  let plugName = document.getElementById('plugName').value
  let plugUrl = document.getElementById('plugUrl').value
  let plugCode = await fetch(plugUrl)
  plugCode = await plugCode.json()
  plugList.push = {
    'name': plugName,
    'code': plugUrl,
    'version': plugCode.__meta__.__version__,
    'plugName': plugCode.__meta__.__name__,
    'creatorTg': plugCode.__meta__.__creator__.__tg__,
    'creatorTgChannel': plugCode.__meta__.__creator__.__tgChannel__,
    'id': plugCode.__meta__.__id__,
    'description': plugCode.__meta__.__description__,
    'isSettings': plugCode.__meta__.__isSettings__,
    'logs': [],
    'isStarted': false
  }
  plugObj[plugName] = plugList.length
  alert('Plugin Added')
}
async function openLogsPlugin(pn) {
  let plugMenu = document.getElementById('plugMenu')
  let plogs = plugList[plugObj[pn]].logs
  plugMenu.innerHTML = `
    <h3>PLUGIN LOGS</h3>
  `
  for(let i = 0; i < plogs.length; i++) {
    plugMenu.innerHTML += `
      <p><b>${plogs[i].type || 'log'}</b>: ${plogs[i].text || 'unknown'}.<br><i>${new Date(plogs[i].date).toLocaleDateString() || 'NODATA'}</i></p>
    `
  }
}
async function onoffPlug(pn) {
  let plugCode = await fetch(plugList[plugObj[pn]].code)
  plugCode = await plugCode.json()
  if (plugList[plugObj[pn]].isStarted) {
    plugList[plugObj[pn]].isStarted = false
    document.getElementById(plugList[plugObj[pn]].id).innerHTML = ''
  } else {
    plugList[plugObj[pn]].isStarted = true
    document.body += `<div id='${plugList[plugObj[pn]].id}'><script src='${plugList[plugObj[pn]].code}'></script></div>`
  }
}
window.tbcImport = async function(from, module, par) {
  if (from === 'console') {
    return {
      log: new Function(['text'], `
        plugList[${par.plugin}].logs += {
          type: 'log',
          text,
          date: new Date()
        }
      `),
      warn: new Function(['text'], `
        plugList[${par.plugin}].logs += {
          type: 'warn',
          text,
          date: new Date()
        }
      `),
      error: new Function(['text'], `
        plugList[${par.plugin}].logs += {
          type: 'error',
          text,
          date: new Date()
        }
      `),
      getLogs: new Function(['text'], `
        return plugList[${par.plugin}].logs
      `),
      logColor: new Function(['text', 'color'], `
        plugList[${par.plugin}].logs += {
          type: 'log',
          text,
          date: new Date(),
          color
        }
      `),
    }
  } else if (from === 'telegram') {
    if (module === 'bot/get') {
      return {
        'bot': async function(tokenBot) {
          const getBot = await (await fetch(`${proxyHttp}bot${tokenBot}/getMe`)).json()
        },
        'updates': async function(tokenBot) {
          const getBot = await (await fetch(`${proxyHttp}bot${tokenBot}/getUpdates`)).json()
        },
        'chat': async function(tokenBot, id) {
          const getBot = await (await fetch(`${proxyHttp}bot${tokenBot}/getChat?chat_id=${id}`)).json()
        },
        'chatAdmins': async function(tokenBot) {
          const getBot = await (await fetch(`${proxyHttp}bot${tokenBot}/getChatAdministrators?chat_id=${id}`)).json()
        },
      }
    } else if (module === 'bot/send') {
      return {
        'message': async function(tokenBot, text, chatId) {
          const req = await fetch(`${proxyHttp}bot${tokenBot}/sendMessage?text=${text}&chat_id=${chatId}`, {})
          const res =  req.json()
          return {
            req,
            res
          }
        }
      }
    }
  } else if (from === 'tbcApi') {
    if (module === 'proxy/base') {
      return {
        'get': function() {
          return proxyHttp
        },
        'set': function(url) {
          proxyHttp = url
        }
      }
    } else if (module === 'proxy/image') {
      return {
        'get': function() {
          return proxyImageHttp
        },
        'set': function(url) {
          proxyImageHttp = url
        }
      }
    } else if (module === 'verified/users') {
      return {
        'isPresent': function(id) {
          if (!verified.users[id]) {
            return false
          } else {
            return true
          }
        },
        'get': function(id) {
          return verified.users[id]
        },
        'set': function(id, value) {
          verified.users[id] = value
        }
      }
    } else if (module === 'verified/chats') {
      return {
        'isPresent': function(id) {
          if (!verified.chats[id]) {
            return false
          } else {
            return true
          }
        },
        'get': function(id) {
          return verified.chats[id]
        },
        'set': function(id, value) {
          verified.chats[id] = value
        }
      }
    }
  } else {
    return undefined
    console.error(`module ${module} on ${from} or package ${from} not found`)
  }
}
async function getChatInfo(id) {}
let tbc = {
  settings: {
    utilites: {
      index: function() {
        screen.innerHTML = `
          <h1><div onclick='settingsTbc()'>Settings</div> > Utilities</h1>
          <p onclick='pluginSettings()'>Plugins</p>
          <p onclick='tbc.settings.utilities.addons()'>Add-ons</p>
          <p onclick='proxySettings()'>Proxy</p>
        `
      },
      addons: function() {
        function getEnable(n) {
          if(addons[n].enabled) {
            return 'enabled'
          } else {
            return 'enable'
          }
        }
        screen.innerHTML = `
          <h1 onclick='tbc.settings.utilities.index()'>Utilities</h1>
          <h2>Add-ons</h2>
          <div class='projects'>
            <div class='project'>
              <p><b>botFetch</b></p>
              <p>Write ".botFetch" to get information about the client and yourself.</p>
              <p><button onclick='onoffaddons(0)>${getEnable(0)}</button></p>
            </div>
          </div>
        `
      }
    },
    data: function() {
      screen.innerHTML = `
        <h1>Data and memory</h1>
        <h2>Using</h2>
        <p>${chats.length} chats <button onclick='chats = []; chatInfo = {}; openChat = {}'>Clear</button></p>
        <p>${realMessList.length} messages <button onclick='realMess = {}; realMessList = []'>Clear</button></p>
        <h2>Proxy</h2>
        <p onclick='proxySettings()'>Proxy Settings</p>
      `
    },
    privacy: function() {
      screen.innerHTML = `
        <h1>Privacy and safety</h1>
      `
    }
  }
}
let addons = [
  {
    enabled: false,
    settings: {}
  }
]
function onoffaddons(n) {
  if(addons[n].enabled) {
    addons[n].enabled = false
  } else {
    addons[n].enabled = true
  }
}
async function myprofile() {
  let proinfo = await fetch(`${proxyHttp}bot${token.value}/getChat?id=${boteto.id}`)
  proinfo = await proinfo.json()
  proinfo = proinfo.result
  screen.innerHTML += `
    <h2>${proinfo.first_name} <code>id${proinfo.id}</code></h2>
    <p>@${proinfo.username}</p>
    <p>${proinfo.type}</p>
  `
}
