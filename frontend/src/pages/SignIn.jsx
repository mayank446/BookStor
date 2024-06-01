import React from 'react'

import logo from '../assets/logo.png'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/')
    }
    function toSignup() {
        navigate('/signup')
    }
    return (
        <div className="flex flex-col justify-center w-screen h-screen bg-slate-100 ">
            <div className='flex flex-col m-auto p-2'>
                <div className="grid grid-cols-1 relative bg-gradient-to-b from-blue-600 to-slate-300 w-96 h-[500px] mx-auto p-4 rounded-lg shadow-2xl">
                    <div className='flex justify-center absolute  w-full mt-[-72px]'>
                        <img className='h-28 w-28 rounded-full border-4 border-slate-100' src={logo}/>
                    </div>

                    <h2 className="flex justify-center w-full h-12 p-1 mt-6 text-gray-200 text-3xl font-mono font-bold">
                        SignIn 
                    </h2>

                    <div className='flex flex-col w-full h-80 mb-12 p-2 z-20'>
                        <input className='h-12 w-full mt-auto p-4 outline-none bg-transparent border-b border-gray-300 placeholder-gray-300 text-gray-100' placeholder='Username' />
                        <input className='h-12 w-full m-auto px-4 outline-none bg-transparent border-b border-gray-300 placeholder-gray-300 text-gray-100' placeholder='Password' type='password' />
                    </div>

                    <div className="flex justify-end w-full pr-2.5 absolute bottom-3">
                        <Button handleClick={handleClick}>Login</Button>
                    </div>
                </div>

                <div className='flex justify-center text-blue-500 font-medium p-1'>
                    Don't have an account, <button onClick={toSignup} className='indent-1 hover:text-blue-600'> create one!</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn