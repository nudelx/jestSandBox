import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Nav from "../../src/components/navigator"
import toJson from "enzyme-to-json"
Enzyme.configure({ adapter: new Adapter() })
const onClick = jest.fn()
let component = null

describe("Navigator component ", () => {
  beforeEach(() => {
    component = shallow(<Nav onClick={onClick} />)
  })

  it("should render without crashing", () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it("should have buttons with click function", () => {
    expect(toJson(component.find("li"))).toMatchSnapshot()
  })

  it("should pass the params to the click function", () => {
    component.find("li").map(item => item.simulate("click"))
    expect(onClick.mock.calls).toMatchSnapshot()
  })
})
