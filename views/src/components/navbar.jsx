import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {

  return (
    <div>
      <div className='h-32 bg-red-500 w-screen flex justify-between items-center'>
        <div className='Logo text-4xl font-anurati p-5'> H.R</div>
        <div className='text-1xl flex gap-10 ml-11'>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Service</Link>
        </div>
        <Link to="/update" className='text-2xl'> profile</Link>

        <div></div>
      </div>
    </div>
  )
}

export default navbar