import React from 'react'

function Appslist() {
    let apps = [
        {id : 101, appname : "Playstore", rating: 4.5},
        {id : 102, appname : "Appstore", rating : 4.8},
        {id : 103, appname : "MicrosoftStore", rating : 4.4}
    ]
  return (
    <div>
      <h1>This is Applist</h1>

      {apps.map((app)=>(
        <div key={app.id}>
            <h2>{app.id}</h2>
            <h2>{app.appname}</h2>
            <h2>{app.rating}</h2>
        </div>
      ))}
    </div>
  )
}

export default Appslist
