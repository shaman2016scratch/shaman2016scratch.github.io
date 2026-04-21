return {
  packages: {
    minilog: {
      name: 'logger',
      lastversion: '0.0.1',
      modules: {
        'main': new Function(
          `
            return {}
          `
        )
      }
    }
  }
}
