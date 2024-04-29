import React from 'react'
import Link from 'next/link'
import Logo from '../../../../public/next.svg'
import Image from 'next/image'

function AdminNav() {
  return (
    <nav className='shadow-xl'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-4 bg-base-100'>
                <div>
                    <Link href="/">
                        <p className='text-3xl text-primary font-bold px-4'>tonnamwarineiei</p>
                    </Link>
                </div>
                <ul className='flex'>
                    <li className='mx-3 text-secondary'><Link href="/logo">Login</Link></li>
                    <li className='mx-3 text-secondary'><Link href="/register">Register</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default AdminNav