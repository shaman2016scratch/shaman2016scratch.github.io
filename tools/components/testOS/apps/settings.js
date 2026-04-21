window.appSdk.console.log('Settings started', 'settings.logger')

window.settingsOS = {}

window.settingsOS.import = async function(package, module, params) {
  const pkgReq = await (await fetch(`https://raw.githubusercontent.com/shaman2016scratch/shaman2016scratch.github.io/${window.settingsOS.pkgVersion}/tools/components/testOS/settingsPkg.js`)).text()
  const pkg = new Function(['params'], pkgReq)
  return await pkg(params.data, params.version).packages[package].modules[module]()
}
window.settingsOS.pkgVersion = 'main'
