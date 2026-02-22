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
      "id": "labelId",
      "type": blockina.blockType.LABEL,
      "text": [],
      "elements": {
        "text": "Variables"
      }
    },
    {
      "id": "setVar",
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
      "id": "getVar",
      "type": blockina.blockType.REPORTER,
      "text": ["text", "input"],
      "elements": {
        "text": { "type": "txt", "text": "get" },
        "input": { "type": "inp", "text": "variable" }
      },
      "func": function(args) { return variables.sysValues[args.input.text] }
    },
    {
      "id": "getVarObject",
      "type": blockina.blockType.OBJECT,
      "text": ["text", "input"],
      "elements": {
        "text": { "type": "txt", "text": "get" },
        "input": { "type": "inp", "text": "variable" }
      },
      "func": function(args) { return variables.sysValues[args.input.text] }
    },
    {
      "id": "getVarArray",
      "type": blockina.blockType.ARRAY,
      "text": ["text", "input"],
      "elements": {
        "text": { "type": "txt", "text": "get" },
        "input": { "type": "inp", "text": "variable" }
      },
      "func": function(args) { return variables.sysValues[args.input.text] }
    },
    {
      "id": "label2",
      "type": blockina.blockType.LABEL,
      "text": [],
      "elements": {
        "text": "JSON Object"
      }
    },
    {
      "id": "newObj",
      "type": blockina.blockType.OBJECT,
      "text": ["text"],
      "elements": {
        "text": { "type": "txt", "text": "new object" }
      },
      "func": function(args) { return {} }
    },
    {
      "id": "addObjKey",
      "type": blockina.blockType.OBJECT,
      "text": ["text", "key", "text2", "object", "text3", "value"],
      "elements": {
        "text": { "type": "txt", "text": "Set Key" },
        "key": { "type": "inp", "text": "username" },
        "text2": { "type": "txt", "text": "in object" },
        "object": { "type": "inp", "text": {} },
        "text3": { "type": "txt", "text": "value" },
        "value": { "type": "inp", "text": "superUser123" }
      },
      "func": function(args) { return {} }
    },
    {
      "id": "label3",
      "type": blockina.blockType.LABEL,
      "text": [],
      "elements": {
        "text": "JSON Array"
      }
    },
    {
      "id": "newArr",
      "type": blockina.blockType.ARRAY,
      "text": ["text"],
      "elements": {
        "text": { "type": "txt", "text": "new array" }
      },
      "func": function(args) { return [] }
    }
  ]
}
