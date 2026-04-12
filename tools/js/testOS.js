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
            repo: 'shaman2016scratch/shaman2016.github.io',
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
          repo: 'shaman2016scratch/shaman2016.github.io',
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
          repo: 'shaman2016scratch/shaman2016.github.io',
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
          repo: 'shaman2016scratch/shaman2016.github.io',
          commit: 'main',
          path: '/tools/components/testOS/apps/fs.js'
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
    await generatePackage()
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
async function openDesktop() {}
document.addEventListener('DOMContentLoaded', (e) => {
  start()
})
async function genegatePackage() {
  try {
    let localfuncPackage = {
      name: data.system.metadata.name,
      version: data.system.metadata.version,
      license: 'MIT',
      depends: []
    }
    for(let i = 0; i < data.system.components.list.length; i++) {}
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
