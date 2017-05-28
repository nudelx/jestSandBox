import React from  'react'
import { shallow } from 'enzyme'
import Logo from '../src/componets/logo'

describe('logo', () => {
  it('loogo test', () => {
    const componet = shallow(<Logo />)
    console.log(componet)
  })
})
