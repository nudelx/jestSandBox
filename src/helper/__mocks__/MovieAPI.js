var movie = {
  title: 'Hope it Will work',
  episode_id: '1_t',
  opening_crawl: 'this is a test',
  director: 'BB-8',
  producer: 'Kylo Ren',
  release_date: '1977-05-25',
  created: '2014-12-10 14:23:31',
  edited: '2015-04-11 09:46:52',
  url: '/this/is/url/to/some/movie/'
}

const movies = page => (movie.episode_id = `test_${page}` && movie)

const MovieAPI = {
  fetch: url => {
    const page = url.split('/').pop()
    return new Promise((resolve, reject) => {
      process.nextTick(
        () =>
          page >= 1 && page <= 3
            ? resolve(movies(page))
            : reject({
                error: 'movie with ' + page + ' not found.'
              })
      )
    })
  }
}

export default MovieAPI
