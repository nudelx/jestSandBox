import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContentContainer from '../../src/containers/contentContainer'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter() })

const initialState = { content: 'test_1', movies: { movie: 'test' } }
const mockStore = configureStore()
let store = mockStore(initialState)
let container = null

describe('ContentContainer test ', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<ContentContainer store={store} />)
  })

  it('should render without crashing', () => {
    expect(toJson(container)).toMatchSnapshot()
  })

  it('should get props from store  ', () => {
    expect(container.prop('content')).toEqual(initialState.content)
    expect(container.prop('movies')).toEqual(initialState.movies)
  })
})

describe('ContentContainer mount ', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    container = mount(<ContentContainer store={store} />)
  })

  it('should render PageContent  ', () => {
    const component = container.find(ContentContainer)
    expect(toJson(component)).toMatchSnapshot()
  })
})
