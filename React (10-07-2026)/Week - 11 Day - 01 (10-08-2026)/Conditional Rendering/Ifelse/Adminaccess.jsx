import React from 'react'

function Adminaccess() {
    let role = "admin"
    if (role === "admin"){
    return(
        <div>
            <h1>Admin Dashboard</h1>

            <button>Delete User</button>
            <button>Add user</button>
        </div>
    )
}
  return (
    <div>
      <h2>User Dashboard</h2>

      <button>View Profile</button>
    </div>
  )
}

export default Adminaccess
