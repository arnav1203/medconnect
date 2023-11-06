import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className='flex justify-between p-7'>
                <div>
                    <div className='text-xl font-semibold'>
                        Website Logo
                    </div>
                </div>
                <div className='flex w-2/3 justify-evenly'>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950'>
                        HOME
                    </div>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950'>
                        NEWS
                    </div>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950'>
                        PROJECT
                    </div>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950'>
                        ABOUT US
                    </div>
                </div>
            </div>
        </div>
    )
}
