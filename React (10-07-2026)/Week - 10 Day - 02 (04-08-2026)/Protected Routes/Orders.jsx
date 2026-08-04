import React from 'react'
import { useNavigate } from 'react-router-dom'

function Orders() {
    let navigate = useNavigate()

    function logout(){
        localStorage.removeItem("isloggedin")
        navigate("/Login")
    }
  return (
    <div>
      <h2>My Orders</h2>

      <ul>
        <li>Iphone 17</li>
        <li>Bluetooth Headphones</li>
        <li>Laptop Bag</li>
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Orders
