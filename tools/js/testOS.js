let root = document.body
let data = {
  apps: [],
  appData: {},
  users: [
    'test user'
  ],
  userData: {
    'test user': {
      name: 'test',
      password: null
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
            <img src='${listDesktop[i].icon || 'https://i.pinimg.com/originals/b9/57/c0/b957c0baaa2d905fb933314f812eecd7.jpg'}' style='margin: auto'>
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
      if (method === 'run') {} else {
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
document.addEventListener('DOMContentLoaded', (e) => {
  start()
})
