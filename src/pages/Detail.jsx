import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
const DetailPage = ({products}) => {
    

        const {id} = useParams();
        const currenProduct = products.find((item)=> item.id === Number(id))   
        console.log (currenProduct);
        return ( 
        
        <div>DetailPage
            <h3>{currenProduct?.name}</h3>
            <p>{currenProduct?.price}</p>

        </div>
    )
}

export default DetailPage