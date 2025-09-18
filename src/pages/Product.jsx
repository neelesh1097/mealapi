import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams(); // 👈 get product id from URL
    const [item, seItems] = useState([]);

    useEffect(() => {

        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                seItems(data)
            })
    }, [id]);



    return (
        <div className="">
        <div className='product-detail'>
            <div className="image">
                <img src={item.image} alt="" srcset="" />
            </div>
            <div className="ingridients">
                 <h3>Ingredients</h3>
      <ul>
        {item.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
            </div>
           
        </div>

        <div className='instructions'>
            <h1>INSTRUCTIONS </h1>
            {item.instructions}
            </div>
        </div>
       

        
    )
}

export default Product