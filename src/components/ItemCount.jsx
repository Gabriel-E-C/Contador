import React, { useState } from 'react'

function ItemCount ({stock, inicial, onAdd}) {
    
    const [x, setX] = useState(0);
    console.log('render')
    return(
        <>
            <div id='contenedorContador'>
                <button onClick={() => {
                    if ((x + 1) <= stock){
                        setX( x + 1);
                        console.log ({x});
                    }else{
                        alert('No se puede superar el stock.')
                    }
                }}>
                    +
                </button>
                <div id='numero'>
                    Numero: {x}
                </div>
                <button onClick={() => {
                    if ((x-1) >= inicial){
                        setX( x - 1);
                        console.log ({x});
                    }
                }}>
                    -
                </button>
                <br />
                <button  onClick={() => {
                    if (stock != 0){
                        onAdd ()
                    } else {
                        alert ('Lo sentimos. No hay producto en stock.')
                    }
                }}> Agregar al Carro de Compras</button>
            </div>    
            
        </>
    )
}

export default ItemCount;