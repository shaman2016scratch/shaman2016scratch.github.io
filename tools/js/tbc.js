let screen = document.getElementById("content")
let token = document.getElementById("bot")
let chats = []
let chatInfo = {}
let openChat = {}
let messages = []
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
        if (!chats.includes(messages[i].message.chat.id)) {
          chats.push(messages[i].message.chat.id)
        }
        chatInfo[messages[i].message.chat.id] = {
          "username": messages[i].message.chat.username,
          "name": messages[i].message.chat.title,
          "icon": "https://placehold.co/100x100"
        }
        let icoon = await (await fetch(`https://api.telegram.org/bot${token.value}/getChat/`)).json().result.photo.big_file_id
        icoon = await (await fetch(`https://api.telegram.org/bot${token.value}/getFile?file_id=${icoon}`)).text()
        chatInfo[messages[i].messages.chat.id].icon = await (await fetch(`https://api.telegram.org/file/bot${token.value}/${icoon}`)).blob()
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
          <h1 onclick="openChat[${i}]()"><img src="${chatInfo[chats[i]].icon}">${chatInfo[chats[i]].name}</h1>
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
  try {
    screen.innerHTML = `
      <div id="messages" class="messages"><h1><img src="${chatInfo[id].icon}">${chatInfo[id].name}</h1></div>
    `
    let messList = document.getElementById("messages")
    async function getMess() {
      for(let i = 0; i < messages.length; i++) {
        if(messages[i].message.from.id !== 777000) {
          if(messages[i].message.from.is_bot) {
            messList.innerHTML += `
              <div class="message" id="id${messages[i].update_id}"><div><img src="https://placehold.co/100x100"><div><h4>${messages[i].message.from.first_name} [bot] <code>${messages[i].message.from.id}</code></h4><br>${messages[i].message.text}</div></div></div>
            `
          } else {
            messList.innerHTML += `
              <div class="message" id="id${messages[i].update_id}"><div><img src="https://placehold.co/100x100"><div><h4>${messages[i].message.from.first_name} [user] <code>${messages[i].message.from.id}</code></h4><br>${messages[i].message.text}</div></div></div>
            `
          }
        } else {
          messList.innerHTML += `
            <div class="message" id="id${messages[i].update_id}"><div><img src="https://placehold.co/100x100"><div><h4>${messages[i].message.sender_chat.title} [${messages[i].message.sender_chat.type}] <code>${messages[i].message.sender_chat.id}</code></h4><br>${messages[i].message.text}</div></div></div>
          `
        }
      }
    }
    await getMess()
  } catch (err) {
    alert(`Error: ${err.message}`)
    console.error(err.message)
  }
}
