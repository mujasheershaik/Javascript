import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Students from "./Students";
import Courses from "./Courses";
import Attendance from "./Attendance";
import Notfound from "./Notfound";

function Studentrouter2() {
  return (
    <div>

      <h1>Student Management System</h1>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/Students">Students</Link> |
        <Link to="/Courses">Courses</Link> |
        <Link to="/Attendance">Attendance</Link>
      </nav>

      <hr />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Students" element={<Students />} />

        <Route path="/Courses" element={<Courses />} />

        <Route path="/Attendance" element={<Attendance />} />

        {/* 404 (Not Found) Page */}
        <Route path="*" element={<Notfound />} />
      </Routes>

    </div>
  )
}

export default Studentrouter2