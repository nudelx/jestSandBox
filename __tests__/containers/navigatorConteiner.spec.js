import React from  'react'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme'
import NavigatorContainer from '../../src/containers/navigatorContainer'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';
import configureStore from 'redux-mock-store'
import Nav from '../../src/componets/navigator'

const initialState = { content: 'test_1', movies: {movie:'test'}}
const mockStore = configureStore()
let store = mockStore(initialState)
let container = null


describe('NavigatorContainer test ', () => {

  beforeEach(()=>{
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    container = mount(<NavigatorContainer store={store} /> )
 })

  it('should render without crashing with Nav', () => {
    expect(toJson(container)).toMatchSnapshot()
  })

  it('shold render navigator', () => {
    expect(toJson(container)).toMatchSnapshot()
    const nav = container.find(Nav)
    nav.find('li').map(item =>  item.simulate('click'))
    expect(store.dispatch.mock.calls).toMatchSnapshot()
  })

  it('shold render dispatch double action ', () => {
    const nav = container.find(Nav)
    nav.find('li').map(item =>  item.simulate('click'))
    expect(store.dispatch.mock.calls).toMatchSnapshot()
  })
})
