import EventSys from '../hadar/pubsub'
import ProductGallery from '../hadar/someComponent'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
/// here you say that it should use the mock !!!!
jest.mock('../hadar/pubsub')

Enzyme.configure({ adapter: new Adapter() })

describe('mock test', () => {
  it('bla', () => {
    // console.log('EventSystem', EventSys)
    EventSys.subscribe({ type: 'this is fucking ugly code !!!' })
    expect(EventSys.subscribe.mock.calls).toMatchSnapshot()
    expect(1).toBe(1)
  })
})

describe('component using the EventSystem', () => {
  it('it should subscribe on mount ', () => {
    const component = shallow(<ProductGallery />) /// here it will be mounted so you can check how it was subscribed
    expect(toJson(component)).toMatchSnapshot()
    expect(EventSys.subscribe.mock.calls).toMatchSnapshot()
  })
})
