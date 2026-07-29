import React, { use, useCallback, useState } from 'react'
import Addrunsbutton from './Addrunsbutton'

function Scoreboard() {
  let [score, setscore] = useState(0)
  let [theme, settheme] = useState("Light")

  let addruns = useCallback(()=>{
    setscore((prev)=>prev+4)
  },[])

  console.log("ScoreBoard Rendered")
   
  return (
    <div>
      <h1>Cricket ScoreBoard</h1>

      <h2>Team : India</h2>
      <h2>Score : {score}</h2>
      <h2>Theme : {theme}</h2>

      <Addrunsbutton addruns = {addruns}/>

      <button onClick={()=>settheme(theme === "Light"? "Dark" : "Light")}>Change Theme</button>
    </div>
  )
}

export default Scoreboard
