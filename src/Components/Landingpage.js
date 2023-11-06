import React from 'react'
import Navbar from './Navbar'
import doctor from './assets/Doctor2.png'

export default function Landingpage() {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='md:flex justify-between items-center w-full h-4/5 p-36'>
                <div className='w-1/2 h-fit'>
                    <div className=''>
                        <p className='text-6xl font-bold text-slate-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0)] h-[70px]'>Pharmacy</p>
                    </div>
                    <div className='text-4xl font-bold text-slate-600'>
                        <p className='h-11'>Landing Page</p>
                    </div>
                    <div>
                        <p className='text-slate-600'>
                            erofm owof ori hiu fhiufh ifhearijfsdj kjfnnkaf ofoi foiwe fowifw awfwf   iu h iho bvjh bh vuy vuy b ijn iun ij n ojm okdf dfk krg kr r wr bg gfg sf brt b sh tyjn  dv earg jnt  b gf hrst gear g fj ejn  hrfgtdt ytr tfdhyfgv rtdfxhg vrtgfj hbrtgfdhgrtdfg rfd
                        </p>
                    </div>
                </div>
                <div>
                    <img src={doctor}></img>
                </div>
            </div>
        </div>
    )
}
