import { Routes, Route, Link} from 'react-router-dom'
import Products from './Products'
import Cart from './Cart'
import Orders from './Orders'
import Login from './Login'
import Home from './Home'
import Profile from './Profile'

function Ecommercerouter() {
  return (
    <div>
      <h1>Online Shopping</h1>

      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/Products">Products</Link>
        <Link to = "/Cart">Cart</Link>
        <Link to = "/Orders">Orders</Link>
        <Link to = "/Profile">Profile</Link>
        <Link to = "/Login">Login</Link>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home/>}/> |
        <Route path = "/Products" element = {<Products/>}/> |
        <Route path = "/Cart" element = {<Cart/>}/> |
        <Route path = "/Orders" element = {<Orders/>}/> |
        <Route path = "/Profile" element = {<Profile/>}/> |
        <Route path = "/Login" element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default Ecommercerouter
