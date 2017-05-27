import React from 'react'
import MovieCard from './movieCard'
import EmptyCard from './emptyCard'

const PageContent = ({ content }) => {
  debugger
  return (
    <div className="page-content">
        {
          content.currentPage
          ? <MovieCard page={content.currentPage} movieData={content.movieData} />
          : <EmptyCard />
        }
    </div>
  )
}

export default PageContent
