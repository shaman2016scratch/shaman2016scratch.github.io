// Name: sosirsOS Tools
// ID: sosirsostoolsShaman2016
// Description: 
// By: SHAMAN2016 <https://scratch.mit.edu/users/SHAMAN2016/>
// License: MPL-2.0

(function (Scratch) {

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class SosirsostoolsShaman2016 {
      getInfo() {
        return {
          id: "sosirsostoolsShaman2016",
          name: "sosirsOS Tools",
          docsURL: "https://shaman2016scratch.github.io/ext-docs/sosirsOSTools/",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "jsontosoon",
              blockType: Scratch.BlockType.REPORTER,
              text: "JSON OBJECT [JSON] to SOON OBJECT",
              arguments: {
                JSON: {
                  type: Scratch.ArgumentType.OBJECT,
                  defaultValue: {}
                }
              }
            }, {
              opcode: "soontojson",
              blockType: Scratch.BlockType.OBJECT,
              text: "SOON OBJECT [SOON] to JSON OBJECT",
              arguments: {
                SOON: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ''
                }
              }
            }
          ],
        };
      }
      jsontosoon(args) { let result = ''; const ArrayFromObject = Object.keys(args.JSON); let i = 0; for (i = 0; i < ArrayFromObject.length-1; i++) { result += `${ArrayFromObject[i]}=${args.JSON[ArrayFromObject[i]]}&`; }; i++; result += `${ArrayFromObject[i]}=${args.JSON[ArrayFromObject[i]]}`; return result }
      soontojson(args) { let result = {}; const allElements = (args.SOON).split('&'); let i = 0; for (i = 0; i < allElements.length-1; i++) { const keySOON = allElements[i].split('=')[0]; const valueSOON = allElements[i].split('=')[1]; result[keySOON] = valueSOON }; i++; const keySOON = allElements[i].split('=')[0]; const valueSOON = allElements[i].split('=')[1]; result[keySOON] = valueSOON; return result }
    }
    Scratch.extensions.register(new SosirsostoolsShaman2016());
  })(Scratch);
