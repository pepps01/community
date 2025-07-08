import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className='bg-gray-800 text-white p-4 w-full flex justify-around items-center'>
            <div className='text-2xl font-bold'>Community</div>
            <div>
                <ul className='flex space-x-4 gap-8'>
                    <li>Groups</li>
                    <li>Posts</li>
                    <li>
                        <Link href="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Uncomment the following lines to add more content */}

            {/* <div className='mt-2'>Welcome to the community!</div>
            <div className='mt-2'>Explore, connect, and share!</div>
            <div className='mt-2'>Join discussions and make new friends!</div>
            <div className='mt-2'>Stay updated with the latest news!</div>
            <div className='mt-2'>Get involved and contribute!</div>
            <div className='mt-2'>Have fun and enjoy your time here!</div */}
        </div>
    )
}

export default Navbar