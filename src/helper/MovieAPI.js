const MovieAPI = {
  fetch: (url) => {
    if (window.fetch) {
      return window.fetch(url)
      .then((res) => res.json())
      .then(data => data)
    }
    return Promise.reject(new Error('jopa'))
  }
}

export default MovieAPI
