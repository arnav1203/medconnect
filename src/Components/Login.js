import React from 'react'

export default function Login() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96'>
                <div className='text-4xl flex justify-center w-full m-2'>Welcome Back!</div>
                <div className='flex justify-center text-xl text-gray-600 m-2'>Login to access your account</div>
                <label className='flex flex-col w-full p-1' >
                    Email
                    <input type='text' className='w-full rounded-md h-12 bg-slate-300 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Email' />
                </label>
                <label className='flex flex-col w-full p-1'>
                    Password
                    <input type='password' className='w-full rounded-md h-12 bg-slate-300 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter password' />
                </label>
                <div className='flex justify-center'>
                    <button className="relative mt-5 inline-flex items-center border border-cyan-500 justify-start px-6 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                    </button>
                </div>
                <div className='flex justify-center p-3'><span>Not a member?</span><a href='/Signup' className='text-blue-700'>Signup Here</a></div>

            </form>
        </div>

    )
}
