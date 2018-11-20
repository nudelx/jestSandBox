import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PageContent from '../../src/components/PageContent'
import toJson from 'enzyme-to-json'
import actionStatus from '../../src/redux/reducer/helpers/actionStatus'

Enzyme.configure({ adapter: new Adapter() })

const movie = {
  page_1: {
    data: {
      title: 'test title',
      opening_crawl: 'this is a crawl',
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
  it('empty card should match the snapshot without props (empty)', () => {
    const component = shallow(<PageContent />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('empty card should match the snapshot with props (<movie>)', () => {
    const component = shallow(<PageContent content={content} movies={movie} />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('empty card should match the snapshot with loading card (<loading>)', () => {
    movie.page_1.status = actionStatus.FETCHING
    const component = shallow(<PageContent content={content} movies={movie} />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
