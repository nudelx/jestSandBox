import React from 'react'

const VideoPlayer = ({ url, onClose }) => (
  <div className="video-payer-holder">
    <div className="holder-position">
      <div onClick={onClose} className="video-close">X</div>
      <iframe className="embed-responsive-item" src={url}></iframe>
    </div>
  </div>
)

export default VideoPlayer
