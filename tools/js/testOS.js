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
  filesystem: {},
  system: {
    metadata: {
      name: 'Test8787OS',
      version: '0.0.1 alpha',
      buildId: 1
    },
    components: {
      list: [],
      metadata: {}
    }
  },
  cloud: {
    1: {},
    2: {},
    3: {}
  }
}
async function start() {
  try {
    root.innerHTML = `
      <h1>Please, wait. System loading</h1>
    `
    root.innerHTML = `
      <h1>System starting</h1>
    `
    root.innerHTML = `
      <h1>System Started!</h1>
    `
  } catch (error) {
    console.error('ERROR DATA')
    console.error(error)
    console.log('Please report of error')
    root.innerHTML = `
      <h1>ERROR</h1>
      <p>${error.message}</p>
      <p>Open browser console for information of error</p>
      <p>Please report of error <a href='https://scratch.mit.edu/users/SHAMAN2016'>in scratch</a> <a href='https://github.com/shaman2016scratch/shaman2016scratch.github.io/'>or github</a></p>
    `
  }
}
document.addEventListener('DOMContentLoaded', (e) => {
  start()
})
