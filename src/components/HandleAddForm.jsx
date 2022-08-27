import React, { useState } from 'react';


const defaultState = {
    Name: '',
    Description: '',
    Category: '',
    Stock: '',
    Price: ''
}


const HandleAddForm = ({ handleAdd }) => {

    const [message, setMessage] = useState('')

    const [product, setProduct] = useState(defaultState)

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setProduct({
            ...product,
            [name]: value,
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/Product', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async response => {
                if (response.ok === true) {
                    setProduct(defaultState)
                    handleAdd()
                    setMessage('Se a agregado el producto correctamente')
                } else {
                    setMessage('No se a podido agregar el producto')
                }
                setTimeout(() => {
                    setMessage('')
                }, 5000);
            })
            .catch(error => console.error(error))

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" name="Name" value={product.Name} onChange={handleChange} />
                <label >Descripcion</label>
                <input type="text" name="Description" value={product.Description} onChange={handleChange} />
                <label >Categoria</label>
                <input type="text" name="Category" value={product.Category} onChange={handleChange} />
                <label >Sctock</label>
                <input type="number" name="Stock" value={product.Stock} onChange={handleChange} />
                <label >Precio</label>
                <input type="number" name="Price" value={product.Price} onChange={handleChange} />
                <button className='nuevo'>Agregar nuevo producto</button>
            </form>
            {message}
        </>
    );
}

export default HandleAddForm;