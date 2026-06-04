// Name: Translations
// ID: polzovatel8787translations
// Description: An extension for translating something in your project.
// By: polzovatel_8787 <https://dashblocks.github.io/scratch-gui/user#7>
// License: MPL-2.0

(function (Scratch) {

  constructor () {
    this.userLanguage = 'en'
    this.defaultLanguage = 'en'
    this.translations = {
      ar: {},
      ru: {}
    }
    this.messages = {}
  }

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed")
  }

    class polzovatel8787translations {
      getInfo() {
        return {
          id: "polzovatel8787translations",
          name: "Translations",
          docsURL: "https://shaman2016scratch.github.io/ext-docs/translations/",
          color1: "#ff8f4d",
          blocks: [
            {
              opcode: "newMessage",
              blockType: Scratch.BlockType.COMMAND,
              text: "new message of id [idtrans], default value [text]",
              arguments: {
                idtrans: {
                  defaultValue: 'project.mainPage.title',
                  type: Scratch.ArgumentType.STRING,
                },
                text: {
                  defaultValue: 'Main page of my project',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "newTranslate",
              blockType: Scratch.BlockType.COMMAND,
              text: "new translate of id [idtrans], text [text], language [language]",
              arguments: {
                idtrans: {
                  defaultValue: 'project.mainPage.title',
                  type: Scratch.ArgumentType.STRING,
                },
                text: {
                  defaultValue: 'Main page of my project',
                  type: Scratch.ArgumentType.STRING,
                },
                language: {
                  defaultValue: 'ru',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "translate",
              blockType: Scratch.BlockType.REPORTER,
              text: "translate [idtrans]",
              arguments: {
                idtrans: {
                  defaultValue: 'project.mainPage.title',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "registerLanguage",
              blockType: Scratch.BlockType.COMMAND,
              text: "add language [language]",
              arguments: {
                language: {
                  defaultValue: 'de',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "isLanguage",
              blockType: Scratch.BlockType.BOOLEAN,
              text: "language [language] is exits?",
              arguments: {
                language: {
                  defaultValue: 'de',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "setBaseLanguage",
              blockType: Scratch.BlockType.COMMAND,
              text: "set default language of [language]",
              arguments: {
                language: {
                  defaultValue: 'ru',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "setLanguage",
              blockType: Scratch.BlockType.COMMAND,
              text: "set language of [language]",
              arguments: {
                language: {
                  defaultValue: 'ru',
                  type: Scratch.ArgumentType.STRING,
                }
              }
            }, {
              opcode: "getLanguage",
              blockType: Scratch.BlockType.REPORTER,
              text: "get language",
              arguments: {}
            }, {
              opcode: "getBaseLanguage",
              blockType: Scratch.BlockType.REPORTER,
              text: "get default language",
              arguments: {}
            }, {
              opcode: "export",
              blockType: Scratch.BlockType.OBJECT,
              text: "export",
              arguments: {}
            }, {
              opcode: "import",
              blockType: Scratch.BlockType.COMMAND,
              text: "import [data]",
              arguments: {
                data: {
                  defaultValue: {},
                  type: Scratch.ArgumentType.OBJECT,
                }
              }
            }
          ],
        };
      }
      newTranslate(args) {
        this.translations[args.language][args.idtrans] = args.text
      }
      newMessage(args) {
        this.messages[args.idtrans] = args.text
      }
      translate(args) {
        const defaultValue = this.messages[args.idtrans]
        let translation = defaultValue
        if (this.userLanguage !== this.defaultLanguage) {
          translation = this.translations[this.userLanguage][args.idtrans]
        }
      }
      registerLanguage(args) {
        this.translations[args.language] = {}
      }
      isLanguage(args) {
        return !(!this.translations[args.language])
      }
      setBaseLanguage(args) {
        this.defaultLanguage = args.language
      }
      setLanguage(args) {
        this.userLanguage = args.language
      }
      getLanguage() {
        return this.userLanguage
      }
      getBaseLanguage() {
        return this.defaultLanguage
      }
      export() {
        const {
          userLanguage,
          defaultLanguage,
          messages,
          translations
        } = this
        return {
          userLanguage,
          defaultLanguage,
          messages,
          translations
        }
      }
      import(args) {
        this.userLanguage = args.data.userLanguage
        this.defaultLanguage = args.data.defaultLanguage
        this.messages = args.data.messages
        this.translations = args.data.translations
      }
    }
    Scratch.extensions.register(new polzovatel8787translations());
  })(Scratch);
