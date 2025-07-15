'use client'
import Link from 'next/link'
import { useRouter } from 'next/router';

import React, { useEffect } from 'react'

const Navbar: React.FC = () => {
    // const router: any = useRouter();
    // const token = localStorage.getItem('access_token');
    // useEffect(() => {
    //     if (!token) {
    //         router.push('/login');  // Redirect if not logged in
    //     }
    // }, []);

    return (
        <div className='bg-gray-800 text-white p-4 w-full flex justify-around items-center'>
            <div className='text-2xl font-bold'>Community Hub</div>
            <div>
                <ul className='flex space-x-4 gap-8'>
                    {/* {token && token}
                    {token ? (
                        <>
                            <li>Groups</li>
                            <Link href="/login">
                                Logout
                            </Link>
                        </>
                    ) : (
                        <Link href="/login">
                            Login
                        </Link>
                    )} */}
                </ul>
            </div>
        </div >
    )
}

export default Navbar