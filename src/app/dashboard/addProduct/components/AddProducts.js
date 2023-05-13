'use client'
import jwt from 'jsonwebtoken'
import Error from '../error'
import { FolderMinus } from 'lucide-react'
import { useState } from 'react'

function FormAddProducts() {

    const [nameProduct, setNameProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [descriptionProduct, setDescriptionProduct] = useState('')
    const [imgProduct, setImgProduct] = useState(null)

    const handleCreateProduct = async (e) => {
        e.preventDefault();

        const productData = {
            name: nameProduct,
            price: priceProduct,
            description: descriptionProduct,
            img: imgProduct
        }
    }

    return (
        <div>
            <h1>Adicionar Produto</h1>

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