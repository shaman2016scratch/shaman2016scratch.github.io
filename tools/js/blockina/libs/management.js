let lib = {
  "name": {
    "en": "Management",
    "ru": "Управление"
  },
  "id": "management",
  "icon": "https://shaman2016scratch.github.io/tools/blockina/exts/manage.svg",
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
        "text": { "type": "txt", "text": "wait" },
        "input": { "type": "inp", "text": 5 }
      },
      "func": async function(args) { await setTimeout(() => {}, args.input.text*1000) }
    }
  ]
}
