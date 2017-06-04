import React from  'react'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme'
import Nav from '../src/componets/navigator'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';

const onClick = jest.fn()
let component = null

describe('Navigator component ', () => {
  beforeEach(()=>{
    component = shallow(<Nav onClick={onClick} /> )
 })

  it('should render without crashing', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have buttons with click function', () => {
    expect(toJson(component.find('li'))).toMatchSnapshot()
  })

  it('should pass the params to the click function', () => {
    component.find('li').map(item =>  item.simulate('click'))
      expect(onClick.mock.calls).toMatchSnapshot()
  })
})
