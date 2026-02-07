let lib = {
  "name": {
    "en": "Terminal",
    "ru": "Терминал"
  },
  "id": "terminal",
  "icon": "https://shaman2016scratch.github.io/tools/blockina/exts/example.svg",
  "creators": [
    {
      "name": "SHAMAN2016",
      "links": {
        "github": "https://github.com/shaman2016scratch/",
        "scratch": "https://scratch.mit.edu/users/shaman2016/"
      }
    }
  ],
  "docs": "Not",
  "blocks": [
    {
      "id": "send",
      "type": blockina.blockType.COMMAND,
      "text": ["text", "input"],
      "elements": {
        "text": { "type": "txt", "text": "print" },
        "input": { "type": "inp", "text": "Hello, World!" }
      },
      "func": function(args) { termHelp.logs.push({ "type": "log", "text": args.input.text }) }
    }, {
      "id": "clear"
      "type": blockina.blockType.COMMAND,
      "text": ["text"],
      "elements": {
        "text": { "type": "txt", "text": "Clear" }
      },
      "func": function(args) { termHelp.logs = [] }
    }
  ]
}
