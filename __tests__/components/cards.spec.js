import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmptyCard from '../../src/components/emptyCard'
import MovieCard from '../../src/components/MovieCard'
import LoadingCard from '../../src/components/LoadingCard'
import Logo from '../../src/components/Logo'
import toJson from 'enzyme-to-json'
import enzymeSerializer from 'enzyme-to-json/serializer'
Enzyme.configure({ adapter: new Adapter() })

const movie = {
  data: {
    title: 'test title',
    opening_crawl: 'this is a crawl',
    director: 'BB-8',
    release_date: '1/1/1970'
  }
}

describe('all cards test', () => {
  it('empty card should match the snapshot', () => {
    const component = shallow(<EmptyCard />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('movie card should match the snapshot', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const component = shallow(<MovieCard movie={movie} />)
    expect(component.props()).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('movie card should match the snapshot of the children with props', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const component = shallow(<MovieCard movie={movie} />)
    expect(component.props()).toMatchSnapshot()
  })

  it('LoadingCard card should match the snapshot', () => {
    const component = shallow(<LoadingCard />)
    expect(toJson(component)).toMatchSnapshot()
  })
  it('Logo card should match the snapshot', () => {
    const component = shallow(<Logo />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
