import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ products, onDelete }) => {


  const [message, setMessage] = useState('')

  const handleDelete = (id) => {
    fetch('/ProductId?id=' + id, {
      method: 'DELETE'
    }).then(async response => {
      if (response.ok === true) {
        setMessage(await response.json())
        onDelete()

      } else {
        setMessage('No se pudo eliminar el producto')
      }
      setTimeout(() => {
        setMessage('')
      }, 5000)
    })
      .catch(error => {
        console.error(error)
      })
  }


  return (
    <>
      {message}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Existencia</th>
            <th className="table-action">Accion</th>



          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>

                <td className="table-action">
                  <Link className="detail" to={'/details?id=' + product.id}>Detalle</Link>
                  <Link className="edit" to={'/edit-product?id=' + product.id}>Editar</Link>
                  <button className="delete" onClick={() => handleDelete(product.id)}>Eliminar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )

}

export default ProductTable;