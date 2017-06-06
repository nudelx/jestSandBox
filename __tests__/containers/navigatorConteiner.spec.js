import React from  'react'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme'
import NavigatorContainer from '../../src/containers/navigatorContainer'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';
import configureStore from 'redux-mock-store'

const initialState = { content: 'test_1', movies: {movie:'test'}}
const mockStore = configureStore()
let store = mockStore(initialState)
let container = null

describe('NavigatorContainer test ', () => {

  beforeEach(()=>{
    store = mockStore(initialState)
    container = mount(<NavigatorContainer store={store} /> )
 })

  it('should render without crashing with Nav', () => {
    expect(toJson(container)).toMatchSnapshot()
  })
})
