import React, { useEffect, useState } from 'react'
import Product from './Product'

// HOC
function withLoading(Component) {
  return function ProtectedComponent() {
    let [loading, setLoading] = useState(true)
    let [products, setProducts] = useState([])

    useEffect(() => {
      setTimeout(() => {
        setProducts([
          { id: 1, title: "LED TV" },
          { id: 2, title: "Washing Machine" },
          { id: 3, title: "Sound Bar" }
        ])
        setLoading(false)
      }, 3000)
    }, [])

    if (loading) {
      return <h2>Loading...</h2>
    }
    return <Component products={products} />
  }
}

// Protected Component
let ProtectedProduct = withLoading(Product)

export default ProtectedProduct