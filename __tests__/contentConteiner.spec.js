import React from  'react'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme'
import ContentConteiner from '../src/containers/contentConteiner'
import PageContent from '../src/componets/pageContent'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';
import configureStore from 'redux-mock-store'

const initialState = { content: 'test_1', movies: {movie:'test'}}
const mockStore = configureStore()
let store = mockStore(initialState)
let container = null

describe('ContentConteiner test ', () => {

  beforeEach(()=>{
    store = mockStore(initialState)
    container = shallow(<ContentConteiner store={store} /> )
 })

  it('should render without crashing', () => {
    expect(toJson(container)).toMatchSnapshot()
  })

  it('should get props from store  ', () => {
    expect(container.prop('content')).toEqual(initialState.content)
    expect(container.prop('movies')).toEqual(initialState.movies)
    expect(toJson(container.props())).toMatchSnapshot()
  })

})

describe('ContentConteiner mount ', () => {
  beforeEach(()=>{
    store = mockStore(initialState)
    container = mount(<ContentConteiner store={store}/>)
 })

  it('should render PageContent  ', () => {
    const component = container.find(ContentConteiner)
    expect(toJson(component)).toMatchSnapshot()
  })
})
