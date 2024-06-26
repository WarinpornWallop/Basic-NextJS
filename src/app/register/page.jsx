import React from 'react'
import Navbar from '../components/login/Navbar'
import Footer from "../components/login/Footer";
import Container from "../components/login/Container";
import Link from 'next/link'

function RegisterPage() {
return (
    <Container>
        <Navbar />
        <div className='flex-grow'>
            <div className='flex justify-center items-center'>
                <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
                    <h3 className='text-3xl'>Register</h3>
                    <hr className='my-3' />
                    <form action="">
                        <input type="text" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your name' />
                        <input type="text" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your email' />
                        <input type="password" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your password' />
                        <input type="password" className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Confirm your password' />
                        <button className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2' type='submit'>Sign Up</button>
                        <hr className='my-3' />
                        <p>
                            Already have an account? Go go <Link href="/login" className='text-blue-500 hover:underline'>Login</Link> Page
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </Container>
)
}

export default RegisterPage