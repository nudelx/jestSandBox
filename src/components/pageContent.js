import React from 'react'
import MovieCard from './movieCard'
import EmptyCard from './emptyCard'
import LoadingCard from './loadingCard'
import actionStatus from '../redux/reducer/helpers/actionStatus'
import WithTrailerPreview from '../HOC/WithTrailerPreview'
import WithTrailerDynamic from '../DCC/WithPreviewDynamic'

const MovieCardWithPreview = WithTrailerPreview(MovieCard)
MovieCardWithPreview.displayName = 'WithTrailerPreview(MovieCard)'

const PageContent = ({ content, movies }) => {
  return (
    <div className="page-content">
      {movies && movies[content.currentPage] ? (
        movies[content.currentPage].status === actionStatus.FETCHING ? (
          <LoadingCard />
        ) : (
          // : <MovieCardWithPreview page={content.currentPage} movie={movies[content.currentPage]} />
          <WithTrailerDynamic movie={movies[content.currentPage]}>
            {() => (
              <MovieCard
                page={content.currentPage}
                movie={movies[content.currentPage]}
              />
            )}
          </WithTrailerDynamic>
        )
      ) : (
        <EmptyCard />
      )}
    </div>
  )
}

export default PageContent
