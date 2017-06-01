jest.mock('../src/helper/MovieAPI');
import { stateProcessor } from '../src/redux/reducer/helpers/movieStateProcessor'
import  { MovieFetching, MovieFetchDone, MovieFetchError } from  '../src/redux/action/actionsType'
import enzymeSerializer from 'enzyme-to-json/serializer';
import { MovieActionsCreator,  tryGetMovie, fetchingMoviewProcess }  from '../src/redux/action/movieActionCreator'

const state = {
  movies: {},
  content: {},
  currentPage: {}
}
const dispatch = jest.fn()
const getState = jest.fn().mockImplementation(() => state);

const page  = 'page_1'
const movie = { movie: 'test movie '}
const error = 'this is a test error'

describe('it creates actions propertly', () => {

  it('MovieFetching', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const state = MovieActionsCreator.startGettingMovie(page)
    expect(state).toMatchSnapshot()
  })

  it('getMovieDone', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const state = MovieActionsCreator.getMovieDone(movie,page)
    expect(state).toMatchSnapshot()
  })

  it('getMovieError', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const state = MovieActionsCreator.getMovieError(error)
    expect(state).toMatchSnapshot()
  })

})

describe('it should try to get a movie', () => {

  it('get a movie 1', () => {
    expect.assertions(1);
    return tryGetMovie(1)
    .then(data => expect(data).toMatchSnapshot())
  })

  it('should fail to get a movie x > 3 with error message', () => {
    expect.assertions(1);
    return tryGetMovie(44)
    .catch((err) => expect(err.error).toContain('44 not found'))
  })
})


describe('fetchingMoviewProcess action', () => {
  beforeAll(() => dispatch.mockClear());

  it('should get movie for page_1', () => {
    return fetchingMoviewProcess(page)(dispatch,getState)
    .then(() => expect(dispatch.mock.calls).toMatchSnapshot())
    console.log(dispatch.mock.calls)
  })

  it('should get an error for page_122 not found', () => {
    dispatch.mockClear()
    return fetchingMoviewProcess(page+22)(dispatch,getState).then(() => expect(dispatch.mock.calls).toMatchSnapshot())
  })

})
