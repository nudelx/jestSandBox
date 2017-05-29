import { stateProcessor } from '../src/redux/reducer/helpers/movieStateProcessor'
import  { MovieFetching, MovieFetchDone, MovieFetchError } from  '../src/redux/action/actionsType'
import enzymeSerializer from 'enzyme-to-json/serializer';

const actionObject = { error: 'bla bla bla ' , page:'test_1', movie: {test_movie: 'test_movie'} }

describe('it should process the state', () => {

  it('MovieFetching', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const state = stateProcessor[MovieFetching]({}, actionObject)
    expect(state).toMatchSnapshot()
  })

  it('MovieFetchDone', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const state = stateProcessor[MovieFetchDone]({}, actionObject)
    expect(state).toMatchSnapshot()
  })

  it('MovieFetchError', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const state = stateProcessor[MovieFetchError]({}, actionObject)
    expect(state).toMatchSnapshot()
  })
})
