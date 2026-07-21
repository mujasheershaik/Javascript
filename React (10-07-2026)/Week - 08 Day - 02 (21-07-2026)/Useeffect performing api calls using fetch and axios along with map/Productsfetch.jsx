import React, { useEffect, useState } from "react"

function Productsfetch() {
  let [products, setproducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setproducts(data)
      })
  }, [])

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>₹{product.price}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Productsfetch