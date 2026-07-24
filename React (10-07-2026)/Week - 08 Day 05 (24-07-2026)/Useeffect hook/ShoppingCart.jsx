import React, { useEffect, useState } from 'react'

function ShoppingCart() {
    let [products, setproducts] = useState([])
    let [cartcount, setcartcount] = useState(0)

    // Without Dependency array :- 
    useEffect(()=>{
        console.log("Component Rendered")
    })

    // With Empty Dependency Array :- 
    useEffect(()=>{
        console.log("Fetching Products...")

        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response)=>response.json())
        .then((data)=>setproducts(data))
    },[])

    // With Dependency array :- 
    useEffect(()=>{
        document.title = `Cart(${cartcount})`
        console.log("Cart Updated")
    },[cartcount])

    // Cleanup Function :- 
    useEffect(()=>{
        function onlinestatus(){
            console.log("Internet Connected")
        }

        window.addEventListener("online", onlinestatus)

        return()=>{
            window.removeEventListener("online",onlinestatus)
            console.log("Event Listener Removed")
        }
    },[])
  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Cart Items : {cartcount}</h2>

      <button onClick={()=>setcartcount(cartcount+1)}>Add To Cart</button>

      <br />
      <hr />

      <h2>Products</h2>

      {products.map((item)=>{
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  )
}

export default ShoppingCart
