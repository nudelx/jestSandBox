import eventSystem from '../hadar/pubsub'
import React from 'react'

export default class ProductGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      desktop: window.innerWidth >= 1024,
      images: props.images,
      videoId: props.videoId,
      productImageIndex: 0,
      videoPlaying: false
    }
  }

  componentDidMount() {
    console.log('RUN !!')
    eventSystem.subscribe(this, 'Resize')
  }

  componentWillUnmount() {
    eventSystem.unsubscribe(this, 'Resize')
  }

  render() {
    return <div />
  }
}
