'use client'
import Link from 'next/link'
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react'
import { useStore } from '../../store';

const Navbar: React.FC = () => {
    const [hasToken, setHasToken] = useState(false);
    const { logout } = useStore()

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        setHasToken(!!token); // true if token exists
    }, []);

    const handleNavigate = () => {
        window.location.href = "/groups"
    }

    return (
        <div className='bg-gray-800 text-white p-2 py-4 w-full flex justify-around items-center mb-4'>
            <Link href={"/"}>
                <div className='text-lg font-bold'>Community Hub</div>
            </Link>
            <div>
                <ul className='flex space-x-4 gap-8'>
                    {hasToken ? (
                        <>
                            <li>
                                <div onClick={() => handleNavigate()}>
                                    Group
                                </div>
                            </li>
                            <li>
                                <div onClick={() => logout()}>
                                    Logout
                                </div>
                            </li>
                        </>
                    ) : (
                        <Link href="/login">
                            Login
                        </Link>
                    )}
                </ul>
            </div >
        </div >
    )
}

export default Navbar