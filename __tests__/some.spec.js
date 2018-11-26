import M from '../src/utilities/myModule'
jest.mock('../src/utilities/myModule')

describe('bla', () => {
  it('ddddd', () => {
    M()
    expect(1).toBe(1)
  })
})

// const mockFn = jest.mock()
// const a = new mockFn()
// const b = new mockFn()
// const c = b.bind(a, 'test')

// /***/

// jest.mock('./banana')
// import banana from './banana'
// banana.getColor()
// // banana.getColor.mock.calls
// // lastCalledWith ?

// /***/

// jest.mock('./banana', () => ({
//   getColor: jest.fn().mockImplementation(() => 42)
// }))

// import banana from './banana'
// banana.getColor()  //42
