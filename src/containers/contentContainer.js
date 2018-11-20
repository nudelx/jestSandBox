import React from 'react'
import PageContent from '../components/pageContent'
import { connect } from 'react-redux'

const ContentContainer = ({ content, movies }) => {
  return <PageContent content={content} movies={movies} />
}

const mapStateToProps = ({ content, movies }) => ({ content, movies })

export default connect(
  mapStateToProps,
  null
)(ContentContainer)
