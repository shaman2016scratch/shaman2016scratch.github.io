// Name: Request Information
// ID: reqInfoBy8787
// Description: An extension that receives user data and their device
// By: SHAMAN2016 <https://scratch.mit.edu/users/SHAMAN2016/>
// License: MPL-2.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }
  async function getReq() {
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
            }
          ],
        };
      }
async function getReq() {
  let a = await fetch("https://api-shaman2016.vercel.app/req")
  a = await a.json()
  return a
}
async getUA(args) {
  return await getReq().result["user-agent"]
}
async getIP(args) {
  return await getReq().result["ip"]
}
    }
    Scratch.extensions.register(new reqInfoBy8787());
  })(Scratch);
