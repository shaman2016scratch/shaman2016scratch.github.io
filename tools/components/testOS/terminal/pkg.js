const installDepend = new Function(['params'], await (await fetch('https://raw.githubusercontent.com/shaman2016scratch/shaman2016scrqtch.github.io/main/tools/components/testOS/terminal/pkg.js')).text())
let out = ''
if (params.pkg === '@terminal/logic') {
  let myDepends = {}
  myDepends['@terminal/parser'] = new Function(['params'], installDepend({
    pkg: '@terminal/parser'
  }))
  myDepends['@terminal/runner'] = new Function(['params'], installDepend({
    pkg: '@terminal/runner'
  }))
} else if (params.pkg === '@terminal/parser') {
  let myDepends = {}
} else if (params.pkg === '@terminal/runner') {
  let myDepends = {}
}

return out
