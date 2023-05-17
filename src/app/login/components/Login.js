'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import url from "@/app/configUrl/urlConfig"
import logo from '../../components/img/logo.svg'
import Image from "next/image"

export default function Login() {
    
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };

        if (!email) {
            return alert('Email inválido!')
        }
        if (!password) {
            return alert('Senha inválida!')
        }

        try {

            const response = await fetch(`${url}/user/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
            if (response.ok) {
              const { token } = await response.json()
          
              if (token) {
                localStorage.setItem('token', token);
                router.push('/');
                router.refresh()
              } else {
                alert('Senha incorreta. Tente novamente!');
              }
            } else {
              console.log(response.status);
              alert('Usuário não encontrado. Verifique se o email e senha estão corretos ou crie uma conta!');
            }
          } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
          }
    }

    return (
        <section className="bg-black h-[100vh] flex items-center justify-center">
            <div className="flex bg-white items-center justify-center w-[55rem] gap-[5rem] p-[2rem] rounded-[.5rem]">
                <Image src={logo} className="w-[15rem] h-[15rem] shadow-lg bg-white"/>

                <div className="">
                    <form className="flex flex-col gap-y-[1rem] bg-black text-white p-10 rounded-[.5rem]">
                        <label>
                            <p>EMAIL</p>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-black rounded-[.5rem] px-[1rem] text-black" placeholder="Ex: example@email.com"/>
                        </label>

                        <label>
                            <p>PASSWORD</p>
                            <input type="password" minLength="8" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 border-black px-[1rem] rounded-[.5rem] text-black"/>
                        </label>
                        
                        <p>Don't have an account? <a className="text-[#0057FF]" href="/register">Register.</a></p>

                        <button className="bg-[#E57F1A] rounded-[.5rem] p-[.5rem] mt-[1rem]" onClick={handleLogin}>LOGIN</button>
                    </form>

                </div>
            </div>
        </section>
    )
}