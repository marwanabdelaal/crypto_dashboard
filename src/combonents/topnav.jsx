import React from 'react'
import { Link } from 'react-router'

const TopNav = () => {
  return (
    <div className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default TopNav