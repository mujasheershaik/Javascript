import React, { Fragment } from 'react'
import withLoading from './withLoading'

function Dashboard({products}) {
  return (
    <>
      <h1>Product Dashboard</h1>

      {products.map((product)=>(
        <Fragment key={product.id}>
            <h2>{product.title}</h2>
            <h2>Price : $ {product.price}</h2>
        </Fragment>
    ))}
    </>
  )
}

export default withLoading(Dashboard)
