'use client'
import jwt from 'jsonwebtoken'
import Error from '../error'
import { useState } from 'react'
import { useRouter } from "next/navigation"

function FormAddProducts() {

    const router = useRouter()

    const [nameProduct, setNameProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [descriptionProduct, setDescriptionProduct] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

    const handleCreateProduct = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        console.log(nameProduct, priceProduct, descriptionProduct, selectedFile);

        const productData = new FormData();
        productData.append('name', nameProduct);
        productData.append('price', priceProduct);
        productData.append('description', descriptionProduct);
        productData.append('file', selectedFile, selectedFile.name);

        if (!nameProduct) {
            alert('Nome inválido')
        } else if (!priceProduct) {
            alert('Preço inválido')
        } else if (!descriptionProduct) {
            alert('Descrição inválida')
        } else if (!selectedFile) {
            alert('Imagem inválida')
        }

        try {

            console.log(productData);

            const response = await fetch('http://localhost:3030/product/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: productData
            })

            if (response.ok) {
                alert('Produto adiconado com sucesso!')
                router.push('/dashboard')
            } else {
                alert('Verifique se todos os campos estão corretos e tente novamente!')
            }
        } 
        catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao tentar cadastrar o produto. Tente novamente mais tarde!');
          }

    }

    return (
        <div className='flex flex-col items-center mt-[5rem] mb-[10rem]'>
            <h1 className='font-bold text-[1.5rem]'>Adicionar Produto</h1>

            <form onSubmit={handleCreateProduct} className='flex flex-col gap-[1rem] mt-[2rem]'>
                <label>
                    <p>Nome</p>
                    <input type='text' value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} className='bg-[#D9D9D9] rounded-[.5rem] w-full px-[1rem]'/>
                </label>
                <label>
                    <p>Preço</p>
                    <input type='text' value={priceProduct} 
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        const numberValue = inputValue.replace(/[^0-9.,]/g, '');
                        setPriceProduct(numberValue)
                    }} 
                    className='bg-[#D9D9D9] rounded-[.5rem] w-full px-[1rem]'/>
                </label>
                <label>
                    <p>Descrição</p>
                    <input type='text' value={descriptionProduct} onChange={(e) => setDescriptionProduct(e.target.value)} className='bg-[#D9D9D9] rounded-[.5rem] w-full px-[1rem]'/>
                </label>
                <label>
                    <p>Imagem do produto</p>
                    <input type='file' onChange={(e) => setSelectedFile(e.target.files.item(0))} className='bg-[#D9D9D9] rounded-[.5rem] p-[2rem] w-[100%]'/>
                </label>

                <button type='submit' className='bg-[#E57F1A] rounded-[.5rem] p-[1rem]'>CONFIRMAR</button>
            </form>

        </div>
    )
}

export default function AddProducts() {

    const getToken = () => {
        const token = localStorage.getItem('token')

        if (!token) {
            return true
        }

        const decode = jwt.decode(token)
        const currentTime = Math.floor(Date.now() / 1000)
        return decode.exp < currentTime
    }

    return (
        <div>
            {/* {getToken() ? <Error/> : <FormAddProducts/>} */}
            <FormAddProducts/>
        </div>
    )
}