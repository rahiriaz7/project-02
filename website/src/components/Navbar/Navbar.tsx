import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const navbar = () => {
  return (
    <div className='flex px-5 py-5 text-bold text-3xl text-purple-800'>
      <header className='gap-5'>
            <Image className="w-23 h-25 md:w-15 ml-0"
              src="/mantech.png"
              alt=""
              width={100}
              height={24}
            />
        <Link href="\">Home</Link>
        <Link href="\name">Name</Link>
        <Link href="\name\address">Address</Link>
        <Link href="\name\address\contact-us">Contact-us</Link>
      </header>
    </div>
  )
}

export default navbar