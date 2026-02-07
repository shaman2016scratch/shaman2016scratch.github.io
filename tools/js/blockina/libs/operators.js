let lib = {
  "name": {
    "en": "Operators",
    "ru": "Операторы"
  },
  "id": "operators",
  "icon": "https://shaman2016scratch.github.io/tools/blockina/exts/operators.svg",
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
      "id": "plus",
      "type": blockina.blockType.REPORTER,
      "text": [1, "text", 2],
      "elements": {
        "text": { "type": "txt", "text": "+" },
        1: { "type": "inp", "text": 5 },
        2: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return args[1]text + args[2]text }
    }, {
      "id": "minus",
      "type": blockina.blockType.REPORTER,
      "text": [1, "text", 2],
      "elements": {
        "text": { "type": "txt", "text": "-" },
        1: { "type": "inp", "text": 5 },
        2: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return args[1]text - args[2]text }
    }, {
      "id": "multiply",
      "type": blockina.blockType.REPORTER,
      "text": [1, "text", 2],
      "elements": {
        "text": { "type": "txt", "text": "*" },
        1: { "type": "inp", "text": 5 },
        2: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return args[1]text * args[2]text }
    }, {
      "id": "razdelit",
      "type": blockina.blockType.REPORTER,
      "text": [1, "text", 2],
      "elements": {
        "text": { "type": "txt", "text": "÷" },
        1: { "type": "inp", "text": 5 },
        2: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return args[1]text / args[2]text }
    }, {
      "id": "mod",
      "type": blockina.blockType.REPORTER,
      "text": [1, "text", 2],
      "elements": {
        "text": { "type": "txt", "text": "mod" },
        1: { "type": "inp", "text": 5 },
        2: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return args[1]text % args[2]text }
    }, {
      "id": "stepen",
      "type": blockina.blockType.REPORTER,
      "text": [1, "text", 2],
      "elements": {
        "text": { "type": "txt", "text": "^" },
        1: { "type": "inp", "text": 5 },
        2: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return args[1]text ** args[2]text }
    }, {
      "id": "typeof",
      "type": blockina.blockType.REPORTER,
      "text": ["text", 1],
      "elements": {
        "text": { "type": "txt", "text": "Type" },
        1: { "type": "inp", "text": 5 }
      },
      "func": function(args) { return typeof args[1]text }
    }
  ]
}
