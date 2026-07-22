import React, { useState } from 'react'

function Feedbacks() {
    let [feedback, setfeedback] = useState("")

  return (
    <div>
        <textarea
        name='feedback'
        placeholder='Write your feedback'
        value={feedback}
        onChange={(e)=>setfeedback(e.target.value)}
        ></textarea>

        <p>Feedback : {feedback}</p>
    </div>
  )
}

export default Feedbacks
