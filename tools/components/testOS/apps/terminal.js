if (!window.terminalInstalled) {
  window.terminal = {}
  window.terminal.import = function(imdata) {}
  window.testOSterminal = {}
  window.terminal.importDepends = await function() {
    const installDepend = new Function(['params'], `async function asyncInstall() { ${await (await fetch('https://raw.githubusercontent.com/shaman2016scratch/shaman2016scrqtch.github.io/main/tools/components/testOS/terminal/pkg.js')).text()} }; asyncInstall()`)
    window.terminal.depend = {}
    window.terminal.depend['@terminal/logic'] = await installDepend({
      pkg: '@terminal/logic'
    })
  }
  window.terminal.importDepends()
  window.terminalInstalled = true
  alert('terminal installed. restart terminal')
}
