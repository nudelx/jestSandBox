import actionStatus from  '../../src/redux/action/actionsType'
import enzymeSerializer from 'enzyme-to-json/serializer';


describe('you should not change !', () => {
  it('actionsType', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    expect(actionStatus).toMatchSnapshot()
  })
})
