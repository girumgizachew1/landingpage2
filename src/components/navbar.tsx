import React from 'react'
import Image from 'next/image'
function navbar() {
  return (
    <div className='flex flex-row justify-between w-full px-20 z-50 fixed'>
        <div className='flex flex-row space-x-12' >
            <Image src='/logo.png' alt='image' width={100} height={100}  objectFit='cover' className='-mt-8' />
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a>Products</a>
        </div>
        <div>
            <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-sm' >Buy Products -</button>
        </div>

    </div>
  )
}

export default navbar