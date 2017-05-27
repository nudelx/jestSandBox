import React from 'react'
import MovieCard from './movieCard'
import EmptyCard from './emptyCard'
import LoadingCard from './loadingCard'
import actionStatus from '../redux/reducer/helpers/actionStatus'


const PageContent = ({ content, movies }) => {
  return (
    <div className="page-content">
        {
          movies && movies[content.currentPage]
          ? movies[content.currentPage].status === actionStatus.FETTCHING
            ? <LoadingCard />
            : <MovieCard page={content.currentPage} movie={movies[content.currentPage]} />
          : <EmptyCard />
        }
    </div>
  )
}

export default PageContent
