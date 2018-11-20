import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NavigatorContainer from "../../src/containers/navigatorContainer"
import toJson from "enzyme-to-json"
import configureStore from "redux-mock-store"
import Nav from "../../src/components/navigator"
Enzyme.configure({ adapter: new Adapter() })

const initialState = { content: "test_1", movies: { movie: "test" } }
const mockStore = configureStore()
let store = mockStore(initialState)
let container = null

describe("NavigatorContainer test ", () => {
  beforeEach(() => {
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    container = mount(<NavigatorContainer store={store} />)
  })

  it("should render without crashing with Nav", () => {
    expect(toJson(container)).toMatchSnapshot()
  })

  it("should run redux process navigator", () => {
    expect(toJson(container)).toMatchSnapshot()
    const nav = container.find(Nav)
    nav.find("li").map(item => item.simulate("click"))
    expect(store.dispatch.mock.calls).toMatchSnapshot()
  })

  it("should render dispatch double action ", () => {
    const nav = container.find(Nav)
    nav.find("li").map(item => item.simulate("click"))
    expect(store.dispatch.mock.calls).toMatchSnapshot()
  })
})
