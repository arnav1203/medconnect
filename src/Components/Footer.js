import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
    const Signup = () => {
        navigate('/Signup')
    }
    return (
        <div className='bg-gray-300 p-10'>
            <div className='lg:flex'>
                <div className=''>
                    <div className='flex justify-start p-4 text-lg text-gray-700'>
                        <a>University Hospitals Logo</a>
                    </div>
                    <div className='flex flex-wrap space-x-5 space-y-3'>
                        <div className='pt-3'>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            <p>Terms and Conditions</p>
                        </div>
                        <div>
                            <p>
                                Medconnect MyChart Terms and Conditions
                            </p>
                        </div>
                        <div>
                            <p>HIPAA Notice</p>
                        </div>
                        <div>
                            <p>
                                Non-Discrimination Notice
                            </p>
                        </div>
                        <div>
                            <p>
                                For Employees
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start py-5 text-xl'>
                        Copyright © 2023 University Hospitals
                    </div>
                </div>
                <div className='lg:flex'>
                    <div>
                        <div className='flex justify-start px-20'>
                            <p className='text-2xl text-gray-700'>Sign Up For Our Newsletter </p>
                        </div>
                        <div className='px-10 pt-4'>
                            <p className='text-lg text-gray-700'>
                                Get health news and advice you need to live your best, delivered right to your inbox every month: <span className='italic'>The Science of Health e-newsletter.</span>
                            </p>
                        </div>
                    </div>
                    <div className='p-5'>
                        <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group" onClick={Signup}>
                            <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Signup</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
