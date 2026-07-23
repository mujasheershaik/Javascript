import React from 'react'

function userlist({users}) {
  return (
    <div>
      <h1>Users</h1>

      {users.map((user)=>(
        <div key={user.id}>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <br />
        </div>
      ))}
    </div>
  )
}

export default userlist
