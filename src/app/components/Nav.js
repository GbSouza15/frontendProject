'use client'

import jwt from 'jsonwebtoken';
import Link from 'next/link';
import { useRouter } from "next/navigation"
import { useEffect } from 'react';
import Image from "next/image";
import logo from '../components/img/logo.svg'

export default function Nav() {

    const router = useRouter()
    let tokenValid;

    useEffect(() => {


        const isTokenExpired = () => {

            const token = localStorage.getItem('token')

            if (!token) {
                return true
            }

            const decoded = jwt.decode(token)
            const currentTime = Math.floor(Date.now() / 1000)
            return decoded.exp < currentTime
        }

        isTokenExpired() ? tokenValid = 'expired' : tokenValid = 'valid'
    })

    return (
        <div>
            <nav className="flex items-center justify-around h-[5rem] shadow-lg">
                <div className="logo">
                    <Image src={logo} className='w-[4rem] h-[4rem] rounded-[100%]'/>
                </div>

                <ul className="flex gap-[2rem] font-bold">
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href='#about'>ABOUT</Link>
                    </li>
                    {tokenValid == 'expired' || null ? <Link href='/login'><li>LOGIN</li></Link> : <Link href='/dashboard'><li>DASHBOARD</li></Link>}
                </ul>
            </nav>
        </div>
    )
}