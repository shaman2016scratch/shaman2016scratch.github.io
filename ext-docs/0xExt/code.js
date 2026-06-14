// Name: Hexadecimal numbers
// ID: hexnumBypolzovatel8787
// Description: 
// By: polzovatel_8787 <https://dashblocks.github.io/#7>
// License: MPL-2.0

(function (Scratch) {

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }
  constructor () {
    this.hexnums = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  }

    class HexnumBypolzovatel8787 {
      getInfo() {
        return {
          id: "hexnumBypolzovatel8787",
          name: "Hexadecimal numbers",
          docsURL: "https://shaman2016scratch.github.io/ext-docs/0xExt/",
          color1: "#005c10",
          blocks: [
            {
              opcode: "hexlist",
              blockType: Scratch.BlockType.ARRAY,
              text: "Hex numbers",
              arguments: {}
            }, {
              opcode: "hexcodeof",
              blockType: Scratch.BlockType.REPORTER,
              text: "Hex code of [num]",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }
          ],
        };
      }
      hexlist() {
        return this.hexnums
      }
      hexcodeof(args) {
        return args.num.toString(16)
      }
    }
    Scratch.extensions.register(new HexnumBypolzovatel8787());
  })(Scratch);
