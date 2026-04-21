let root = document.getElementById('root')
let data = {
  apps: [],
  appData: {},
  users: [
    'test user'
  ],
  userData: {
    'test user': {
      name: 'test',
      password: null,
      pass: null
    }
  },
  mainData: {
    databases: {
      metadata: {
        main: {
          tables: {}
        }
      }
    }
  },
  fs: {
    files: {
      'home': {
        type: 0,
        files: {},
        created: new Date(),
        update: new Date()
      }
    }
  },
  system: {
    metadata: {
      name: 'Test8787OS',
      version: '0.0.1 alpha',
      buildId: 1
    },
    components: {
      list: [
        {
          type: 'programming language',
          name: 'testScript',
          src: {
            type: 'githubRepo',
            fileType: 'javascript',
            repo: 'shaman2016scratch/shaman2016scratch.github.io',
            commit: 'main',
            path: '/tools/components/testOS/testScript.js'
          }
        }, {
          type: 'programming language',
          name: 'test.js',
          src: {
            type: 'githubRepo',
            fileType: 'javascript',
            repo: 'shaman2016scratch/shaman2016scratch.github.io',
            commit: 'main',
            path: '/tools/components/testOS/testjs.js'
          }
        }
      ]
    }
  },
  cloud: {
    1: {},
    2: {},
    3: {}
  },
  desktop: {
    apps: {
      myDivace: {
        type: 'programm',
        name: 'My Divace',
        src: {
          type: 'githubRepo',
          fileType: 'javascript',
          repo: 'shaman2016scratch/shaman2016scratch.github.io',
          commit: 'main',
          path: '/tools/components/testOS/apps/myDivace.js'
        }
      },
      settings: {
        type: 'programm',
        name: 'Settings',
        src: {
          type: 'githubRepo',
          fileType: 'javascript',
          repo: 'shaman2016scratch/shaman2016scratch.github.io',
          commit: 'main',
          path: '/tools/components/testOS/apps/settings.js'
        }
      },
      fs: {
        type: 'programm',
        name: 'testOS Files',
        src: {
          type: 'githubRepo',
          fileType: 'javascript',
          repo: 'shaman2016scratch/shaman2016scratch.github.io',
          commit: 'main',
          path: '/tools/components/testOS/apps/fs.js'
        }
      },
      terminal: {
        type: 'programm',
        name: 'Terminal',
        src: {
          type: 'githubRepo',
          fileType: 'javascript',
          repo: 'shaman2016scratch/shaman2016scratch.github.io',
          commit: 'main',
          path: '/tools/components/testOS/apps/terminal.js'
        }
      }
    }
  }
}
let packages = {}
let packageFunctions = {}
let user = null
async function start() {
  try {
    user = null
    root.innerHTML = `
      <h1>Please, wait. System loading</h1>
    `
    await genegatePackage()
    root.innerHTML = `
      <h1>Please, wait. System starting</h1>
    `
    let accounts = `<h2>Accounts</h2>`
    for(let i = 0; i < data.users.length; i++) {
      let userLoginInfo = data.userData[data.users[i]]
      accounts += `
        <p onclick='login("${data.users[i]}")'>${userLoginInfo.name}</p>
      `
    }
    accounts += `
      <br><button onclick='createAcc()'>Create Account</button>
    `
    root.innerHTML = `
      <h1>System Started!</h1>
      <div id='login'>${accounts}</div>
    `
  } catch (error) {
    console.error('ERROR DATA')
    console.error(error)
    console.log('Please report of error')
    root.innerHTML = `
      <h1>ERROR</h1>
      <p>${error.message}</p>
      <p>Open browser console for information of error</p>
      <p>Please report of error <a href='https://scratch.mit.edu/users/SHAMAN2016'>in scratch</a> <a href='https://github.com/shaman2016scratch/shaman2016scratch.github.io/issues'>or github</a></p>
    `
  }
}
function login(userId) {
  let userLoginInfo = data.userData[userId]
  if(userLoginInfo.password === null) {
    user = userId
    openDesktop()
  } else {
    let loginMenu = document.getElementById('login')
    loginMenu.innerHTML = `
      <h3>Login</h3>
      <label for='pass'>Password</label>
      <input id='pass'>
      <button onclick='loginAcc("${userId}", document.getElementById("pass").value)'>LOGIN</button>
    `
  }
}
function loginAcc(userId, pass) {
  let userLoginInfo = data.userData[userId]
  if(userLoginInfo.password === pass) {
    user = userId
    openDesktop()
  } else {
    let loginMenu = document.getElementById('login')
    loginMenu.innerHTML += `
      <p>The password is incorrect</p>
    `
  }
}
async function openDesktop() {
  const keysDesktop = Object.keys(data.desktop.apps)
  let listDesktop = []
  async function getApps() {
    for (let i = 0; i < keysDesktop.length; i++) {
      listDesktop.push(data.desktop.apps[keysDesktop[i]])
    }
  }
  await getApps()
  function genDesktop() {
    function getContent(i) {
      if (!listDesktop[i]) {
        return `
          <td></td>
        `
      } else {
        return `
          <td class='message' onclick='open("openDesktop://app/", {
            params: ${i},
            headers: {},
            body: {}
          })'>
            <img src='${listDesktop[i].icon || 'https://i.pinimg.com/originals/b9/57/c0/b957c0baaa2d905fb933314f812eecd7.jpg'}' style='margin: auto' height='45' width='45'>
            <h4>${listDesktop[i].name}</h4>
          </td>
        `
      }
    }
    let notHtml = `
      <table>
        <tbody>
          <tr>
            ${getContent(0)}
            ${getContent(1)}
            ${getContent(2)}
            ${getContent(3)}
            ${getContent(4)}
            ${getContent(5)}
          </tr>
          <tr>
            ${getContent(6)}
            ${getContent(7)}
            ${getContent(8)}
            ${getContent(9)}
            ${getContent(10)}
            ${getContent(11)}
          </tr>
          <tr>
            ${getContent(12)}
            ${getContent(13)}
            ${getContent(14)}
            ${getContent(15)}
            ${getContent(16)}
            ${getContent(17)}
          </tr>
        </tbody>
      </table>
      <table class='message'>
        <tbody id='panel'>
          <tr>
            <th onclick='openPusk()'>
              Test8787OS
            </th>
          </tr>
        </tbody>
      </table>
    `
    rendDesktop(notHtml)
  }
  genDesktop()
  function rendDesktop(content) {
    root.innerHTML = content
  }
}
async function genegatePackage() {
  try {
    let localfuncPackage = {
      name: data.system.metadata.name,
      version: data.system.metadata.version,
      license: 'MIT',
      depends: []
    }
    let localPackageFunctions = {}
    for(let i = 0; i < data.system.components.list.length; i++) {
      if (data.system.components.list[i].src.type === 'githubRepo') {
        const resolveUrl = `https://raw.githubusercontent.com/${data.system.components.list[i].src.repo}/${data.system.components.list[i].src.commit}${data.system.components.list[i].src.path}`
        localfuncPackage.depends.push({
          name: data.system.components.list[i].name,
          type: data.system.components.list[i].type,
          resolve: resolveUrl,
          version: data.system.components.list[i].src.commit
        })
        const reqPackage = await fetch(resolveUrl)
        const resPackage = await reqPackage.text()
        localPackageFunctions[data.system.components.list[i].name] = new Function(['arguments'], resPackage)
      } else {
        localfuncPackage.depends.push({
          name: data.system.components.list[i].name,
          type: data.system.components.list[i].type,
          resolve: data.system.components.list[i].src.link,
          version: data.system.components.list[i].src.version
        })
        const reqPackage = await fetch(data.system.components.list[i].src.link)
        const resPackage = await reqPackage.text()
      }
    }
    packages = localfuncPackage
  } catch (error) {
    console.error('ERROR DATA')
    console.error(error)
    console.log('Please report of error')
    root.innerHTML = `
      <h1>ERROR</h1>
      <p>${error.message}</p>
      <p>Open browser console for information of error</p>
      <p>Please report of error <a href='https://scratch.mit.edu/users/SHAMAN2016'>in scratch</a> <a href='https://github.com/shaman2016scratch/shaman2016scratch.github.io/issues'>or github</a></p>
    `
  }
}
async function request(protocol, url, params, method) {
  let splitUrl = url.split('/')
  let domain = splitUrl[0]
  let pathNotDomain = url.split(domain)[1]
  let splitPathNotDomain = pathNotDomain.split('/')
  if (protocol === 'openDesktop') {
    if (url === 'app/') {
      if (method === 'run') {
        let relsove = ''
        if (data.desktop.apps[params].src.type === 'githubRepo') {
          relsove = `https://raw.githubusercontent.com/${data.desktop.apps[params].src.repo}/${data.desktop.apps[params].src.commit}${data.desktop.apps[params].src.path}`
        }
        if (data.desktop.apps[params].src.fileType === 'javascript') {
          root.innerHTML = `
            <h2>App <button onclick='openDesktop()'>X</button></h2>
            <div class='messages' id='windows'>
              <div class='message' id='window_main'>
                Error
              </div>
              <div class='message' id='console'>
                <h2>App console</h2>
                <p>Program openned. ${new Date(new Date())}</p>
              </div>
            </div>
          `
          try {
            const req = await fetch(relsove)
            const res = await req.text()
            root.innerHTML += `
              <script src='${relsove}'></script>
            `
          } catch (error) {
            root.innerHTML = `
              <p>Error: ${error.message}</p>
              <button onclick='openDesktop()'>Open desktop</button>
            `
            console.error(error)
          }
        }
      } else {
        console.error('Method is not supported')
        return 'Method is not supported'
      }
    }
  }
}
async function open(url, params) {
  let protocolSplit = url.split('://')
  let protocol = protocolSplit[0]
  let path = protocolSplit[1]
  let splitPath = path.split('/')
  let domain = splitPath[0]
  let pathNotDomain = path.split(domain)[1]
  let splitPathNotDomain = pathNotDomain.split('/')
  if (protocol === 'openDesktop') {
    if (path === '') {
      openDesktop()
    } else if (path === 'app/') {
      await request(protocol, path, params, 'run')
    }
  }
}
function createAcc() {
  let loginMenu = document.getElementById('login')
  loginMenu.innerHTML = `
    <h3>Create Account In System</h3>
    <label for='userid'>User Id</label>
    <input id='userid' type='text' placeholder="Id">
    <br><label for='name'>Name</label>
    <input id='name' type='text' placeholder="Cool Account 384">
    <br><label for='password'>Password</label>
    <input id='password' type='password' placeholder="F0DWh39" minlength='4'>
    <br><input type='radio' id='usage'>Usage password in login?
    <br><button onclick='createAccount(document.getElementById("userid").value, document.getElementById("name").value, document.getElementById("password").value, document.getElementById("usage").checked)'>Create</button>
  `
}
function createAccount(id, name, pass, isUsageLog) {
  if (!data.userData[id]) {
    data.users.push(id)
    if (isUsageLog) {
      data.userData[id] = {
        name,
        password: pass,
        pass
      }
    } else {
      data.userData[id] = {
        name,
        password: null,
        pass
      }
    }
    openDesktop()
  } else {
    console.error('This account exists')
    root.innerHTML = `
      <p>Error: This account exists</p>
    `
  }
}
window.appSdk = {}
window.appSdk = {
  windows: {
    getMain: function() {
      return document.getElementById('window_main')
    },
    get: function(id) {
      return document.getElementById(`window_${id}`)
    },
    create: function(id) {
      document.getElementById('windows').innerHTML += `
        <div id='window_${id}'>
          <p>Error</p>
        </div>
      `
    },
    delete: function(id) {
      document.getElementById(`window_${id}`).innerHTML = ''
    }
  },
  windowObject: {
    gen: function(data) {
      return {
        set: new Function(['content'], `
          let data = ${data}
          data.innerHTML = content
        `),
        content: data.innerHTML,
        updateId: new Function(['id'], `
          let data = ${data}
          data.id = id
        `)
      }
    }
  },
  windowActions: {
    set: function(content, windowObj) {
      windowObj.innerHTML = content
    },
    content: function(windowObj) {
      return windowObj.innerHTML
    },
    updateId: function(id, windowObj) {
      windowObj.id = id
    }
  },
  console: {}
}
function openPusk() {
  let panel = document.getElementById('panel')
  panel.innerHTML = `
    <tr>
      <th>
        <p onclick='start()'>Перезагрузка</p>
      </th>
    </tr>
    ${panel.innerHTML}
  `
}
document.addEventListener('DOMContentLoaded', (e) => {
  start()
})
