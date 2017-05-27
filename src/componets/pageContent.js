import React from 'react'

const PageContent = ({ content }) => {
  debugger
  return (
    <div className="page-content">
        {
          content.currentPage
          ? <div> {content.currentPage} </div>
          : <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        }
    </div>
  )
}

export default PageContent
