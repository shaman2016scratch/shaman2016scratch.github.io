let screen = document.getElementById("content")
let result;
async function getInfo() {
  result = await fetch("https://api-shaman2016.vercel.app/getMe")
  result = await result.json()
  result = result.result
}
async function updateInfo() {
  await getInfo()
  screen.innerHTML = `
    <h1>Ip: ${result.ip}</h1>
    <h2>User Agent: ${result["user-agent"]}</h2>
    <h3>Language: ${result.headers["x-vercel-ip-country"]}</h3>
    <h3>City: ${result.headers["x-vercel-ip-city"]}</h3>
    <h3>Country: ${result.headers["x-vercel-ip-country"]}</h3>
    <h3>Real IP: ${result.headers["x-real-ip"]}</h3>
    <h3>Platform: ${result.headers["sec-ch-ua-platform"]}</h3>
    <h3>Timezone: ${result.headers["x-vercel-ip-timezone"]}</h3>
    <h3>Origin: ${result.headers["origin"]}</h3>
    <h3>Continent: ${result.headers["x-vercel-ip-continent"]}</h3>
  `
  let os = ""
  let i = result["user-agent"].split("(")[1]
  i = i.split(")")[0]
}
updateInfo()
