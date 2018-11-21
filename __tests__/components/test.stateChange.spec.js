import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import enzymeSerializer from 'enzyme-to-json/serializer'
expect.addSnapshotSerializer(enzymeSerializer)
Enzyme.configure({ adapter: new Adapter() })

class TestMe extends React.Component {
  state = { show: false }

  onClick = () => this.setState(({ show }) => ({ show: !show }))

  render() {
    return (
      <div>
        <div className="force">
          {this.state.show ? (
            <div className="data">here we go !</div>
          ) : (
            <div className="loading">wait ....</div>
          )}
        </div>
        <button onClick={this.onClick}>clickMe</button>
      </div>
    )
  }
}

describe('test react state change ', () => {
  it('should render the loading and react on button', () => {
    const component = shallow(<TestMe />)
    expect(component).toMatchSnapshot()
    expect(component.state()).toMatchSnapshot()
    component.find('button').simulate('click')
    expect(component).toMatchSnapshot()
    expect(component.state()).toMatchSnapshot()
  })
})
