import React, { useEffect, useState } from "react";
import userlist from "./userlist";
import "./Spinner.css";


function Withapidataloading(Component) {
  return function Protecteduserlist() {
    let [loading, setloading] = useState(true)
    let [users, setusers] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setusers(data)
          setloading(false)
        })
    }, [])

    if (loading) {
      return (
        <div className="container">
          <div className="loader"></div>
          <h3>Loading...</h3>
        </div>
      )
    }

    return <Component users={users} />;
  }
}

let Protecteduserlist = Withapidataloading(userlist)

export default Protecteduserlist