import React, { useEffect, useState } from 'react'
import ProductTable from '../components/ProductTable'

export const ListProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')


    const getAllProducts = () => {
        fetch('/ProductAll')
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    }

    const getProductByName = () => {
        fetch('/ProductName?name=' + name)
            .then(async (response) => {
                if (response.ok === true) {
                    const product = await response.json()
                    setProducts([product])
                } else {
                    setMessage('Este producto no se ha encontrado')
                }
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            })
            .catch((error) => console.error(error))
    }


    useEffect(() => {
        getAllProducts()
    }, [])

    const handleDelete = () => {
        getAllProducts()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name === '') {
            getAllProducts()
        } else {
            getProductByName()
        }

    }

    const handleChange = (event) => {
        const value = event.target.value
        setName(value)

    }

    return (

        <div className='Flex-large'>
            <h2>Lista de productos</h2>
            <form className='search' onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} placeholder='Buscar Producto' />
                <button>Buscar</button>
            </form>
            {message}
            <ProductTable products={products} onDelete={handleDelete} />

        </div>
    )
}


