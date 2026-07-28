import React from 'react'
import Useproducts from './Useproducts'

function Productlist() {
    let {products, loading} = Useproducts()

    if (loading){
        return <h2>Loading Products</h2>
    }
  return (
    <div>
      <h2>Products</h2>

      {products.map((product)=>(
        <div key={product.id}>
            <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Productlist
