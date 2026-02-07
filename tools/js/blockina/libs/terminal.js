let lib = {
  "name": {
    "en": "Example Library",
    "ru": "Пример Библиотеки"
  },
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
      "type": blockina.blockType.COMMAND,
      "text": ["text", "input"],
      "elements": {
        "text": { "type": "txt", "text": "command" },
        "input": { "type": "inp", "text": "text, text, texter" }
      },
      "func": function(args) { console.log(`hi, text: ${args.input.text}`) }
    }
  ]
}
