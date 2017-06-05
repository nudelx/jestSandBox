import React from  'react'
import { shallow, mount } from 'enzyme'
import EmptyCard from '../src/componets/emptyCard'
import MovieCard from '../src/componets/MovieCard'
import LoadingCard from '../src/componets/LoadingCard'
import Logo from '../src/componets/Logo'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';
import objectToJson from 'object-to-json';

const movie = {
  data: {
    title: 'test title',
    opening_crawl:'this is a crawl',
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
    expect(component.instance().props).toMatchSnapshot()
    expect(component).toMatchSnapshot()
  })

  it('movie card should match the snapshot of the children with props', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const component = shallow(<MovieCard movie={movie} />)
    expect(component.props()).toMatchSnapshot()
  })

  it('movie card should match the snapshot of the props', () => {
    expect.addSnapshotSerializer(enzymeSerializer)
    const component = shallow(<MovieCard movie={movie} />)
    expect(component.instance().props).toMatchSnapshot()
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
