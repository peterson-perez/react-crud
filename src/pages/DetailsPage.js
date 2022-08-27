import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const DetailsPage = () => {
    const [searchParams] = useSearchParams();
    const [productDetail, setProductDetail] = useState()
    const id = searchParams.get('id')

    useEffect(() => {
        fetch('/ProductId?id=' + id)
            .then(response => response.json())
            .then(product => setProductDetail(product))
            .catch(error => console.error(error))
    }, [id])

    if (!productDetail) {
        return <div>Cargando producto...</div>
    }



    return (
        <div>Nombre del producto: {productDetail.name}</div>
    )
}


