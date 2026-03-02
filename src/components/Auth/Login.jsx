import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("hello guys")

        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                 className='flex flex-col items-center justify-center'>

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                     required className='border-2 border-emerald-600 bg-transparent placeholder:text-gray-400 outline-none px-5 py-4 rounded-full' type="email" placeholder='Enter Your Email' />


                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} 
                    required className='border-2 mt-4 border-emerald-600 bg-transparent placeholder:text-gray-400 outline-none px-5 py-4 rounded-full' type="password" placeholder='Enter Password' />

                    <button className='mt-7 hover:bg-emerald-800 border-2 border-none bg-emerald-600 text-white outline-none px-5 py-4 rounded-full w-full' >Login</button>
                </form>

            </div>

        </div>
    )
}

export default Login
