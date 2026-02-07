let lib = {
  "name": {
    "en": "Events",
    "ru": "События"
  },
  "id": "events",
  "icon": "https://shaman2016scratch.github.io/tools/blockina/exts/events.svg",
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
      "type": blockina.blockType.HAT,
      "text": ["text"],
      "elements": {
        "text": { "type": "txt", "text": "When the project is launched" }
      },
      "func": function(args) { return events.sys.projStart }
    }
  ]
}
