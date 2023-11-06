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
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a className='' href='/'>
                            HOME
                        </a>
                    </div>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a href='/'>
                            NEWS
                        </a>
                    </div>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a href='/'>
                            PROJECT
                        </a>
                    </div>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a href='/'>
                            ABOUT US
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
