import React from 'react'
import useFeedback from './useFeedback'

function Feedback() {

  let {message, setmessage} = useFeedback()
  return (
    <div>
      <h2>Feedback Form</h2>

      <textarea
      value={message}
      onChange={(e)=>setmessage(e.target.value)}></textarea>

      <h3>{message}</h3>
    </div>
  )
}

export default Feedback
