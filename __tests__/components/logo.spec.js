import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Logo from '../../src/components/logo'
import toJson from 'enzyme-to-json'
import enzymeSerializer from 'enzyme-to-json/serializer'
Enzyme.configure({ adapter: new Adapter() })

// TODO functions snapshot functions
// TODO custom functions snapshot
// TODO component snapshot
// TODO mock

describe('full logo test', () => {
  it('should include div with logo class', () => {
    const component = shallow(<Logo />)
    expect(
      component.containsMatchingElement(<div className="sw-logo" />)
    ).toEqual(true)
  })

  it('should have only one div ', () => {
    const component = shallow(<Logo />)
    expect(component.children().length).toBe(0)
  })

  it("shouldn't have more props", () => {
    const component = shallow(<Logo />)
    expect(component.props()).toEqual({ className: 'sw-logo' })
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
