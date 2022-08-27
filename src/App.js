import React, { useState } from 'react';
import HandleAddForm from './components/HandleAddForm';
import UserTable from './components/UserTable';

const App = () => {
     
const products = () => {
    fetch('https://localhost:7051')
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response)
    })
    }

    const [ product, setProduct ] = useState(products);

    const HandleAdd = product => {
        product.id = product.length + 
        setProduct([...product, HandleAdd])
    }


    return (
      <div className="container">
          <h1>Inventario</h1>
          <div className='Flex-row'>
              <div className='Flex-large'>
              <h2>Productos</h2>
           <HandleAddForm HandleAdd={HandleAdd}/>
              </div>
              <div className='Flex-large'>
                  <h2>ver</h2>
                  <UserTable products={product} />
              </div>
          </div>
      </div>
    );
}

export default App;