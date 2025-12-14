let PyJsCompiler = {
  "pyOut": [],
  "pyVar": {} 
  "compile": {
    "py_js": function(c) { let code = c.split("\n"); let comp = ""; for(let i = 0; i < code.length; i++){ let i2 = code[i].split(' '); if(i2[0] === 'print'){ comp = `${comp}PyJsCompiler.pyOut.push${i2[0]}; ` }else if(i2[0] === 'import'){}else if(i2[1] === '='){ comp = `${comp}PyJsCompiler.pyVar${i2[0]} = ${i2[2]}; ` } } }
  },
  "Terminal": function(tc) { let Term = tc.split("\n") }
}
