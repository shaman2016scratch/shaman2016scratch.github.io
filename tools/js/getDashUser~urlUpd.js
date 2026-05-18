self.addEventListener('message', (event) => {
  while (true) {
    if (document.getElementById('projects').src !== `/tools/getDashProjectByUser?id=${event.payload.uid}`) {
      event.payload.location.href = event.payload.projects.src
    }
  }
});
