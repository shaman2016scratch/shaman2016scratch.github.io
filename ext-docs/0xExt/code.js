// Name: Numbers+
// ID: numsPlusBypolzovatel8787
// Description: 
// By: polzovatel_8787 <https://dashblocks.github.io/#7>
// License: MPL-2.0

(function (Scratch) {

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class numsPlusBypolzovatel8787 {
      constructor () {
        this.hexnums = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
      }
      getInfo() {
        return {
          id: "numsPlusBypolzovatel8787",
          name: "Numbers+",
          docsURL: "https://shaman2016scratch.github.io/ext-docs/0xExt/",
          color1: "#005c10",
          blocks: [
            {
              opcode: "n10toOtherNum",
              blockType: Scratch.BlockType.ARRAY,
              text: "number [num] using [sym] characters",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                },
                sym: {
                  defaultValue: 2,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }, {
              blockType: Scratch.BlockType.LABEL,
              text: 'hexadecimal numbers'
            }, {
              opcode: "hexlist",
              blockType: Scratch.BlockType.ARRAY,
              text: "hex numbers",
              arguments: {}
            }, {
              opcode: "hexcodeof",
              blockType: Scratch.BlockType.REPORTER,
              text: "hex code of [num]",
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
      n10toOtherNum() {
        return args.num.toString(args.sym)
      }
      hexlist() {
        return this.hexnums
      }
      hexcodeof(args) {
        return args.num.toString(16)
      }
    }
    Scratch.extensions.register(new numsPlusBypolzovatel8787());
  })(Scratch);
