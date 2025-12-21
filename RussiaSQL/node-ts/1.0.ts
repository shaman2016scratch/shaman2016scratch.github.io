let russiaSQL_data = {
  "database": {},
  "on": { "RSQL": false }
}
const russiaSQL = {
  "run": function(c) {
    try {
      let code = c.split(/;\s*/); for(let i = 0; i < code.length; i++) { let line = code[i].split(' ');
        if(line[0] === 'новый' || line[0] === 'новая' || line[0] === 'создать'){ if(line[1] === 'таблица' || line[1] === 'таблицу'){ russiaSQL_data.database[line[2]] = { "type": line[3], "data": code[i+1] }; i++ } else { throw new Error "The type was not found." } } else { throw new Error "The command was not found" }
      }
    } catch (error) {
      console.error('RussiaSQL Error:', error.message);
      return `RussiaSQL Error: ${error.message}`
    }
  },
  "on": {
    "RSQL": function() { russiaSQL_data.on.RSQL = true }
  },
  "off": {
    "RSQL": function() { russiaSQL_data.on.RSQL = false }
  }
}
