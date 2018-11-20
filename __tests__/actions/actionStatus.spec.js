import actionStatus from '../../src/redux/action/actionsType'
import enzymeSerializer from 'enzyme-to-json/serializer'
expect.addSnapshotSerializer(enzymeSerializer)

describe('you should not change !', () => {
  it('actionsType', () => {
    expect(actionStatus).toMatchSnapshot()
  })
})
