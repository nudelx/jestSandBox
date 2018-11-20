import React from "react"
import TYSearch from "youtube-api-search"
import VideoPlayer from "../components/videoPlayer"
import key from "../helper/keys"

const WithTrailerPreview = Component =>
  class extends Component {
    state = {
      key,
      show: false,
      trailer: false,
      url: false
    }

    componentDidMount() {
      const { movie } = this.props
      TYSearch(
        { key: this.state.key, term: `star wars ${movie.data.title}` },
        videos => {
          this.setState({
            trailer: videos.length && videos[0],
            url: `https://www.youtube.com/embed/${
              videos[0].id.videoId
            }?autoplay=1`
          })
        }
      )
    }

    hideTrailer = () => this.setState({ show: false })

    showTrailer = () => this.setState({ show: true })

    render() {
      const { show, trailer, url } = this.state
      return (
        <div>
          <Component {...this.props} />
          {show ? (
            <VideoPlayer url={url} onClose={this.hideTrailer} />
          ) : trailer ? (
            <button onClick={this.showTrailer} className="show-trailer">
              {"Trailer"}
            </button>
          ) : null}
        </div>
      )
    }
  }

export default WithTrailerPreview
