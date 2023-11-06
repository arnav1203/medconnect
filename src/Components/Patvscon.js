import React from 'react'
import cross from './assets/Medkit.svg'
import doctor from './assets/doctor_icon.png'
import atm from './assets/credit-card.svg'
import book from './assets/book-open-text.svg'
import building from './assets/building.svg'
export default function Patvscon() {
    return (
        <div>
            <div className='md:flex md:justify-around'>
                <div className='w-2/5'>
                    <div className='text-3xl'>
                        For Patients
                    </div>
                    <div className='pt-10'>
                        <div className='md:flex border p-2'>
                            <div className='w-28 h-28 flex justify-center items-center'>
                                <img src={cross} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    UH My Chart
                                </div>
                                <div>
                                    Manage your health care, all in one place.
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='md:flex border p-2'>
                            <div className='w-28 h-28 flex justify-center items-center'>
                                <img src={atm} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    Pay Your Bill
                                </div>
                                <div>
                                    Pay your bills online using smartphone,tablet or computer
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Pay Now</span>
                                        <span className="relative invisible">Pay Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='md:flex border p-2'>
                            <div className='w-28 h-28 flex justify-center items-center'>
                                <img src={atm} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    Refer a doctor
                                </div>
                                <div>
                                    Information about patient referrals, consultation, or transfers.
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/5'>
                    <div className='text-3xl'>
                        For Contributors
                    </div>
                    <div className='pt-10'>
                        <div className='md:flex border p-2'>
                            <div className='w-28 h-28 flex justify-center items-center'>
                                <img src={doctor} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    Refer a Patient
                                </div>
                                <div>
                                    Information about patient referrals, consultation, or transfers.
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='md:flex border p-2'>
                            <div className='w-28 h-28 flex justify-center items-center'>
                                <img src={book} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    Medical Articles & News
                                </div>
                                <div>
                                    Read about the latest medical advances, research activities, and news happening at UH.
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='md:flex border p-2'>
                            <div className='w-28 h-28 flex justify-center items-center'>
                                <img src={building} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    Academic Specialties
                                </div>
                                <div>
                                    Information about the clinical and academic activities for clinicians.
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
