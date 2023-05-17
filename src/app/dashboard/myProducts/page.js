'use client'

import url from "@/app/configUrl/urlConfig"
import jwt from 'jsonwebtoken'
import { useEffect, useState } from "react";

export default function Page() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            console.log('Não existe');
        }

        const decode = jwt.decode(token)
        const userId = decode.id 

        fetch(`${url}/product/user/${userId}`).then(response => response.json()).then(data => {
            setProducts(data)
        })
    }, [])

    return (
        <div className="mt-[5rem] mb-[15rem]">
            <h1 className="text-center font-bold text-[1.5rem]">Meus Produtos</h1>
            <div className="productsRecents grid grid-cols-3 justify-items-center mt-[1rem]">
                {products.map(product => (
                    <div key={product.id} className="bg-black w-[20rem] h-[18rem] mt-[1.5rem] rounded-[.2rem]">
                        <img className="w-[100%] h-[11rem] border-2 border-[#E57F1A] rounded-tl-[.2rem] rounded-th-[.2rem]" src={`${url}/files/${product.img.split('/')[1]}`} alt={product.name} />
                        <div className="mt-[2rem] text-white pl-[.5rem]">
                            <p>{product.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}