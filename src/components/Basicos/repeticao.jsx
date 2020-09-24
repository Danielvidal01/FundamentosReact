import React from 'react';
import Products from '../../data/products.js';


export default props =>{

    function getProducts(){
        return Products.map(product=>{
        return <li key ={product.id}>
            {product.id} - {product.name} - R$ {product.price}
            </li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
            {getProducts()}
            </ul>
        </div>
    )
}