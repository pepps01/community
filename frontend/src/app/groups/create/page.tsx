'use client'
import GroupCreate from '@/components/GroupCreate'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'

const Group: React.FC = () => {

    return (
        <div>
            <Navbar />
            <GroupCreate />
        </div>
    )
}

export default Group