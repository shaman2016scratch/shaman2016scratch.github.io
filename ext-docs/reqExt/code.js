// Name: Request Information
// ID: reqInfoBy8787
// Description: An extension that receives user data and their device
// By: SHAMAN2016 <https://scratch.mit.edu/users/SHAMAN2016/>
// License: MPL-2.0

(function (Scratch) {

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }
  async function getRequ() {
    let a = await fetch("https://api-shaman2016.vercel.app/req")
    a = await a.json()
    return a
  }

    class reqInfoBy8787 {
      getInfo() {
        return {
          id: "reqInfoBy8787",
          name: "Request Information",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "getUA",
              blockType: Scratch.BlockType.REPORTER,
              text: "get User Agent",
              arguments: {}
            }, {
              opcode: "getIP",
              blockType: Scratch.BlockType.REPORTER,
              text: "get Internet Protocol",
              arguments: {}
            }, {
              opcode: "getReq",
              blockType: Scratch.BlockType.REPORTER,
              text: "get Request",
              arguments: {}
            }, {
              opcode: "getCity",
              blockType: Scratch.BlockType.REPORTER,
              text: "get City",
              arguments: {}
            }, {
              opcode: "getCountry",
              blockType: Scratch.BlockType.REPORTER,
              text: "get Country",
              arguments: {}
            }, {
              opcode: "getLang",
              blockType: Scratch.BlockType.REPORTER,
              text: "get Language",
              arguments: {}
            }, {
              opcode: "getPlatform",
              blockType: Scratch.BlockType.REPORTER,
              text: "get Platform",
              arguments: {}
            }, {
              opcode: "getTime",
              blockType: Scratch.BlockType.REPORTER,
              text: "get Timezone",
              arguments: {}
            }
          ],
        };
      }
async getReq() {
  let a = await fetch("https://api-shaman2016.vercel.app/req")
  a = await a.json()
  return a
}
async getUA(args) {
  let a = await getRequ()
  return a.result["user-agent"]
}
async getIP(args) {
  let a = await getRequ()
  return a.result["ip"]
}
async getCity(args) {
  let a = await getRequ()
  return a.result.headers["x-vercel-ip-city"]
}
async getCountry(args) {
  let a = await getRequ()
  return a.result.headers["x-vercel-ip-country"]
}
async getLang() {
  let a = await getRequ)
  return a.result.headers["accept-language"]
}
async getPlatform() {
  let a = await getRequ()
  return a.result.headers["sec-ch-ua-platform"]
}
async getgetTime() {
  let a = await getRequ()
  return a.result.headers["x-vercel-ip-timezone"]
}
    }
    Scratch.extensions.register(new reqInfoBy8787());
  })(Scratch);
