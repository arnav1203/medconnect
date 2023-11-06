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
                    <div className='text-lg font-semibold'>
                        HOME
                    </div>
                    <div className='text-lg font-semibold'>
                        NEWS
                    </div>
                    <div className='text-lg font-semibold'>
                        PROJECT
                    </div>
                    <div className='text-lg font-semibold'>
                        ABOUT US
                    </div>
                </div>
            </div>
        </div>
    )
}
