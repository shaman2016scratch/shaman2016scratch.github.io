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
    <p>Session Id: ${result.headers["x-invocation-id"]}</p>
    <p>Language: ${result.headers["accept-language"]}</p>
    <p>City: ${result.headers["x-vercel-ip-city"]}</p>
    <p>Country: ${result.headers["x-vercel-ip-country"]}</p>
    <p>Real IP: ${result.headers["x-real-ip"]}</p>
    <p>Platform: ${result.headers["sec-ch-ua-platform"]}</p>
    <p>Timezone: ${result.headers["x-vercel-ip-timezone"]}</p>
    <p>Origin: ${result.headers["origin"]}</p>
    <p>Continent: ${result.headers["x-vercel-ip-continent"]}</p>
  `
  let os = ""
  let i = result["user-agent"].split("(")[1]
  i = i.split(")")[0]
  i = i.split("; ")
  if (i[0] === "Linux") {
    if (i[1].split(" ")[0] === "Android") {
      if (i[2] === "HarmonyOS") {
        os = "HarmonyOS"
      } else {
        os = "Android"
      }
    } else {
      os = "Linux"
    }
  } else if (i[0].split(" ")[0] === "Windows") {
    os = "Windows"
  } else {
    os = i[0]
  }
  screen.innerHTML += `
    <p>OS: ${os}</p>
  `
}
updateInfo()
