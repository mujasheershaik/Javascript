import { Link, Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Student Management System</h1>

      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/Students">Students</Link>
        <Link to = "/Courses">Courses</Link>
        <Link to = "/Attendance">Attendance</Link>
      </nav>

      <hr />

      <Outlet/>

    </div>
  )
}

export default Dashboard
