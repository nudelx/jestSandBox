import React, { PureComponent } from 'react'
import TYSearch from 'youtube-api-search'
import VideoPlayer from '../componets/videoPlayer'

const WithTrailerPreview = (Component) => class extends PureComponent {
    state = {
      key: 'AIzaSyArFE0FKjiGoX-0wKSay_riAbAemd8t63U',
      show: false,
      trailer: false,
      url: false
    }

    componentDidMount() {
      TYSearch({key: this.state.key, term: 'star wars A new hope'}, (videos) => {
        console.log(videos)
        this.setState({trailer: videos.length && videos[0],  url: `https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1` })
      })
    }

    getTrailer() {
      // TYSearch({key: this.state.key, term: 'star wars A new hope'}, videos => console.log(videos))
    }

    showTrailer = () => {
      this.setState({ show: true })
    }

    render() {
      const { show, trailer, url } = this.state
      return (
        <div>
          <Component {...this.props} />
          {
            show
            ? <VideoPlayer url={url} />
            : trailer
              ? <button onClick={this.showTrailer} className='show-trailer'>{'Trailer'}</button>
              : null
          }
        </div>
      )
    }
  }


export default WithTrailerPreview
