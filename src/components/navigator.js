import React from 'react'
import '../style/App.css'
const Nav = ({ onClick }) => {
  return (
    <div className="nav-bar">
      <ul>
        <li onClick={onClick.bind(null, 'page_1')}>Page 1</li>
        <li onClick={onClick.bind(null, 'page_2')}>Page 2</li>
        <li onClick={onClick.bind(null, 'page_3')}>Page 3</li>
      </ul>
    </div>
  )
}

export default Nav
