import React from  'react'
import { shallow, mount } from 'enzyme'
import Logo from '../../src/componets/logo'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';
import objectToJson from 'object-to-json';

// TODO functions snapshot functions
// TODO custom functions snapshot
// TODO component snapshot
// TODO mock


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

  it('should match the dom presentation snapshot', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const component = mount(<Logo />)
    expect(component).toMatchSnapshot()
  })

  it('should match the dom presentation snapshot Ω ', () => {
    const component = mount(<Logo />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
