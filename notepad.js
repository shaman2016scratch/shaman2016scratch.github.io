const txt = {
  "save": function() { localStorage.set(`notepad_${document.getElementById('name').input}`, document.getElementById('txt').input) },
  "load": function() { document.getElementById('txt').input = localStorage.get(`notepad_${document.getElementById('name').input}`) }
}
