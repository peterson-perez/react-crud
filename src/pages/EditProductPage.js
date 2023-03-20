import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';

const defaultState = {
    Name: '',
    Description: '',
    Category: '',
    Price: ''
}



export const EditProductPage = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState(defaultState)
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const id = searchParams.get('id')




    useEffect(() => {
        fetch('/ProductId?id=' + id)
            .then((response) => {
                return response.json()
            })
            .then((product) => {
                setProduct({
                    Name: product.name,
                    Id: product.id,
                    Description: product.description,
                    Category: product.category,
                    Stock: product.stock,
                    Price: product.price
                })
            })
            .catch(error => console.error(error))
    }, [id])

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setProduct({
            ...product,
            [name]: value
        })

    }



    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/Product?id=' + id, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok === true) {
                    navigate('/details?id=' + id)
                } else {
                    setMessage('No se ha podido editar el producto')
                }
            })
    }




    return (

        <>
            <form className='edit-form' onSubmit={handleSubmit} >
                <label >Nombre</label>
                <input type="text" name="Name" value={product.Name} onChange={handleChange} />
                <label >Descripcion</label>
                <input type="text" name="Description" value={product.Description} onChange={handleChange} />
                <label >Categoria</label>
                <input type="text" name="Category" value={product.Category} onChange={handleChange} />
                <label >Precio</label>
                <input type="number" name="Price" value={product.Price} onChange={handleChange} />
                <button className='nuevo'>Actualizar producto</button>
            </form>
            {message}
        </>
    )
}
