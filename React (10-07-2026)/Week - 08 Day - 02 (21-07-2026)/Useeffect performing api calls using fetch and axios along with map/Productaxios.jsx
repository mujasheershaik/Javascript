import React, { useEffect, useState } from "react"
import axios from "axios"

function Productsaxios() {
  let [products, setproducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        setproducts(response.data)
      })
  }, [])

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Productsaxios