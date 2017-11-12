jest.mock('../src/utilities/myModule')

import M from '../src/utilities/myModule'

describe('bla', () => {
  it('ddddd',() => {
    M()
    expect(1).toBe(1);
  })
})
