import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='title'>
        <h1 className='container'>Help Queue</h1>
      </div>
      <div className='links'>
        <div className='container'>
          <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/admin">Admin</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
