import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';


export const DetailsPage = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState()
    const id = searchParams.get('id')
    const [productStock, setProductStock] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        setProductStock(value)
    }


    useEffect(() => {
        fetch('/ProductId?id=' + id)
            .then(response => response.json())
            .then(product => setProduct(product))
            .catch(error => console.error(error))
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/ProductStock?id=' + id + '&newStock=' + productStock, {
            method: 'PUT'
        })
            .then(response => {
                if (response.ok === true) {
                    setProduct({
                        ...product,
                        stock: productStock
                    })
                    setProductStock('')
                    setMessage('Se ha actualizado correctamente')
                } else {
                    setMessage('No se ha podido actualizar el stock')
                }
                setTimeout(() => {
                    setMessage('')
                }, 5000);
            })

    }

    if (!product) {
        return <div>Cargando producto...</div>
    }



    return (

        <div className='product-detail'>
            Nombe: <h3 className='product-info'> {product.name}</h3>
            Descripcion: <h3 className='product-info'> {product.description}</h3>
            Categoria: <h3 className='product-info'> {product.category}</h3>
            Precio: <h3 className='product-info'> {product.price}</h3>
            Existencia: <h3 className='product-info'> {product.stock}</h3>
            <form onSubmit={handleSubmit}>
                <label className='esto'>Actualizar stock</label>
                <input type="number" value={productStock} onChange={handleChange} />
                <button >Actualizar</button>
            </form>
            {message}
        </div>
    )
}


