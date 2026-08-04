import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Online Shopping Mall</h1>

      <p>Welcome to our shopping website</p>

      <p>Click below to login and view your orders</p>

      <Link to ="/Login">
      <button>Go to Login</button>
      </Link>
    </div>
  )
}

export default Home
