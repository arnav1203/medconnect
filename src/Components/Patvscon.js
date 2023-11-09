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
                <div className='md:w-2/5'>
                    <div className='text-3xl'>
                        For Patients
                    </div>
                    <div className='pt-10'>
                        <div className='flex justify-center md:justify-start border p-2'>
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
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-center md:justify-start border p-2'>
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
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">Pay Now</span>
                                        <span className="relative invisible">Pay Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-center md:justify-start border p-2'>
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
                                <div className='flex justify-start pt-6'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-10'>
                            <a href="#_" class="relative inline-flex border border-cyan-500 items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span class="w-60 h-52 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">See All Patient Resources</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='md:w-2/5'>
                    <div className='text-3xl'>
                        For Contributors
                    </div>
                    <div className='pt-10'>
                        <div className='flex justify-center md:justify-start border p-2'>
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
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-center md:justify-start border p-2'>
                            <div className='w-36 h-28 flex justify-center items-center'>
                                <img src={book} className='h-16'></img>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex justify-start font-semibold text-xl'>
                                    Medical Articles & News
                                </div>
                                <div className=''>
                                    <p>
                                        Read about the latest medical advances, research activities, and news happening at UH.
                                    </p>
                                </div>
                                <div className='flex justify-start'>
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-center md:justify-start border p-2'>
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
                                    <a href="#_" className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-600 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                                        <span className="relative invisible">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-10'>
                            <a href="#_" class="relative inline-flex items-center border border-cyan-500 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span class="w-60 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">See All Contributor's Resources</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
