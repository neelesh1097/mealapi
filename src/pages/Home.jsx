import React from 'react'
import {useState , useEffect} from 'react'

function Home() {
     const [item, setItem] = useState([]);



   useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // check full API response
        setItem(data.recipes); // ✅ correct: API returns recipes array
      })
      .catch((err) => console.error(err));
  }, []);

  return (
       <div className = 'item-container'>{
item.map(({id , image ,cuisine ,name}) => (
  <section key ={id} className="card">
<img src={image} alt=""/>
    <section className="content">
      <p>{name}</p>
      <p>{cuisine }</p>

    </section>
  </section>
))

   }


   </div>
    
  )
}

export default Home