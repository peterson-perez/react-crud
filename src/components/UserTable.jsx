import React from "react";

const UserTable = (props) => { 


return (
    <table>
        <thead>
         <tr>
            <th>nombre</th>
            <th>descripcion</th>
            <th>precio</th>
         </tr>
        </thead>
        <tbody>
         <tr >
           <td>nombre</td>
           <td>descripcion</td>
           <td>250</td>
                    <button className="editar">editar</button>
                    <button className="edit">eliminar</button>
         </tr>
         <tr >
           <td>nombre</td>
           <td>descripcion</td>
           <td>250</td>
                    <button className="editar">editar</button>
                    <button className="edit">eliminar</button>
         </tr>
         <tr >
           <td>nombre</td>
           <td>descripcion</td>
           <td>250</td>
                    <button className="editar">editar</button>
                    <button className="edit">eliminar</button>
         </tr>
         <tr >
           <td>nombre</td>
           <td>descripcion</td>
           <td>250</td>
                    <button className="editar">editar</button>
                    <button className="edit">eliminar</button>
         </tr>
         <tr >
           <td>nombre</td>
           <td>descripcion</td>
           <td>250</td> 
                   <button className="editar">editar</button>
                   <button className="edit">eliminar</button>
         </tr>
         </tbody>
    </table>
)

}

export default UserTable;