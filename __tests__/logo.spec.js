import React from  'react'
import { shallow } from 'enzyme'
import Logo from '../src/componets/logo'

describe('full logo test', () => {
  it('should include div with logo class', () => {
    const component = shallow(<Logo />)
    expect(component.containsMatchingElement(
      <div className="sw-logo"></div>
    )).toEqual(true);
  })

  it('should have only one div ', () => {
    const component = shallow(<Logo />)
    expect(component.children().length).toBe(0)
  })

  it('shouldn\'t have more props', () => {
    const component = shallow(<Logo />)
    expect(component.props()).toEqual({"className": "sw-logo"})
  })
})
