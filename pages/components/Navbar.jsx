import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <>
<nav className='flex justify-around items-center py-[36px]'>
    <div>
        <Image src="/Group 8697.png" width={150} height={50} />

    </div>

    <div>
        <ul className='flex justify-around items-center gap-[20px]'>
            <li>Home</li>
            <li>About</li>
            <li>Token</li>
            <li>Pages</li>
        </ul>
    </div>

    <div>
        <button className="bg-[#0582CA] p-2 rounded-2xl w-[150px] text-white h-[50px]">Download app</button>
    </div>
</nav>
      
    </>
  )
}

export default Navbar
