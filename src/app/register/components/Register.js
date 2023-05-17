'use client';

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";
import logo from "../../components/img/logo.svg"
import url from "@/app/configUrl/urlConfig";

export default function Register() {

    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleRegister = async (event) => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password,
            name: name,
            phone: phone
        };

        if (!email) {
            return alert('Email inválido!')
        }
        if (!password) {
            return alert('Senha inválida!')
        }
        if (!name) {
            return alert('Nome inválido!')
        }
        if (!phone) {
            return alert('Número inválido!')
        }

        const response = await fetch(`${url}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (response.ok) {
            const data = await response.json();
            // você pode redirecionar o usuário para a página de login aqui
            alert('Usuário criado com sucesso!')
            router.push('/login');
        } else {
            console.log(response.status);
            // você pode mostrar uma mensagem de erro ao usuário aqui
            alert('Não foi possível criar o usuário. Verifique todos os campos e tente mais tarde!')
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
                            <p className="text-[.6rem] text-[#E57F1A]">Must contain symbol, number and capital letter.</p>
                        </label>
                        
                        <label>
                            <p>NAME</p>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-black rounded-[.5rem] px-[1rem]  text-black"/>
                        </label>

                        <label>
                            <p>PHONE</p>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 border-black rounded-[.5rem] px-[1rem] text-black" placeholder="Ex: (xx) xxxxx-xxxx"/>
                        </label>
                        
                        <p>Already have an account? <a className="text-[#0057FF]" href="/login">Login.</a></p>

                        <button className="bg-[#E57F1A] rounded-[.5rem] p-[.5rem] mt-[1rem]" onClick={handleRegister}>REGISTER</button>
                    </form>

                </div>
            </div>
        </section>
    )
}