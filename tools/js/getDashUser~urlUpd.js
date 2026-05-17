while (true) {
  if (document.getElementById('projects').src !== `/tools/getDashProjectByUser?id=${uid}`) {
    window.location.href = document.getElementById('projects').src
  }
}
