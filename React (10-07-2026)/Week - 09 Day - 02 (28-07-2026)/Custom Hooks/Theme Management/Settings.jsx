import React from 'react'
import useDarkmode from './useDarkmode'

function Settings() {
    let {dark, changeTheme} = useDarkmode()
  return (
    <div style={{
        background : dark ? "black" : "white",
        color : dark ? "white" : "black",
        padding : "20px",
        height : "100vh"
      }}>
        <h2>
            {dark ? "Dark Mode" : "Light Mode"}
        </h2>

        <button onClick={changeTheme}>Change Theme</button>
      
    </div>
  )
}

export default Settings
