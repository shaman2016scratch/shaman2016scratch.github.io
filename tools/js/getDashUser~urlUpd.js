self.addEventListener('message', (event) => {
  while (true) {
    if (event.payload.projects.src !== `/tools/getDashProjectByUser?id=${event.payload.uid}`) {
      self.postMessage({ t: 'updSrc', src: event.payload.projects.src })
    }
  }
});
