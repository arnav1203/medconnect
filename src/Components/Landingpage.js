import React from 'react'
import Navbar from './Navbar'

export default function Landingpage() {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex justify-between items-center w-full h-full p-36'>
                <div>
                    <div className='text-6xl font-bold bg-clip-text text-transparent bg-blue-500'>
                        <h1>Pharmacy</h1>
                    </div>
                    <div className='text-4xl font-bold bg-clip-text text-transparent bg-blue-500'>
                        <p>Landing Page</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    IMG
                </div>
            </div>
        </div>
    )
}
