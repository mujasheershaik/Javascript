import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Protectedroute from './Protectedroute'
import Orders from './Orders'
import Login from './Login'

function Protectedrouter() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Orders" element = {
            <Protectedroute>
                <Orders/>
            </Protectedroute>
        }></Route>

      </Routes>
    </div>
  )
}

export default Protectedrouter
