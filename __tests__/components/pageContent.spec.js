import React from  'react'
import { shallow, mount } from 'enzyme'
import PageContent from '../../src/componets/PageContent'
import toJson from 'enzyme-to-json';
import enzymeSerializer from 'enzyme-to-json/serializer';
import objectToJson from 'object-to-json';
import actionStatus from '../../src/redux/reducer/helpers/actionStatus'

const movie = {
  page_1: {
    data: {
      title: 'test title',
      opening_crawl:'this is a crawl',
      director: 'BB-8',
      release_date: '1/1/1970'
    }
  },
  status: 'DONE'
}

const content = {
  currentPage: 'page_1'
}

describe('page Content test ', () => {
  it('empty card should match the snapshot without props', () => {
    const component = shallow(<PageContent />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('empty card should match the snapshot with props', () => {
    const component = shallow(<PageContent content={content} movies={movie}/>)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('empty card should match the snapshot with loading card', () => {
    movie.page_1.status = actionStatus.FETTCHING
    const component = shallow(<PageContent content={content} movies={movie}/>)
    expect(toJson(component)).toMatchSnapshot()
  })

})
