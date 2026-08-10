import React from 'react'

function Roles() {
    let role = "admin"

    switch(role){
        case "admin" :
            return (
                <div>
                    <h2>Admin Dashboard</h2>
                    <button>Delete User</button>
                    <button>Add User</button>
                </div>
            )
            case "manager" :
                return (
                    <div>
                        <h2>Manager Dashboard</h2>
                        <button>View Reports</button>
                        <button>Add User</button>
                    </div>
                )
                case "user" :
                    return (
                        <div>
                            <h2>User Dashboard</h2>
                            <button>View Profile</button>
                            <button>View Orders</button>
                        </div>
                    )
    }
}

export default Roles
