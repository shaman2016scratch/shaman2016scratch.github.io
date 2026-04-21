const installDepend = new Function(['params'], `async function asyncInstall() { ${await (await fetch('https://raw.githubusercontent.com/shaman2016scratch/shaman2016scrqtch.github.io/main/tools/components/testOS/terminal/pkg.js')).text()} }; await asyncInstall()`)
let out = ''
if (params.pkg === '@terminal/logic') {
  let myDepends = {}
  myDepends['@terminal/parser'] = new Function(['params'], await installDepend({
    pkg: '@terminal/parser'
  }))
  myDepends['@terminal/runner'] = new Function(['params'], await installDepend({
    pkg: '@terminal/runner'
  }))
  out = {
    run: async function(code) {
      return (await myDepends['@terminal/runner'](await myDepends['@terminal/parser']().parse(code)))
    }
  }
} else if (params.pkg === '@terminal/parser') {
  let myDepends = {}
  out = function() {
    return {
      parse: async function(code) {}
    }
  }
} else if (params.pkg === '@terminal/runner') {
  let myDepends = {}
  out = async function(code) {}
}

return out
