let lib = {
  "name": {
    "en": "Data",
    "ru": "Данные"
  },
  "id": "data",
  "icon": "https://shaman2016scratch.github.io/tools/blockina/exts/data.svg",
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
      "type": blockina.blockType.LABEL,
      "text": [],
      "elements": {
        "text": "Variables"
      }
    },
    {
      "type": blockina.blockType.COMMAND,
      "text": ["text", "input", "text2", "value"],
      "elements": {
        "text": { "type": "txt", "text": "set a variable" },
        "input": { "type": "inp", "text": "variable" },
        "text2": { "type": "txt", "text": "to" },
        "value": { "type": "inp", "text": "value" }
      },
      "func": function(args) { variables.sysValues[args.input.text] = args.value.text }
    },
    {
      "type": blockina.blockType.REPORTER,
      "text": ["text", "input"],
      "elements": {
        "text": { "type": "txt", "text": "get" },
        "input": { "type": "inp", "text": "variable" }
      },
      "func": function(args) { return variables.sysValues[args.input.text] }
    },
    {
      "type": blockina.blockType.LABEL,
      "text": [],
      "elements": {
        "text": "JSON Object"
      }
    },
    {
      "type": blockina.blockType.OBJECT,
      "text": ["text"],
      "elements": {
        "text": { "type": "txt", "text": "new object" }
      },
      "func": function(args) { return {} }
    },
    {
      "type": blockina.blockType.LABEL,
      "text": [],
      "elements": {
        "text": "JSON Array"
      }
    },
    {
      "type": blockina.blockType.OBJECT,
      "text": ["text"],
      "elements": {
        "text": { "type": "txt", "text": "new array" }
      },
      "func": function(args) { return [] }
    }
  ]
}
