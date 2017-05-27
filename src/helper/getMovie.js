const getMovie = {
  fetch: (url) => {
    if (window.fetch) {
      return window.fetch(url)
      then((res) => return res.json)
    }
    return Promise.reject(new Error('jopa'))
  }
}

export default getMovie
