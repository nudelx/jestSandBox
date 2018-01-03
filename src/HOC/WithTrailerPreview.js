import React, { Component } from 'react'
import TYSearch from 'youtube-api-search'

const WithTrailerPreview = (Comp) => class extends Component {
  state = {
    key: 'AIzaSyArFE0FKjiGoX-0wKSay_riAbAemd8t63U'
  }

  componentDidMount() {
    TYSearch({key: this.state.key, term: 'star wars A new hope'}, (videos) => {
      console.log(videos)
    })
  }

  getTrailer() {
    // TYSearch({key: this.state.key, term: 'star wars A new hope'}, videos => console.log(videos))
  }

  render() {
    return (
      <Comp />
    )
  }
}

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }
//
// WithTrailerPreview.displayName = `WithTrailerPreview(${getDisplayName(Component)})`


export default WithTrailerPreview
