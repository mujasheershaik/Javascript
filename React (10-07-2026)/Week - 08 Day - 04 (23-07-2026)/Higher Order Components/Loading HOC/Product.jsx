import React from 'react'

function Product({ products }) {
  return (
    <div>
      <h1>Products</h1>

      {products.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  )
}

export default Product