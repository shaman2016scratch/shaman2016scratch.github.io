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
        this.binnums = [0,1]
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
              blockType: Scratch.BlockType.REPORTER,
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
            }, {
              blockType: Scratch.BlockType.LABEL,
              text: 'binary numbers'
            }, {
              opcode: "binlist",
              blockType: Scratch.BlockType.ARRAY,
              text: "bin numbers",
              arguments: {}
            }
          ],
        };
      }
      n10toOtherNum(args) {
        return args.num.toString(args.sym)
      }
      hexlist() {
        return this.hexnums
      }
      hexcodeof(args) {
        return args.num.toString(16)
      }
      binlist() {
        return this.binnums
      }
    }
    Scratch.extensions.register(new numsPlusBypolzovatel8787());
  })(Scratch);
