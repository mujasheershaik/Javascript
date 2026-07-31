import React from 'react'

function Weather() {
    let temperature = [32, 34, 30]

    let [today, tomorrow, dayaftertomorrow] = temperature
  return (
    <div>
      <h1>Weather Report</h1>

      <h2>Today :{today}</h2>
      <h2>Tomorrow : {tomorrow}</h2>
      <h2>Day After Tomorrow : {dayaftertomorrow}</h2>

    </div>
  )
}

export default Weather
