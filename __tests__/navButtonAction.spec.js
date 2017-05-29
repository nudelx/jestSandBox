import  NavButtonActionsCreator from  '../src/redux/action/navButtonAction'
import enzymeSerializer from 'enzyme-to-json/serializer';


describe('it should create navigation action ', () => {

  it('NavButtonActionsCreator', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const action = NavButtonActionsCreator.createNavButtonClick('page_1')
    expect(action).toMatchSnapshot()
  })
})
