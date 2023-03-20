import React from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AddProductPage } from './pages/AddProductPage';
import { DetailsPage } from './pages/DetailsPage';
import { EditProductPage } from './pages/EditProductPage';
import { HomePage } from './pages/HomePage';
import { ListProductsPage } from './pages/ListProductsPage';


const App = () => {




    return (
        <BrowserRouter>
            <div className="container">
                <h1>Inventario</h1>
                <div>
                    <Link className='link' to='/'>Pagina Principal</Link>
                    <Link className='link' to='/products'>Lista De Productos</Link>
                    <Link className='link' to='/add-product'>Agregar Un Producto</Link>
                </div>
                <div className='Flex-row'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/products' element={<ListProductsPage />} />
                        <Route path='/add-product' element={<AddProductPage />} />
                        <Route path='/details' element={<DetailsPage />} />
                        <Route path='/edit-product' element={<EditProductPage />} />

                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;