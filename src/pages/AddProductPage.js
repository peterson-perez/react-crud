import React from 'react'
import AddProductForm from '../components/AddProductForm'
import { useNavigate } from "react-router-dom";



export const AddProductPage = () => {
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate('/products')
    }
    return (
        <div className='Flex-large'>
            <h2>Productos</h2>
            <AddProductForm handleAdd={handleAdd} />
        </div>
    )
}
