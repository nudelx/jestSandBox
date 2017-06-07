import enzymeSerializer from 'enzyme-to-json/serializer';


jest.mock('../../src/mockSandbox/module2/module2', (what) => {
  return {
    say: jest.fn().mockImplementation(what => 'This is a fake call saying' + what)
  }
})
import module2 from '../../src/mockSandbox/module2/module2'
import myApp from '../../src/mockSandbox/myApp'

describe('mock sandBox test', () => {

  it('testing real modules', () => {
    const res = myApp.talk('this is a test 1')
    const res2 = myApp.talk('this is a test 2')
    // console.log(res)
    // console.log(module2.say.mock.calls)
    expect(module2.say).toHaveBeenCalled()
    expect(module2.say).toHaveBeenCalledTimes(2)
  })

})
