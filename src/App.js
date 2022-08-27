import React, { useEffect, useState } from 'react';
import HandleAddForm from './components/HandleAddForm';
import ProductTable from './components/ProductTable';
import { Router } from 'react-router';


// to do
// pagina de detalle
// pagina para editar
// pagina para agregar
// pagina de informacion(pagina principal)
// la pagina para listar todos los productos



const App = () => {
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

    const handleAdd = () => {
        getAllProducts()
    }


    return (
        <Router>
            <div className="container">
                <h1>Inventario</h1>
                <div className='Flex-row'>
                    <div className='Flex-large'>
                        <h2>Productos</h2>
                        <HandleAddForm handleAdd={handleAdd} />
                    </div>
                    <div className='Flex-large'>
                        <h2>Lista de productos</h2>
                        <ProductTable products={product} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </Router>
    );
}



export default App;