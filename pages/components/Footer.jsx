import React from 'react'
import Image from 'next/image'

function Footer() {

return(
<>
<footer className='flex items-center justify-center md:p-4'>
    <div className='grid grid-cols-1 md:grid-cols-4 md:p-4 gap-[20px] md:gap-0'>
        <div>
            <h2 className="text-2xl font-bold mb-[30px]">Menu</h2>
            <ul className='text-sm flex flex-col gap-[20px] text-[#AFAFAF]'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Blog post
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Pricing single
                </li>
            </ul>
        </div>



        <div>
            <h2 className="text-2xl font-bold mb-[30px]">Utility pages</h2>
            <ul className='text-sm flex flex-col gap-[20px] text-[#AFAFAF]'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Blog post
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Pricing single
                </li>
            </ul>
        </div>


        <div>
            <h2 className="text-2xl font-bold mb-[30px]">Follow us</h2>
            <ul className='text-sm flex flex-col gap-[20px] text-[#AFAFAF]'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Blog post
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Pricing single
                </li>
            </ul>
        </div>

            <div className='bg-[#0582CA] w-[300px] h-[250px] rounded-3xl text-white' >
                <div className=" flex flex-col items-center justify-center gap-[15px]">
                    <h1 className='font-bold  mt-[30px]'>Subscribe to our newsletter</h1>
                    <p className='text-sm w-[270px]'>
                        Receive upto info about latest trends and news updates via email
                    </p>
                    <div className='bg-white p-2 w-[250px] rounded-2xl'>
                        <input type="email" placeholder="your email"/>
                    </div>
                    <div className='bg-white p-2 w-[250px] rounded-2xl flex items-center justify-center'>
                        <button className='text-[#0582CA]'>Subscribe</button>
                    </div>
                </div>

            </div>

    </div>





</footer>
</>
)
}

export default Footer