import React, { useEffect, useState } from 'react'

function useProducts() {
    let [products, setproducts] = useState([])
    let [loading, setloading] = useState(true)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>{
            setproducts(data)
            setloading(false)
        })
    },[])
  return {products, loading}
}

export default useProducts
