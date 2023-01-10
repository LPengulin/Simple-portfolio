import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-9'>
        <ul className=''>
            <li className=''>
                <span className='cursor-pointer hover:text-red-400 transition duration-200'>LOGO </span>
            </li>
        </ul>

        <ul className='flex justify-between w-1/3'>
            <li className=''>
                <span className='cursor-pointer hover:text-red-400 transition duration-200'>Projects </span>
            </li>
            <li>
                <span className='cursor-pointer hover:text-red-400 transition duration-200'>GIT </span>
            </li>
            <li>
                <span className='cursor-pointer hover:text-red-400 transition duration-200'>Contact </span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar