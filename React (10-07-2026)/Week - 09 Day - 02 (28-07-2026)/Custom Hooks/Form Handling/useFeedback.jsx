import React, { useState } from 'react'

function useFeedback() {
    let[message, setmessage] = useState("")
  return {
    message,
    setmessage
  }
}

export default useFeedback
