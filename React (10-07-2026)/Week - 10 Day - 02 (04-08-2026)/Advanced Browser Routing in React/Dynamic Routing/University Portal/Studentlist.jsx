import { Link } from 'react-router-dom'

function Studentlist() {
    let students = [
        {rollno : "202601", name : "Shaik"},
        {rollno : "202602", name : "Mujasheer"},
        {rollno : "202603", name : "Mudassir"}
    ]
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student)=>(
        <div key={student.rollno}>
            <Link to = {`/Student/${student.rollno}`}>{student.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Studentlist
