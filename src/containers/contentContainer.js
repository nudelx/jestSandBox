import React from 'react'
import PageContent from '../componets/pageContent'
import { connect } from 'react-redux'

const ContentContainer = ({ content, movies }) => {
  return (
    <PageContent content={content} movies={movies} />
  )
}


const mapStateToProps = (state) => {
  return { content: state.content, movies: state.movies  }
}

export default connect(mapStateToProps, null)(ContentContainer)
