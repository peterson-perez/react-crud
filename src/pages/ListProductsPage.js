import React, { useEffect, useState } from 'react'
import ProductTable from '../components/ProductTable'

export const ListProductsPage = () => {
    const [product, setProduct] = useState([]);

    const getAllProducts = () => {
        fetch('/ProductAll')
            .then(response => response.json())
            .then(response => setProduct(response))
            .catch(error => console.error(error))
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const handleDelete = () => {
        getAllProducts()
    }

    return (
        <div className='Flex-large'>
            <h2>Lista de productos</h2>
            <ProductTable products={product} onDelete={handleDelete} />
        </div>
    )
}


