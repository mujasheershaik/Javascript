import React, { useState } from 'react'

function useDarkmode() {
    let [dark, setdark] = useState(false)

    function changeTheme(){
        setdark(!dark)
    }
  return {
    dark,
    changeTheme
  }
}

export default useDarkmode
