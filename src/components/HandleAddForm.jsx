import React from 'react';




const HandleAddForm = () => {

    return (
        <form >
            <label>Nombre</label>
            <input type="string" name="name"/>
            <label >descripcion</label>
            <input type="string" name="descripcion" />
            <label >categoria</label>
            <input type="string" name="categoria" />
            <label >sctock</label>
            <input type="int" name="stock" />
            <label >precio</label>
            <input type="double" name="precio" />
            <button className='nuevo'>Agregar nuevo objeto</button>
        </form>
    );
}

export default HandleAddForm;