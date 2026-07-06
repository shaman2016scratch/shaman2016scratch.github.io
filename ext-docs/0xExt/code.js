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
              opcode: "otherNumTo10",
              blockType: Scratch.BlockType.REPORTER,
              text: "10-number from [number] using [sym]",
              arguments: {
                num: {
                  defaultValue: 11111111,
                  type: Scratch.ArgumentType.STRING,
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
              opcode: "hexcodeoflength",
              blockType: Scratch.BlockType.REPORTER,
              text: "hex code of length [length], number [num]",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                },
                length: {
                  defaultValue: 2,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }, {
              opcode: "hex0xcodeof",
              blockType: Scratch.BlockType.REPORTER,
              text: "hex code of [num] with start 0x",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }, {
              opcode: "hex0xcodeoflength",
              blockType: Scratch.BlockType.REPORTER,
              text: "hex code of length [length], number [num] with start 0x",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                },
                length: {
                  defaultValue: 2,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }, {
              opcode: "numberofhex",
              blockType: Scratch.BlockType.REPORTER,
              text: "number of hex code [num]",
              arguments: {
                num: {
                  defaultValue: '0xff',
                  type: Scratch.ArgumentType.STRING,
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
            }, {
              opcode: "bincodeof",
              blockType: Scratch.BlockType.REPORTER,
              text: "bin code of [num]",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }, {
              opcode: "bincodeoflength",
              blockType: Scratch.BlockType.REPORTER,
              text: "bin code of length [length], number [num]",
              arguments: {
                num: {
                  defaultValue: 255,
                  type: Scratch.ArgumentType.NUMBER,
                },
                length: {
                  defaultValue: 8,
                  type: Scratch.ArgumentType.NUMBER,
                }
              }
            }
          ],
        };
      }
      n10toOtherNum(args) {
        return args.num.toString(args.sym)
      }
      otherNumTo10(args) {
        return parseInt(args.num, args.sym)
      }
      hexlist() {
        return this.hexnums
      }
      hexcodeof(args) {
        return args.num.toString(16)
      }
      hexcodeoflength(args) {
        return args.num.toString(16).padStart(args.length, '0')
      }
      hex0xcodeof(args) {
        return `0x${args.num.toString(16)}`
      }
      hex0xcodeoflength(args) {
        return `0x${args.num.toString(16).padStart(args.length, '0')}`
      }
      numberofhex(args) {
        return +args.num
      }
      binlist() {
        return this.binnums
      }
      bincodeof(args) {
        return args.num.toString(2)
      }
      bincodeoflength(args) {
        return args.num.toString(2).padStart(args.length, '0')
      }
    }
    Scratch.extensions.register(new numsPlusBypolzovatel8787());
  })(Scratch);
