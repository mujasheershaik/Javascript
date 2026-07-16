import React, { useContext } from 'react'
import { cartcontext } from './A'

function C() {
    let {user,setuser,
        cart, setcart,
        wishlist, setwishlist,
        theme, settheme}
        = useContext(cartcontext)

        let laptop = {
            id : 1001,
            name : "HP VICTUS"
        }

        let mobile = {
            id : 1002,
            name : "iphone"
        }

  return (
    <div>
      <h1>This is E Component</h1>
    
      <h2>User : {user}</h2>
      <button onClick={()=>setuser("Mujasheer")}>Change User</button>

      <br />

      <h2>Theme : {theme}</h2>
      <button onClick={()=>settheme("Dark")}>Dark Theme</button>

      <button onClick={()=>settheme("Light")}>Light Theme</button>

      <br />

      <button onClick={()=>setcart([...cart, laptop])}>Add Laptop</button>

      <button onClick={()=>setcart([...cart, mobile])}>Add Mobile</button>

      <button onClick={()=>setcart([])}>Clear Cart</button>

      <br />

      <button onClick={()=>setwishlist([...wishlist, laptop])}>Add Laptop to Wishlist</button>

      <button onClick={()=>setwishlist([...wishlist, mobile])}>Add Mobile to Wishlist</button>

      <button onClick={()=>setwishlist([])}>Clear Wishlist</button>

      <h2>Cart Products : {cart.length}</h2>

      {cart.map((item, index) => (
        <h3 key={index}>{item.name}</h3>
      ))}


      {/* <h3>{cart.map((item)=> item.name)}</h3> */}


      <h2>Wishlist : {wishlist.length}</h2>

      {wishlist.map((item,index)=>(
        <h3 key={index}>{item.name}</h3>
      ))}

      {/* <h3>{wishlist.map((item)=> item.name)}</h3> */}
    </div>
  )
}

export default C
