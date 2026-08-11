import React, { useEffect, useState } from "react"

function Products() {
  let [products, setproducts] = useState([])
  let [loading, setloading] = useState(true)
  let [error, seterror] = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        return response.json()
      })
      .then(data => {
        setproducts(data.products)
        setloading(false)
      })
      .catch(error => {
        seterror(error.message)
        setloading(false)
      })
  }, [])

  if (loading) {
    return <h2>Loading products...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  )
}

export default Products