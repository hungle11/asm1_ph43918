import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

    const ProductPage = ({ products, removeProduct }) => {
    
        const onHandleRemove = (id) => {
            console.log("Product: ", id);
            removeProduct(id)
        }
    return (
        <div>
          
           <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => onHandleRemove(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </div>
    )
}

export default ProductPage