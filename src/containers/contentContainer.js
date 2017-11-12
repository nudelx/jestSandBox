import React from 'react'
import PageContent from '../componets/pageContent'
import { connect } from 'react-redux'

const ContentContainer = ({ content, movies }) => {
  return (
    <PageContent content={content} movies={movies} />
  )
}

const mapStateToProps = ({content, movies }) => ({ content, movies })

export default connect(mapStateToProps, null)(ContentContainer)
