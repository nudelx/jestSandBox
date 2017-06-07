import module2 from '../module2/module2'
const module1 = {
  say: (what) => {
    const str  = `Module1 saying: ${what}`
    console.log(str)
    const str2 = module2.say(what)
    return [ str, str2 ]
  }
}
export default module1
