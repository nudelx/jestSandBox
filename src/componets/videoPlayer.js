import React from 'react'

const VideoPlayer = ({ url }) => (
  <div className="video-payer-holder">
    <div className="close">X</div>
    <iframe className="embed-responsive-item" src={url}></iframe>
  </div>
)

export default VideoPlayer
