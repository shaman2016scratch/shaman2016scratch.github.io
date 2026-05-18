self.addEventListener('message', (event) => {
  while (true) {
    if (event.payload.projects.src !== `/tools/getDashProjectByUser?id=${event.payload.uid}`) {
      event.payload.location.href = event.payload.projects.src
    }
  }
});
