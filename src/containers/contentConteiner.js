import React from 'react'
import PageContent from '../componets/pageContent'
import { connect } from 'react-redux'

const ContentConteiner = ({ content }) => {
  return (
    <PageContent content={content} />
  )
}


const mapStateToProps = (state) => {
  debugger
  return { content: state.content }
}

export default connect(mapStateToProps, null)(ContentConteiner)
