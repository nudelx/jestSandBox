import { stateProcessor } from '../src/redux/reducer/helpers/movieStateProcessor'
import  { MovieFetching, MovieFetchDone, MovieFetchError } from  '../src/redux/action/actionsType'
import enzymeSerializer from 'enzyme-to-json/serializer';
import MovieActionsCreator from '../src/redux/action/movieActionCreator'

const page  = 'page_1'
const movie = { movie: 'test movie '}
const error = 'this is a test error'
describe('it create actions propertly', () => {

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
