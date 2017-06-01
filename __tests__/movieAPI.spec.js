jest.mock('../src/helper/MovieAPI')
import MovieAPI from '../src/helper/MovieAPI'

describe('testing movie API ', () => {
  it('should return data object with title', () => {
    expect.assertions(1);
    return MovieAPI.fetch('bla/bla/bla/1')
    .then(data => expect(data.title).toEqual('Hope it Will work'));
  })

  it('should return data object with title', () => {
    expect.assertions(1);
    return MovieAPI.fetch('bla/bla/bla/1')
    .then(data => expect(data.director).toEqual('BB-8'));
  })

  it('should match the snapshot', () => {
    expect.assertions(1);
    return MovieAPI.fetch('bla/bla/bla/1')
    .then(data => expect(data).toMatchSnapshot());
  })

  it('should match the error', () => {
    expect.assertions(1);
    return MovieAPI.fetch('bla/bla/bla/5')
    .then(data => expect(data).toMatchSnapshot())
    .catch(error => expect(error).toMatchSnapshot());
  })

})
