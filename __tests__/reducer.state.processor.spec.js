import { stateProcessor } from '../src/redux/reducer/helpers/movieStateProcessor'
jest.mock('../src/redux/reducer/helpers/movieStateProcessor',function () {
  console.log(arguments)
});

describe('it should mock and call movieStateProcessor', () => {
  it('dssssss', () => {
    console.log(stateProcessor)
    expect(true).toBe(true)
  })
})
